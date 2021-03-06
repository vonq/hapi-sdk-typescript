/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
} from '../schema';
import { Name3Model, name3ModelSchema } from './name3Model';

export interface SeniorityModel {
  /** Internal Identification for a Seniority Level */
  id?: number;
  name?: Name3Model[];
  [key: string]: unknown;
}

export const seniorityModelSchema: Schema<SeniorityModel> = expandoObject({
  id: ['id', optional(number())],
  name: ['name', optional(array(lazy(() => name3ModelSchema)))],
});
