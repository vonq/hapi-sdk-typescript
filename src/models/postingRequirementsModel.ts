/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface PostingRequirementsModel {
  someText?: string;
  multipleSelectField?: string[];
  someIntValue?: number;
  [key: string]: unknown;
}

export const postingRequirementsModelSchema: Schema<PostingRequirementsModel> = expandoObject(
  {
    someText: ['someText', optional(string())],
    multipleSelectField: ['multipleSelectField', optional(array(string()))],
    someIntValue: ['someIntValue', optional(number())],
  }
);
