/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface FacetOptionShowFacetsModel {
  /** the facet name */
  facet: string;
  [key: string]: unknown;
}

export const facetOptionShowFacetsModelSchema: Schema<FacetOptionShowFacetsModel> = expandoObject(
  { facet: ['facet', string()] }
);
