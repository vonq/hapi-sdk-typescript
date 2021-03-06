/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface PostingWorkingLocationModel {
  addressLine1: string;
  addressLine2?: string;
  postcode: string;
  city: string;
  country: string;
  /** Optional parameter allowing remote work, possible values are 0 and 1, defaults to 0 */
  allowsRemoteWork?: number;
  [key: string]: unknown;
}

export const postingWorkingLocationModelSchema: Schema<PostingWorkingLocationModel> = expandoObject(
  {
    addressLine1: ['addressLine1', string()],
    addressLine2: ['addressLine2', optional(string())],
    postcode: ['postcode', string()],
    city: ['city', string()],
    country: ['country', string()],
    allowsRemoteWork: ['allowsRemoteWork', optional(number())],
  }
);
