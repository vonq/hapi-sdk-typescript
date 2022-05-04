/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

/** Contact is whom to contact about the job. This may be part of the posting info for candidates to know whom they can reach out to learn more about the vacancy. */
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
