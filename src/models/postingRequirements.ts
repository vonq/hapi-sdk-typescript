/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface PostingRequirements {
  someText?: string;
  multipleSelectField?: string[];
  someIntValue?: number;
}

export const postingRequirementsSchema: Schema<PostingRequirements> = object({
  someText: ['someText', optional(string())],
  multipleSelectField: ['multipleSelectField', optional(array(string()))],
  someIntValue: ['someIntValue', optional(number())],
});
