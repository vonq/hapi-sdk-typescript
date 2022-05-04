/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RequiredParameterEnum
 */
export enum RequiredParameterEnum {
  Term = 'term',
  Credentials = 'credentials',
}

/**
 * Schema for RequiredParameterEnum
 */
export const requiredParameterEnumSchema: Schema<RequiredParameterEnum> = stringEnum(RequiredParameterEnum);
