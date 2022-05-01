/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

/** JobFunction(id, name, parent) */
export interface JobFunctionModel {
  id?: number;
  name: string;
  parent?: number;
  [key: string]: unknown;
}

export const jobFunctionModelSchema: Schema<JobFunctionModel> = expandoObject({
  id: ['id', optional(number())],
  name: ['name', string()],
  parent: ['parent', optional(number())],
});
