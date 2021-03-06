/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema } from '../schema';
import { Range2Enum, range2EnumSchema } from './range2Enum';

export interface TimeToSetupModel {
  /** The range of the time to setup required by the supplier */
  range?: Range2Enum;
  /** The period of the time to setup required by the supplier */
  period?: number;
  [key: string]: unknown;
}

export const timeToSetupModelSchema: Schema<TimeToSetupModel> = expandoObject({
  range: ['range', optional(range2EnumSchema)],
  period: ['period', optional(number())],
});
