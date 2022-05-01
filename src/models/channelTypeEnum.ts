/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ChannelTypeEnum
 */
export enum ChannelTypeEnum {
  EnumJobBoard = 'job board',
  EnumSocialMedia = 'social media',
  Community = 'community',
  Publication = 'publication',
  Aggregator = 'aggregator',
}

/**
 * Schema for ChannelTypeEnum
 */
export const channelTypeEnumSchema: Schema<ChannelTypeEnum> = stringEnum(ChannelTypeEnum);
