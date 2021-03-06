/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PeriodEnum
 */
export enum PeriodEnum {
  Yearly = 'yearly',
  Monthly = 'monthly',
}

/**
 * Schema for PeriodEnum
 */
export const periodEnumSchema: Schema<PeriodEnum> = stringEnum(PeriodEnum);
