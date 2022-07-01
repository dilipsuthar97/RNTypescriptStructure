/**
 * NOTE: This Navigation helper is useful when you want to navigate from anywhere
 * You can use this in that case
 */

// --------------- LIBRARIES ---------------
import * as React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
  Route,
  StackActions,
} from '@react-navigation/native';

// Create navigation ref
export const _navigationRef: React.Ref<NavigationContainerRef<any>> =
  React.createRef();

/**
 * Navigation to given screen
 * @param {String} name - name of screen/route
 * @param {Object} params - params with navigation route
 */
const navigate = (name: string, params: any) => {
  _navigationRef.current?.navigate(name, params);
};

/**
 * Reset the entire navigation stack and start with given route name
 * @param {Number} index - index for start route
 * @param {Array} routes - array containe route name and params ex. [{name: '', params: {}}]
 */
const reset = (index: number, routes: Route<string>[]) => {
  _navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
};

/**
 * It takes you back to the previous route in history
 */
const goBack = () => {
  _navigationRef.current?.dispatch(CommonActions.goBack());
};

/**
 * It takes you back to a previous screen in the stack
 * @param {Number} count - count for how many screens to pop back by
 */
const pop = (count: number = 1) => {
  _navigationRef.current?.dispatch(StackActions.pop(count));
};

/**
 * It takes you back to the first screen in the stack
 */
const popToTop = () => {
  _navigationRef.current?.dispatch(StackActions.popToTop());
};

/**
 *  It Adds a route on top of the stack and navigates forward to it
 * @param {String} name
 * @param {Object} params
 */
const push = (name: string, params: any) => {
  _navigationRef.current?.dispatch(StackActions.push(name, params));
};

/**
 * It replace a route in the navigation state.
 * @param {String} name
 * @param {Object} params
 */
const replace = (name: string, params: any) => {
  _navigationRef.current?.dispatch(StackActions.replace(name, params));
};

export default {
  navigate,
  reset,
  pop,
  popToTop,
  goBack,
  push,
  replace,
};
