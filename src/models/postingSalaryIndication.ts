/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { PeriodEnum, periodEnumSchema } from './periodEnum';
import { Range3, range3Schema } from './range3';

export interface PostingSalaryIndication {
  period: PeriodEnum;
  range: Range3;
}

export const postingSalaryIndicationSchema: Schema<PostingSalaryIndication> = object(
  {
    period: ['period', periodEnumSchema],
    range: ['range', lazy(() => range3Schema)],
  }
);
