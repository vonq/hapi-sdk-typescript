/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';

export interface ProductsDeliveryTimeModel {
  daysToProcess?: number;
  daysToSetup?: number;
  totalDays?: number;
  [key: string]: unknown;
}

export const productsDeliveryTimeModelSchema: Schema<ProductsDeliveryTimeModel> = expandoObject(
  {
    daysToProcess: ['days_to_process', optional(number())],
    daysToSetup: ['days_to_setup', optional(number())],
    totalDays: ['total_days', optional(number())],
  }
);
