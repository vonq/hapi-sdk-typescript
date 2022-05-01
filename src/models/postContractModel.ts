/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  ContractPurchasePriceModel,
  contractPurchasePriceModelSchema,
} from './contractPurchasePriceModel';

export interface PostContractModel {
  channelId?: number;
  /** An object with credentials data */
  credentials?: unknown;
  /** An object with product parameters */
  facets?: unknown;
  /** When creating contracts for Channels that require the end-user to follow instructions (based on the `manual_setup_required` key in the response body for the [Retrieve details for channel with support for contracts](https://vonq.stoplight.io/docs/hapi/b3A6NTUxMjYwODI-retrieve-details-for-channel-with-support-for-contracts) endpoint), set this value to `true` to confirm the user has done so. For quality purposes, setting this field to `true` for Channels that don't require following instructions will result in a 400 Bad Request. */
  followedInstructions?: boolean;
  expiryDate?: string;
  credits?: number;
  purchasePrice?: ContractPurchasePriceModel;
  [key: string]: unknown;
}

export const postContractModelSchema: Schema<PostContractModel> = expandoObject(
  {
    channelId: ['channel_id', optional(number())],
    credentials: ['credentials', optional(unknown())],
    facets: ['facets', optional(unknown())],
    followedInstructions: ['followed_instructions', optional(boolean())],
    expiryDate: ['expiry_date', optional(string())],
    credits: ['credits', optional(number())],
    purchasePrice: [
      'purchase_price',
      optional(lazy(() => contractPurchasePriceModelSchema)),
    ],
  }
);
