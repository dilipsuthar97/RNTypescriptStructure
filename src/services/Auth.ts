import { Ajax } from '_services';

const Auth = {
  login: () => {
    const route = '/login';
    return Ajax.request(route, { method: Ajax.GET, priv: false });
  },
};
export default Auth;
