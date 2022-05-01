/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ChannelStatusEnum
 */
export enum ChannelStatusEnum {
  Online = 'online',
  Offline = 'offline',
  EnumInProgress = 'in progress',
  EnumNotProcessed = 'not processed',
}

/**
 * Schema for ChannelStatusEnum
 */
export const channelStatusEnumSchema: Schema<ChannelStatusEnum> = stringEnum(ChannelStatusEnum);
