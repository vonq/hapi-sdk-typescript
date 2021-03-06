/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { ContractModel, contractModelSchema } from './contractModel';

export interface MultipleContractsResponseModel {
  /** count of elements in results */
  count?: number;
  /** link to get previous results */
  previous?: string;
  /** link to get next results */
  next?: string;
  results?: ContractModel[];
  [key: string]: unknown;
}

export const multipleContractsResponseModelSchema: Schema<MultipleContractsResponseModel> = expandoObject(
  {
    count: ['count', optional(number())],
    previous: ['previous', optional(string())],
    next: ['next', optional(string())],
    results: ['results', optional(array(lazy(() => contractModelSchema)))],
  }
);
