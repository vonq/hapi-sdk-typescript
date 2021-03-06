/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Range2Enum
 */
export enum Range2Enum {
  Hours = 'hours',
}

/**
 * Schema for Range2Enum
 */
export const range2EnumSchema: Schema<Range2Enum> = stringEnum(Range2Enum);
