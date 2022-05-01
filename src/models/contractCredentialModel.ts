/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface ContractCredentialModel {
  name: string;
  label: string;
  sort: string;
  description: string;
  [key: string]: unknown;
}

export const contractCredentialModelSchema: Schema<ContractCredentialModel> = expandoObject(
  {
    name: ['name', string()],
    label: ['label', string()],
    sort: ['sort', string()],
    description: ['description', string()],
  }
);
