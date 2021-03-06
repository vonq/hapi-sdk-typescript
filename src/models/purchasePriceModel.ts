/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface PurchasePriceModel {
  currency?: string;
  amount?: number;
  [key: string]: unknown;
}

export const purchasePriceModelSchema: Schema<PurchasePriceModel> = expandoObject(
  {
    currency: ['currency', optional(string())],
    amount: ['amount', optional(number())],
  }
);
