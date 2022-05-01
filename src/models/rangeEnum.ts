/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RangeEnum
 */
export enum RangeEnum {
  Days = 'days',
  Months = 'months',
  Years = 'years',
}

/**
 * Schema for RangeEnum
 */
export const rangeEnumSchema: Schema<RangeEnum> = stringEnum(RangeEnum);
