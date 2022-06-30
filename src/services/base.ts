import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { storageKeys } from '_commonConfig';
import config from './config';

const POST = 'post';
const GET = 'get';
const PUT = 'put';
const PATCH = 'patch';
const DELETE = 'delete';
const DEFAULT_ERROR = 'Something went wrong, Please try again later';

interface RequestOptions {
  baseURL?: string;
  method: string;
  payload?: object | null;
  formData?: FormData | null;
  headers?: object;
  priv?: boolean;
  json?: boolean;
}
interface ResponseNewToken {
  status: string | number;
  msg: string;
}
interface ResponseAPIBase {
  status: number;
  message: string;
}
interface ErrorMessage {
  REQUEST_ERROR: string;
  UNAUTHORISED: string;
  NOT_FOUND: string;
  SERVER_ERROR: string;
  DATABASE_ERROR: string;
}
type ResponseToken = Promise<string | undefined>;
type RequestResponse = Promise<object | string | any | ResponseNewToken>;

const getToken = async (): ResponseToken => {
  try {
    const token = await AsyncStorage.getItem(storageKeys.accessToken);
    if (token !== null) {
      // token previously stored
      return JSON.parse(token);
    }
  } catch (e) {
    throw new Error('Token not found or could not be retrieved');
  }
};

const handleResponse = async (response: Response): RequestResponse => {
  // console.log('API response -> ', response);
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response
      .json()
      .then(data =>
        handleResponseSuccess({ ...data, status: response.status }),
      );
  } else {
    return response.text();
  }
};

const handleResponseSuccess = async (
  response: any | ResponseNewToken,
): RequestResponse => {
  // console.log('handleResponseSuccess: ', response);
  if (response.status === 'error' && response.msg === 'Token Expired') {
    // Generate new token
    /*const newToken = await Auth.refreshToken();
    if (newToken.status === 'error') {
      throw new Error(newToken.msg);
    }*/

    // Save generated new token
    /*let token = await AsyncStorage.getItem(StorageKeys.accessToken);
    token = JSON.parse(token);
    token.accessToken = newToken.accessToken;
    await AsyncStorage.setItem(StorageKeys.accessToken, JSON.stringify(token));*/

    return {
      status: 'new token',
      msg: 'New token generated',
    };
  }

  if (response.status === 'error') {
    throw new Error(DEFAULT_ERROR);
  }

  return response;
};

const request = async (
  route: string,
  requestOptions: RequestOptions,
): RequestResponse => {
  const {
    baseURL = config.BASE_URL,
    method = GET,
    payload = null,
    formData = null,
    headers = {},
    json = true,
    priv = true,
  } = requestOptions;

  let init = {
    method: method,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
  };
  if (payload) {
    init = {
      ...init,
      headers: {
        ...init.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
  }
  if (formData) {
    init = {
      ...init,
      headers: {
        ...init.headers,
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    };
  }
  if (priv) {
    let token = await getToken();
    init.headers = {
      ...init.headers,
      Authorization: `Bearer ${token.accessToken}`,
    };
  }

  return fetch(`${baseURL}${route}`, init).then(async res => {
    if (!json) {
      return res;
    }

    res = await handleResponse(res);
    if (res.status === 'new token') {
      return request(route, {
        method,
        payload,
        formData,
        headers,
        json,
        priv,
      });
    }

    return res;
  });
};

const handleError = (
  error: ResponseAPIBase,
  msg: string | ErrorMessage = DEFAULT_ERROR,
) => {
  let errMsg = msg;

  // exception string error
  if (typeof msg === 'string') {
    Alert.alert('Alert', msg);
    return {
      status: error.status || 500,
      message: errMsg,
    };
  }

  switch (error.status) {
    case 401:
      errMsg = msg.REQUEST_ERROR;
      break;
    case 403:
      errMsg = msg.UNAUTHORISED;
      break;
    case 404:
      errMsg = msg.NOT_FOUND;
      break;
    case 501:
      errMsg = msg.SERVER_ERROR;
      break;
    case 502:
      errMsg = msg.DATABASE_ERROR;
      break;
    default:
      errMsg = DEFAULT_ERROR;
  }

  Alert.alert('Alert', errMsg);
  return {
    status: error.status,
    message: errMsg,
  };
};

export default {
  POST,
  PUT,
  PATCH,
  GET,
  DELETE,
  request,
  handleResponse,
  handleError,
  getToken,
};
