/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

/** Recruiter is the user creating the campaign and you may want to use this to provide filtering by recruiter for groups sharing an account. */
export interface RecruiterInfoModel {
  /** A vendor-related unique identification for the Recruiter */
  id?: string;
  name: string;
  emailAddress?: string;
  [key: string]: unknown;
}

export const recruiterInfoModelSchema: Schema<RecruiterInfoModel> = expandoObject(
  {
    id: ['id', optional(string())],
    name: ['name', string()],
    emailAddress: ['emailAddress', optional(string())],
  }
);
