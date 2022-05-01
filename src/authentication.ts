/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { mergeHeaders } from './core';
import { passThroughInterceptor } from './core';
import { AuthenticatorInterface } from './core';

/** None authentication provider */
export const noneAuthenticationProvider = () => passThroughInterceptor;

export const customHeaderAuthenticationProvider = ({
  xAuthToken,
}: {
  xAuthToken: string;
}): AuthenticatorInterface<boolean> => {
  return (requiresAuth?: boolean) => {
    if (!requiresAuth) {
      return passThroughInterceptor;
    }

    return (request, options, next) => {
      const customHeaderParams = {
        'X-Auth-Token': xAuthToken,
      };
      mergeHeaders(request.headers ?? {}, customHeaderParams);

      return next(request, options);
    };
  };
};
