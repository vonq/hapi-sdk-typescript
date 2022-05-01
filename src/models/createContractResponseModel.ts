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
import { ProductLiteModel, productLiteModelSchema } from './productLiteModel';
import {
  PurchasePriceModel,
  purchasePriceModelSchema,
} from './purchasePriceModel';

export interface CreateContractResponseModel {
  customerId: string;
  contractId: string;
  channelId: number;
  credentials: string;
  className: string;
  facets?: unknown;
  product: ProductLiteModel;
  postingRequirements: string;
  expiryDate?: string;
  credits?: number;
  purchasePrice?: PurchasePriceModel;
  [key: string]: unknown;
}

export const createContractResponseModelSchema: Schema<CreateContractResponseModel> = expandoObject(
  {
    customerId: ['customer_id', string()],
    contractId: ['contract_id', string()],
    channelId: ['channel_id', number()],
    credentials: ['credentials', string()],
    className: ['class_name', string()],
    facets: ['facets', unknown()],
    product: ['product', lazy(() => productLiteModelSchema)],
    postingRequirements: ['posting_requirements', string()],
    expiryDate: ['expiry_date', optional(string())],
    credits: ['credits', optional(number())],
    purchasePrice: [
      'purchase_price',
      optional(lazy(() => purchasePriceModelSchema)),
    ],
  }
);
