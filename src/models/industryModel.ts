/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

/** Industry(id, name) */
export interface IndustryModel {
  id?: number;
  name: string;
  [key: string]: unknown;
}

export const industryModelSchema: Schema<IndustryModel> = expandoObject({
  id: ['id', optional(number())],
  name: ['name', string()],
});
