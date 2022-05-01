/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema, string } from '../schema';
import { DurationModel, durationModelSchema } from './durationModel';
import {
  PostingRequirementsModel,
  postingRequirementsModelSchema,
} from './postingRequirementsModel';

export interface OrderedProductsGetElementModel {
  /** Product Identification */
  productId?: string;
  /** Status per product */
  status?: string;
  /** Status description, additional status information */
  statusDescription?: string;
  /** Date when the channel went online */
  deliveredOn?: string;
  /** How long will the `Product` be online. [DEPRECATED] please instead use the `durationPeriod` */
  duration?: string;
  durationPeriod?: DurationModel;
  /** Tracking codes */
  utm?: string;
  /** Link to the job ad on the channel. Sometimes this link is not available from a job board, then the product homepage is returned. */
  jobBoardLink?: string;
  /** Contract Identifier for My Contracts product */
  contractId?: string;
  postingRequirements?: PostingRequirementsModel;
  [key: string]: unknown;
}

export const orderedProductsGetElementModelSchema: Schema<OrderedProductsGetElementModel> = expandoObject(
  {
    productId: ['productId', optional(string())],
    status: ['status', optional(string())],
    statusDescription: ['statusDescription', optional(string())],
    deliveredOn: ['deliveredOn', optional(string())],
    duration: ['duration', optional(string())],
    durationPeriod: [
      'durationPeriod',
      optional(lazy(() => durationModelSchema)),
    ],
    utm: ['utm', optional(string())],
    jobBoardLink: ['jobBoardLink', optional(string())],
    contractId: ['contractId', optional(string())],
    postingRequirements: [
      'postingRequirements',
      optional(lazy(() => postingRequirementsModelSchema)),
    ],
  }
);
