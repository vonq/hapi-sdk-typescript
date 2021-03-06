/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface Range3Model {
  /**
   * Minimum salary indication of the indicated period, if given, cannot be greater
   * than 'to', but equal to 'to' is allowed. This integer value should be specified in units (not cents).
   */
  from?: number;
  /** Maximum salary indication of the indicated period. This integer value should be specified in units (not cents). */
  to: number;
  /** The currency in which the range amount is expressed. Must be a valid ISO-4217 value. */
  currency?: string;
  [key: string]: unknown;
}

export const range3ModelSchema: Schema<Range3Model> = expandoObject({
  from: ['from', optional(number())],
  to: ['to', number()],
  currency: ['currency', optional(string())],
});
