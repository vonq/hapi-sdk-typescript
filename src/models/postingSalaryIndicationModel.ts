/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { PeriodEnum, periodEnumSchema } from './periodEnum';
import { Range3Model, range3ModelSchema } from './range3Model';

export interface PostingSalaryIndicationModel {
  period: PeriodEnum;
  range: Range3Model;
  [key: string]: unknown;
}

export const postingSalaryIndicationModelSchema: Schema<PostingSalaryIndicationModel> = expandoObject(
  {
    period: ['period', periodEnumSchema],
    range: ['range', lazy(() => range3ModelSchema)],
  }
);
