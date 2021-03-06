/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of TakeCampaignOfflineErrorResponse2
 */
interface TakeCampaignOfflineErrorResponse2 {
  campaignId: string[];
  status: string[];
  [key: string]: unknown;
}

export class TakeCampaignOfflineErrorResponse2Error extends ApiError<TakeCampaignOfflineErrorResponse2> {}
