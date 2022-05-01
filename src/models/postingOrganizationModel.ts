/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface PostingOrganizationModel {
  /** Name of the Company */
  name: string;
  /**
   * The company Logo that wants to be used on the posting. It has to be publicly available so it's picked up
   * and used for the different publishing platforms
   */
  companyLogo: string;
  [key: string]: unknown;
}

export const postingOrganizationModelSchema: Schema<PostingOrganizationModel> = expandoObject(
  { name: ['name', string()], companyLogo: ['companyLogo', string()] }
);
