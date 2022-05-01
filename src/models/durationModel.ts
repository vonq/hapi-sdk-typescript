/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';
import { RangeEnum, rangeEnumSchema } from './rangeEnum';

export interface DurationModel {
  /** The range of the duration */
  range?: RangeEnum;
  /** The duration a vacancy is actively listed on a channel */
  period?: number;
  [key: string]: unknown;
}

export const durationModelSchema: Schema<DurationModel> = expandoObject({
  range: ['range', optional(rangeEnumSchema)],
  period: ['period', optional(number())],
});
