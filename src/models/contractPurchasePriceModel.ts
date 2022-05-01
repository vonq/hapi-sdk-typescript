/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface ContractPurchasePriceModel {
  amount?: number;
  currency?: string;
  [key: string]: unknown;
}

export const contractPurchasePriceModelSchema: Schema<ContractPurchasePriceModel> = expandoObject(
  {
    amount: ['amount', optional(number())],
    currency: ['currency', optional(string())],
  }
);
