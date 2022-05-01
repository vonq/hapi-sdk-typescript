/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface OrderCampaignSuccessResponseModel {
  campaignId: string;
  [key: string]: unknown;
}

export const orderCampaignSuccessResponseModelSchema: Schema<OrderCampaignSuccessResponseModel> = expandoObject(
  { campaignId: ['campaignId', string()] }
);
