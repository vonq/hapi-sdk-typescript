/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema, string } from '../schema';

/** JobTitle(id, name, job_function, industry, frequency, canonical, alias_of, active) */
export interface JobTitleModel {
  id: number;
  name: string;
  [key: string]: unknown;
}

export const jobTitleModelSchema: Schema<JobTitleModel> = expandoObject({
  id: ['id', number()],
  name: ['name', string()],
});
