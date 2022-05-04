/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

/** The Product to be used in combination with the Contract when ordering a Campaign. */
export interface ContractProductModel {
  productId: string;
  title: string;
  [key: string]: unknown;
}

export const contractProductModelSchema: Schema<ContractProductModel> = expandoObject(
  { productId: ['product_id', string()], title: ['title', string()] }
);
