/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AutocompleteModel,
  autocompleteModelSchema,
} from './autocompleteModel';
import { FacetOptionModel, facetOptionModelSchema } from './facetOptionModel';
import { FacetRuleModel, facetRuleModelSchema } from './facetRuleModel';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface FacetModel {
  /** The name of the Facet. To be used as a key when ordering a Campaign, under the `orderedProductsSpecs.postingRequirements` key. */
  name: string;
  /** The user facing label */
  label: string;
  /** The order in the list of vacancy fields to be displayed to the user when posting. Facets with lower `sort` values should be displayed first. */
  sort: string;
  /** Whether the Facet is required when ordering a Campaign. */
  required: boolean;
  /** The type of UI and data structure to be used to input and store values for this Facet. */
  type: TypeEnum;
  /** list of choices for this Facet's value. */
  options: FacetOptionModel[];
  /** special validation rules that apply for this Facet's value */
  rules?: FacetRuleModel[];
  /** Used for Facets whose value choices need to be fetched through an additional call to the [List autocomplete values for posting requirements](https://vonq.stoplight.io/docs/hapi/b3A6MzM2MDEzODk-list-autocomplete-values-for-posting-requirement) endpoint. */
  autocomplete: AutocompleteModel | null;
  [key: string]: unknown;
}

export const facetModelSchema: Schema<FacetModel> = expandoObject({
  name: ['name', string()],
  label: ['label', string()],
  sort: ['sort', string()],
  required: ['required', boolean()],
  type: ['type', typeEnumSchema],
  options: ['options', array(lazy(() => facetOptionModelSchema))],
  rules: ['rules', optional(array(lazy(() => facetRuleModelSchema)))],
  autocomplete: ['autocomplete', nullable(lazy(() => autocompleteModelSchema))],
});
