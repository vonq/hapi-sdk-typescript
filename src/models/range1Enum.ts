/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Range1Enum
 */
export enum Range1Enum {
  Hours = 'hours',
}

/**
 * Schema for Range1Enum
 */
export const range1EnumSchema: Schema<Range1Enum> = stringEnum(Range1Enum);
