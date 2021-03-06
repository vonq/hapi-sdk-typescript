/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

export interface PostingWeeklyWorkingHoursModel {
  from?: number;
  /** This value needs to be an positive integer */
  to: number;
  [key: string]: unknown;
}

export const postingWeeklyWorkingHoursModelSchema: Schema<PostingWeeklyWorkingHoursModel> = expandoObject(
  { from: ['from', optional(number())], to: ['to', number()] }
);
