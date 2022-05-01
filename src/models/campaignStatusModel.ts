/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  optional,
  Schema,
  string,
} from '../schema';
import {
  OrderedProductsStatusItemModel,
  orderedProductsStatusItemModelSchema,
} from './orderedProductsStatusItemModel';
import { StatusEnum, statusEnumSchema } from './statusEnum';

export interface CampaignStatusModel {
  campaignId: string;
  /** Status of the campaign. One of the following */
  status?: StatusEnum;
  orderedProductsStatuses?: OrderedProductsStatusItemModel[];
  [key: string]: unknown;
}

export const campaignStatusModelSchema: Schema<CampaignStatusModel> = expandoObject(
  {
    campaignId: ['campaignId', string()],
    status: ['status', optional(statusEnumSchema)],
    orderedProductsStatuses: [
      'orderedProductsStatuses',
      optional(array(lazy(() => orderedProductsStatusItemModelSchema))),
    ],
  }
);
