/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AudienceGroupEnum
 */
export enum AudienceGroupEnum {
  Generic = 'generic',
  Niche = 'niche',
}

/**
 * Schema for AudienceGroupEnum
 */
export const audienceGroupEnumSchema: Schema<AudienceGroupEnum> = stringEnum(AudienceGroupEnum);
