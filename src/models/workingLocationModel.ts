/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema';

export interface WorkingLocationModel {
  addressLine1: string[];
  postcode: string[];
  city: string[];
  country: string[];
  [key: string]: unknown;
}

export const workingLocationModelSchema: Schema<WorkingLocationModel> = expandoObject(
  {
    addressLine1: ['addressLine1', array(string())],
    postcode: ['postcode', array(string())],
    city: ['city', array(string())],
    country: ['country', array(string())],
  }
);
