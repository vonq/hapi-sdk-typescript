/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface WeeklyWorkingHours {
  to: string[];
}

export const weeklyWorkingHoursSchema: Schema<WeeklyWorkingHours> = object({
  to: ['to', array(string())],
});
