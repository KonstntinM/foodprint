import * as React from 'react';

//  Code from https://reactnavigation.org/docs/navigating-without-navigation-prop 

export const navigationRef = React.createRef();

export function navigate(name, params) {
    console.log("The navigate method was called.");
    navigationRef.current?.navigate(name, params);
    console.log("The navigation action was performed.");
}