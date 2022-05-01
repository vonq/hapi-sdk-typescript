/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  FacetOptionShowFacets,
  facetOptionShowFacetsSchema,
} from './facetOptionShowFacets';

export interface FacetOption {
  mDefault: string;
  key: string;
  label: string;
  sort: string;
  /** References to Facets that becomes required when this option is selected */
  show?: FacetOptionShowFacets[];
}

export const facetOptionSchema: Schema<FacetOption> = object({
  mDefault: ['default', string()],
  key: ['key', string()],
  label: ['label', string()],
  sort: ['sort', string()],
  show: ['show', optional(array(lazy(() => facetOptionShowFacetsSchema)))],
});
