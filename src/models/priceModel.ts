/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';
import { CurrencyEnum, currencyEnumSchema } from './currencyEnum';

export interface PriceModel {
  /** Price amount in specified currency and 2 decimal places */
  amount?: number;
  /** ISO 4217 code for the Currency. */
  currency?: CurrencyEnum;
  [key: string]: unknown;
}

export const priceModelSchema: Schema<PriceModel> = expandoObject({
  amount: ['amount', optional(number())],
  currency: ['currency', optional(currencyEnumSchema)],
});
