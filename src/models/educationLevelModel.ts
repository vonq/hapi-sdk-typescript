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
import { NameModel, nameModelSchema } from './nameModel';

export interface EducationLevelModel {
  /** Internal Identification for an Education Level */
  id?: number;
  name?: NameModel[];
  [key: string]: unknown;
}

export const educationLevelModelSchema: Schema<EducationLevelModel> = expandoObject(
  {
    id: ['id', optional(number())],
    name: ['name', optional(array(lazy(() => nameModelSchema)))],
  }
);
