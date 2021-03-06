/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface CampaignPostingModel {
  /** The name of the Product that was bought */
  name?: string;
  /** Number of clicks of the mentioned posting */
  clicks?: number;
  [key: string]: unknown;
}

export const campaignPostingModelSchema: Schema<CampaignPostingModel> = expandoObject(
  { name: ['name', optional(string())], clicks: ['clicks', optional(number())] }
);
