/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  nullable,
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
import { FacetModel, facetModelSchema } from './facetModel';

export interface ContractModel {
  /** The identifier of the Contract. To be used when creating a Campaign */
  contractId: string;
  /** The customer_id this contract belongs to. Based on the original `X-Customer-Id` header used when the contract was created. */
  customerId: string;
  /** The Channel (job board) the contract is to be used for */
  channelId: number;
  /** AES Encrypted credentials */
  credentials?: unknown;
  /** Channel slug */
  className: string;
  /** An object with contract parameters */
  facets?: unknown;
  /** The Product to be used in combination with the Contract when ordering a Campaign. */
  product: ContractProductModel;
  /** A list of the Contract Channel's Facets */
  postingRequirements: FacetModel[];
  expiryDate: string | null;
  credits: number | null;
  purchasePrice?: ContractPurchasePriceModel;
  [key: string]: unknown;
}

export const contractModelSchema: Schema<ContractModel> = expandoObject({
  contractId: ['contract_id', string()],
  customerId: ['customer_id', string()],
  channelId: ['channel_id', number()],
  credentials: ['credentials', unknown()],
  className: ['class_name', string()],
  facets: ['facets', unknown()],
  product: ['product', lazy(() => contractProductModelSchema)],
  postingRequirements: [
    'posting_requirements',
    array(lazy(() => facetModelSchema)),
  ],
  expiryDate: ['expiry_date', nullable(string())],
  credits: ['credits', nullable(number())],
  purchasePrice: [
    'purchase_price',
    optional(lazy(() => contractPurchasePriceModelSchema)),
  ],
});
