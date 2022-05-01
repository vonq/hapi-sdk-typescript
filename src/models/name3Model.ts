/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface Name3Model {
  /** ICU Locale code for the Language of the Seniority's name */
  languageCode?: string;
  /** Seniority name in one defined Language */
  value?: string;
  [key: string]: unknown;
}

export const name3ModelSchema: Schema<Name3Model> = expandoObject({
  languageCode: ['languageCode', optional(string())],
  value: ['value', optional(string())],
});
