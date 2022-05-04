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
  /** Whether the option should be the default choice when rendering the SELECT. */
  mDefault: string;
  /** The value to be used when setting the value of the facet when this option is selected. */
  key: string;
  /** The option's user-friendly label */
  label: string;
  /** The order of the option in the list of options. lower value means higher rank. */
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
