/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { ContractProduct, contractProductSchema } from './contractProduct';
import {
  ContractPurchasePrice,
  contractPurchasePriceSchema,
} from './contractPurchasePrice';

export interface Contract {
  contractId?: string;
  customerId?: string;
  channelId?: number;
  credentials?: string;
  className?: string;
  /** An object with product parameters */
  facets?: unknown;
  product?: ContractProduct;
  postingRequirements?: string;
  expiryDate?: string;
  credits?: number;
  purchasePrice?: ContractPurchasePrice;
}

export const contractSchema: Schema<Contract> = object({
  contractId: ['contract_id', optional(string())],
  customerId: ['customer_id', optional(string())],
  channelId: ['channel_id', optional(number())],
  credentials: ['credentials', optional(string())],
  className: ['class_name', optional(string())],
  facets: ['facets', optional(unknown())],
  product: ['product', optional(lazy(() => contractProductSchema))],
  postingRequirements: ['posting_requirements', optional(string())],
  expiryDate: ['expiry_date', optional(string())],
  credits: ['credits', optional(number())],
  purchasePrice: [
    'purchase_price',
    optional(lazy(() => contractPurchasePriceSchema)),
  ],
});
