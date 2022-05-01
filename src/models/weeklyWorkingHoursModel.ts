/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema';

export interface WeeklyWorkingHoursModel {
  to: string[];
  [key: string]: unknown;
}

export const weeklyWorkingHoursModelSchema: Schema<WeeklyWorkingHoursModel> = expandoObject(
  { to: ['to', array(string())] }
);
