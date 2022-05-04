/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema } from '../schema';
import {
  RequiredParameterEnum,
  requiredParameterEnumSchema,
} from './requiredParameterEnum';

/** Used for Facets whose value choices need to be fetched through an additional call to the [List autocomplete values for posting requirements](https://vonq.stoplight.io/docs/hapi/b3A6MzM2MDEzODk-list-autocomplete-values-for-posting-requirement) endpoint. */
export interface AutocompleteModel {
  /** List of keys to pass to  the body of the request calling the [List autocomplete values for posting requirements](https://vonq.stoplight.io/docs/hapi/b3A6MzM2MDEzODk-list-autocomplete-values-for-posting-requirement) endpoint. */
  requiredParameters: RequiredParameterEnum[];
  [key: string]: unknown;
}

export const autocompleteModelSchema: Schema<AutocompleteModel> = expandoObject(
  {
    requiredParameters: [
      'required_parameters',
      array(requiredParameterEnumSchema),
    ],
  }
);
