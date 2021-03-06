/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CurrencyEnum
 */
export enum CurrencyEnum {
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
}

/**
 * Schema for CurrencyEnum
 */
export const currencyEnumSchema: Schema<CurrencyEnum> = stringEnum(CurrencyEnum);
