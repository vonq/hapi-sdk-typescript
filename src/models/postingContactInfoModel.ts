/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface PostingContactInfoModel {
  name: string;
  phoneNumber?: string;
  emailAddress?: string;
  [key: string]: unknown;
}

export const postingContactInfoModelSchema: Schema<PostingContactInfoModel> = expandoObject(
  {
    name: ['name', string()],
    phoneNumber: ['phoneNumber', optional(string())],
    emailAddress: ['emailAddress', optional(string())],
  }
);
