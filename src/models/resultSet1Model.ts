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
} from '../schema';
import { CampaignModel, campaignModelSchema } from './campaignModel';

export interface ResultSet1Model {
  /** Number of total results */
  total?: number;
  /** Results page size */
  limit?: number;
  /** Initial starting index for the results */
  offset?: number;
  /** A Page of Campaign Objects */
  data?: CampaignModel[];
  [key: string]: unknown;
}

export const resultSet1ModelSchema: Schema<ResultSet1Model> = expandoObject({
  total: ['total', optional(number())],
  limit: ['limit', optional(number())],
  offset: ['offset', optional(number())],
  data: ['data', optional(array(lazy(() => campaignModelSchema)))],
});
