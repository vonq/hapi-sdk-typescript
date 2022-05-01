/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface ContractProductModel {
  productId?: string;
  title?: string;
  [key: string]: unknown;
}

export const contractProductModelSchema: Schema<ContractProductModel> = expandoObject(
  {
    productId: ['product_id', optional(string())],
    title: ['title', optional(string())],
  }
);
