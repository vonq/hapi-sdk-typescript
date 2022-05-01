/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PlaceTypeEnum
 */
export enum PlaceTypeEnum {
  Place = 'place',
  District = 'district',
  Region = 'region',
  Country = 'country',
  Continent = 'continent',
  World = 'world',
}

/**
 * Schema for PlaceTypeEnum
 */
export const placeTypeEnumSchema: Schema<PlaceTypeEnum> = stringEnum(PlaceTypeEnum);
