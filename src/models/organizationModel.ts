/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema';

export interface OrganizationModel {
  name: string[];
  companyLogo: string[];
  [key: string]: unknown;
}

export const organizationModelSchema: Schema<OrganizationModel> = expandoObject(
  {
    name: ['name', array(string())],
    companyLogo: ['companyLogo', array(string())],
  }
);
