/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ContentTypeEnum
 */
export enum ContentTypeEnum {
  EnumApplicationjson = 'application/json',
}

/**
 * Schema for ContentTypeEnum
 */
export const contentTypeEnumSchema: Schema<ContentTypeEnum> = stringEnum(ContentTypeEnum);
