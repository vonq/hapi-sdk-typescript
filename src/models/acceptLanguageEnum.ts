/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AcceptLanguageEnum
 */
export enum AcceptLanguageEnum {
  En = 'en',
  Nl = 'nl',
  De = 'de',
}

/**
 * Schema for AcceptLanguageEnum
 */
export const acceptLanguageEnumSchema: Schema<AcceptLanguageEnum> = stringEnum(AcceptLanguageEnum);
