/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface TakeCampaignOfflineResponseModel {
  campaignId?: string;
  [key: string]: unknown;
}

export const takeCampaignOfflineResponseModelSchema: Schema<TakeCampaignOfflineResponseModel> = expandoObject(
  { campaignId: ['campaignId', optional(string())] }
);
