/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema';

export interface OrderedProductsSpecModel {
  productId: string[];
  utm: string[];
  [key: string]: unknown;
}

export const orderedProductsSpecModelSchema: Schema<OrderedProductsSpecModel> = expandoObject(
  { productId: ['productId', array(string())], utm: ['utm', array(string())] }
);
