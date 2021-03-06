/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { OrderedProductsSpecModel } from '../models/orderedProductsSpecModel';
import { PostingDetailsErrorsModel } from '../models/postingDetailsErrorsModel';
import { RecruiterInfoErrorsModel } from '../models/recruiterInfoErrorsModel';

/**
 * Creates an instance of OrderCampaignErrorResponse
 */
interface OrderCampaignErrorResponse {
  companyId: string[];
  postingDetails: PostingDetailsErrorsModel;
  targetGroup: string[];
  recruiterInfo: RecruiterInfoErrorsModel;
  orderedProducts: string[];
  orderedProductsSpecs: OrderedProductsSpecModel[];
  [key: string]: unknown;
}

export class OrderCampaignErrorResponseError extends ApiError<OrderCampaignErrorResponse> {}
