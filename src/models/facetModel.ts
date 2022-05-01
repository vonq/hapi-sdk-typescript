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
import {
  FacetOptionShowFacetsModel,
  facetOptionShowFacetsModelSchema,
} from './facetOptionShowFacetsModel';
import { FacetRuleModel, facetRuleModelSchema } from './facetRuleModel';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface FacetModel {
  name: string;
  label: string;
  sort: string;
  required: boolean;
  type: TypeEnum;
  options: FacetOptionModel[];
  rules?: FacetRuleModel[];
  autocomplete: AutocompleteModel | null;
  show?: FacetOptionShowFacetsModel[];
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
  show: ['show', optional(array(lazy(() => facetOptionShowFacetsModelSchema)))],
});
