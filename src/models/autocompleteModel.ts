/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema } from '../schema';
import {
  RequiredParametersEnum,
  requiredParametersEnumSchema,
} from './requiredParametersEnum';

export interface AutocompleteModel {
  requiredParameters?: RequiredParametersEnum;
  [key: string]: unknown;
}

export const autocompleteModelSchema: Schema<AutocompleteModel> = expandoObject(
  {
    requiredParameters: [
      'required_parameters',
      optional(requiredParametersEnumSchema),
    ],
  }
);
