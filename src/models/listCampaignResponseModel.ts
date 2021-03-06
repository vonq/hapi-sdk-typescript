/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { CampaignModel, campaignModelSchema } from './campaignModel';

export interface ListCampaignResponseModel {
  data?: CampaignModel;
  [key: string]: unknown;
}

export const listCampaignResponseModelSchema: Schema<ListCampaignResponseModel> = expandoObject(
  { data: ['data', optional(lazy(() => campaignModelSchema))] }
);
