/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema';

export interface RecruiterInfoErrorsModel {
  name: string[];
  [key: string]: unknown;
}

export const recruiterInfoErrorsModelSchema: Schema<RecruiterInfoErrorsModel> = expandoObject(
  { name: ['name', array(string())] }
);
