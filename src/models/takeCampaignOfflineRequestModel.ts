/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface TakeCampaignOfflineRequestModel {
  campaignId: string;
  status: string;
  [key: string]: unknown;
}

export const takeCampaignOfflineRequestModelSchema: Schema<TakeCampaignOfflineRequestModel> = expandoObject(
  { campaignId: ['campaignId', string()], status: ['status', string()] }
);
