/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';
import { Range1Enum, range1EnumSchema } from './range1Enum';

export interface TimeToProcessModel {
  /** The range of the time to process */
  range?: Range1Enum;
  /** The period of the time to process */
  period?: number;
  [key: string]: unknown;
}

export const timeToProcessModelSchema: Schema<TimeToProcessModel> = expandoObject(
  {
    range: ['range', optional(range1EnumSchema)],
    period: ['period', optional(number())],
  }
);
