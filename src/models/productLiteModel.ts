/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface ProductLiteModel {
  productId: string;
  title: string;
  [key: string]: unknown;
}

export const productLiteModelSchema: Schema<ProductLiteModel> = expandoObject({
  productId: ['product_id', string()],
  title: ['title', string()],
});
