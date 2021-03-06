/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema';

export interface Range4Model {
  to: string[];
  [key: string]: unknown;
}

export const range4ModelSchema: Schema<Range4Model> = expandoObject({
  to: ['to', array(string())],
});
