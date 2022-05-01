/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface TakeaCampaignofflineresponse {
  campaignId?: string;
}

export const takeaCampaignofflineresponseSchema: Schema<TakeaCampaignofflineresponse> = object(
  { campaignId: ['campaignId', optional(string())] }
);
