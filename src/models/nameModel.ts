/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface NameModel {
  /** ICU Locale code for the Language of the Education Level's name */
  languageCode?: string;
  /** Education Level name in one defined Language */
  value?: string;
  [key: string]: unknown;
}

export const nameModelSchema: Schema<NameModel> = expandoObject({
  languageCode: ['languageCode', optional(string())],
  value: ['value', optional(string())],
});
