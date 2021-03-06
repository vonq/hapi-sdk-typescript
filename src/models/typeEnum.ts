/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TypeEnum
 */
export enum TypeEnum {
  AUTOCOMPLETE = 'AUTOCOMPLETE',
  DATE = 'DATE',
  SELECT = 'SELECT',
  TEXT = 'TEXT',
  TEXTAREA = 'TEXTAREA',
  TEXTEXPAND = 'TEXTEXPAND',
  AREACOUNT = 'AREACOUNT',
  HIER = 'HIER',
  STATISCH = 'STATISCH',
  MULTIPLE = 'MULTIPLE',
  SELECTMAPONLY = 'SELECT-MAP_ONLY',
}

/**
 * Schema for TypeEnum
 */
export const typeEnumSchema: Schema<TypeEnum> = stringEnum(TypeEnum);
