// RootNavigation.js

import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  console.log('Navigation initiated');
  navigationRef.current?.navigate(name, params);
}

// add other navigation functions that you need and export them
// Source: https://reactnavigation.org/docs/navigating-without-navigation-prop