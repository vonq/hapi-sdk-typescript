/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  FacetOptionShowFacetsModel,
  facetOptionShowFacetsModelSchema,
} from './facetOptionShowFacetsModel';

export interface FacetOptionModel {
  mDefault: string;
  key: string;
  label: string;
  sort: string;
  /** References to Facets that becomes required when this option is selected */
  show?: FacetOptionShowFacetsModel[];
  [key: string]: unknown;
}

export const facetOptionModelSchema: Schema<FacetOptionModel> = expandoObject({
  mDefault: ['default', string()],
  key: ['key', string()],
  label: ['label', string()],
  sort: ['sort', string()],
  show: ['show', optional(array(lazy(() => facetOptionShowFacetsModelSchema)))],
});
