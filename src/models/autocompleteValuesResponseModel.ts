/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface AutocompleteValuesResponseModel {
  key: string;
  label: string;
  [key: string]: unknown;
}

export const autocompleteValuesResponseModelSchema: Schema<AutocompleteValuesResponseModel> = expandoObject(
  { key: ['key', string()], label: ['label', string()] }
);
