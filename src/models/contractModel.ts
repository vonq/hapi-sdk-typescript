/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  ContractProductModel,
  contractProductModelSchema,
} from './contractProductModel';
import {
  ContractPurchasePriceModel,
  contractPurchasePriceModelSchema,
} from './contractPurchasePriceModel';

export interface ContractModel {
  contractId?: string;
  customerId?: string;
  channelId?: number;
  credentials?: string;
  className?: string;
  /** An object with product parameters */
  facets?: unknown;
  product?: ContractProductModel;
  postingRequirements?: string;
  expiryDate?: string;
  credits?: number;
  purchasePrice?: ContractPurchasePriceModel;
  [key: string]: unknown;
}

export const contractModelSchema: Schema<ContractModel> = expandoObject({
  contractId: ['contract_id', optional(string())],
  customerId: ['customer_id', optional(string())],
  channelId: ['channel_id', optional(number())],
  credentials: ['credentials', optional(string())],
  className: ['class_name', optional(string())],
  facets: ['facets', optional(unknown())],
  product: ['product', optional(lazy(() => contractProductModelSchema))],
  postingRequirements: ['posting_requirements', optional(string())],
  expiryDate: ['expiry_date', optional(string())],
  credits: ['credits', optional(number())],
  purchasePrice: [
    'purchase_price',
    optional(lazy(() => contractPurchasePriceModelSchema)),
  ],
});
