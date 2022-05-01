/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, Schema, string } from '../schema';

export interface JobFunctionTreeModel {
  id: number;
  name: string;
  children: JobFunctionTreeModel[];
  [key: string]: unknown;
}

export const jobFunctionTreeModelSchema: Schema<JobFunctionTreeModel> = expandoObject(
  {
    id: ['id', number()],
    name: ['name', string()],
    children: ['children', array(lazy(() => jobFunctionTreeModelSchema))],
  }
);
