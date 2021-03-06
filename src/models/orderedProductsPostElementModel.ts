/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import {
  PostingRequirementsModel,
  postingRequirementsModelSchema,
} from './postingRequirementsModel';

export interface OrderedProductsPostElementModel {
  /** Product Identification */
  productId?: string;
  /**
   * Query string for UTM parameters
   * **Pattern:** `/^([%.-_!*a-zA-Z0-9]{1,}=[%.-_!*+,;$()a-zA-Z0-9]{1,}[&]{0,}){1,}$/`
   */
  utm?: string;
  /** Contract Identifier needed for My Contracts product */
  contractId?: string;
  postingRequirements?: PostingRequirementsModel;
  [key: string]: unknown;
}

export const orderedProductsPostElementModelSchema: Schema<OrderedProductsPostElementModel> = expandoObject(
  {
    productId: ['productId', optional(string())],
    utm: ['utm', optional(string())],
    contractId: ['contractId', optional(string())],
    postingRequirements: [
      'postingRequirements',
      optional(lazy(() => postingRequirementsModelSchema)),
    ],
  }
);
