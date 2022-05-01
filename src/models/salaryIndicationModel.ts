/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema, string } from '../schema';
import { Range4Model, range4ModelSchema } from './range4Model';

export interface SalaryIndicationModel {
  period: string[];
  range: Range4Model;
  [key: string]: unknown;
}

export const salaryIndicationModelSchema: Schema<SalaryIndicationModel> = expandoObject(
  {
    period: ['period', array(string())],
    range: ['range', lazy(() => range4ModelSchema)],
  }
);
