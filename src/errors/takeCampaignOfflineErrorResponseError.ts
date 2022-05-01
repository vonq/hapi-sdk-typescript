/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of TakeCampaignOfflineErrorResponse
 */
interface TakeCampaignOfflineErrorResponse {
  campaignId: string;
  [key: string]: unknown;
}

export class TakeCampaignOfflineErrorResponseError extends ApiError<TakeCampaignOfflineErrorResponse> {}
