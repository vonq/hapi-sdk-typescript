/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';
import { Range2Enum, range2EnumSchema } from './range2Enum';

export interface TimeToSetup {
  /** The range of the time to setup required by the supplier */
  range?: Range2Enum;
  /** The period of the time to setup required by the supplier */
  period?: number;
}

export const timeToSetupSchema: Schema<TimeToSetup> = object({
  range: ['range', optional(range2EnumSchema)],
  period: ['period', optional(number())],
});
