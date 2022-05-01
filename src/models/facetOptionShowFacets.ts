/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface FacetOptionShowFacets {
  /** the facet name */
  facet: string;
}

export const facetOptionShowFacetsSchema: Schema<FacetOptionShowFacets> = object(
  { facet: ['facet', string()] }
);
