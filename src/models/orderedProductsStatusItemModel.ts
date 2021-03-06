/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  ChannelStatusEnum,
  channelStatusEnumSchema,
} from './channelStatusEnum';

export interface OrderedProductsStatusItemModel {
  productId?: string;
  /** Status of the product. One of the following */
  status?: ChannelStatusEnum;
  /** Additional information about product status */
  statusDescription?: string;
  [key: string]: unknown;
}

export const orderedProductsStatusItemModelSchema: Schema<OrderedProductsStatusItemModel> = expandoObject(
  {
    productId: ['productId', optional(string())],
    status: ['status', optional(channelStatusEnumSchema)],
    statusDescription: ['statusDescription', optional(string())],
  }
);
