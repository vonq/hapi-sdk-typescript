/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

/**
 * Recruiter is the person using the ATS to create the Campaign and it's generally part of the Company whose Id
 * we request first.
 */
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
