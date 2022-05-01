/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RequiredParametersEnum
 */
export enum RequiredParametersEnum {
  Term = 'term',
  Credentials = 'credentials',
}

/**
 * Schema for RequiredParametersEnum
 */
export const requiredParametersEnumSchema: Schema<RequiredParametersEnum> = stringEnum(RequiredParametersEnum);
