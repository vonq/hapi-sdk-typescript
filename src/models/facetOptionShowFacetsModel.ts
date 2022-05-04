/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface FacetOptionShowFacetsModel {
  /** The facet name that becomes required when this option is chosen. */
  facet: string;
  [key: string]: unknown;
}

export const facetOptionShowFacetsModelSchema: Schema<FacetOptionShowFacetsModel> = expandoObject(
  { facet: ['facet', string()] }
);
