/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import {
  CampaignStatusModel,
  campaignStatusModelSchema,
} from './campaignStatusModel';

export interface CheckCampaignStatusresponseModel {
  data?: CampaignStatusModel;
  [key: string]: unknown;
}

export const checkCampaignStatusresponseModelSchema: Schema<CheckCampaignStatusresponseModel> = expandoObject(
  { data: ['data', optional(lazy(() => campaignStatusModelSchema))] }
);
