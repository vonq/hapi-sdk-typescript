/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SortByEnum
 */
export enum SortByEnum {
  Relevant = 'relevant',
  Recent = 'recent',
  EnumOrderFrequencydesc = 'order_frequency.desc',
  EnumOrderFrequencyasc = 'order_frequency.asc',
  EnumCreateddesc = 'created.desc',
  EnumCreatedasc = 'created.asc',
  EnumListPricedesc = 'list_price.desc',
  EnumListPriceasc = 'list_price.asc',
}

/**
 * Schema for SortByEnum
 */
export const sortByEnumSchema: Schema<SortByEnum> = stringEnum(SortByEnum);
