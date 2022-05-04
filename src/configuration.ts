/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { HttpClientOptions } from './core';

/** An interface for all configuration parameters required by the SDK. */
export interface Configuration {
  timeout: number;
  environment: Environment;
  httpClientOptions?: Partial<HttpClientOptions>;
  unstable_httpClientOptions?: any;
}

/** Environments available for API */
export enum Environment {
  Sandbox = 'sandbox',
  Production = 'production',
}
