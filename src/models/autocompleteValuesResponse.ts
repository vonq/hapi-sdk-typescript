/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface AutocompleteValuesResponse {
  key: string;
  label: string;
}

export const autocompleteValuesResponseSchema: Schema<AutocompleteValuesResponse> = object(
  { key: ['key', string()], label: ['label', string()] }
);
