/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StatusEnum
 */
export enum StatusEnum {
  Online = 'online',
  Offline = 'offline',
  EnumInProgress = 'in progress',
}

/**
 * Schema for StatusEnum
 */
export const statusEnumSchema: Schema<StatusEnum> = stringEnum(StatusEnum);
