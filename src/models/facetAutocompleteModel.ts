/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string, unknown } from '../schema';

export interface FacetAutocompleteModel {
  term?: string;
  /** An object with `contract_credentials` data */
  credentials?: unknown;
  [key: string]: unknown;
}

export const facetAutocompleteModelSchema: Schema<FacetAutocompleteModel> = expandoObject(
  {
    term: ['term', optional(string())],
    credentials: ['credentials', optional(unknown())],
  }
);
