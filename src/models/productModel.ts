/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  Schema,
  string,
  unknown,
} from '../schema';
import {
  AudienceGroupEnum,
  audienceGroupEnumSchema,
} from './audienceGroupEnum';
import { ChannelModel, channelModelSchema } from './channelModel';
import { ChannelTypeEnum, channelTypeEnumSchema } from './channelTypeEnum';
import { IndustryModel, industryModelSchema } from './industryModel';
import { JobFunctionModel, jobFunctionModelSchema } from './jobFunctionModel';
import { LocationModel, locationModelSchema } from './locationModel';
import { PriceModel, priceModelSchema } from './priceModel';
import {
  TimeToProcessModel,
  timeToProcessModelSchema,
} from './timeToProcessModel';
import { TimeToSetupModel, timeToSetupModelSchema } from './timeToSetupModel';

export interface ProductModel {
  title: string;
  locations: LocationModel[];
  jobFunctions: JobFunctionModel[];
  industries: IndustryModel[];
  description: string | null;
  homepage: string | null;
  logoUrl: string | null;
  logoSquareUrl: string | null;
  logoRectangleUrl: string | null;
  duration?: unknown | null;
  timeToProcess: TimeToProcessModel;
  timeToSetup: TimeToSetupModel;
  productId: string;
  /** the price to be displayed to customers */
  vonqPrice: PriceModel[];
  ratecardPrice: PriceModel[];
  /** The type of a channel */
  type: ChannelTypeEnum;
  crossPostings: string[];
  channel: ChannelModel;
  /** The product's audience group (niche/generic) */
  audienceGroup: AudienceGroupEnum;
  /** is My Contract enabled for the channel */
  mcEnabled: boolean;
  /** is the product available only for My Contract order */
  mcOnly: boolean;
  /** is the product available for order. a campaign cannot be ordered with a product having `allow_orders` set to `false`. */
  allowOrders: boolean;
  [key: string]: unknown;
}

export const productModelSchema: Schema<ProductModel> = expandoObject({
  title: ['title', string()],
  locations: ['locations', array(lazy(() => locationModelSchema))],
  jobFunctions: ['job_functions', array(lazy(() => jobFunctionModelSchema))],
  industries: ['industries', array(lazy(() => industryModelSchema))],
  description: ['description', nullable(string())],
  homepage: ['homepage', nullable(string())],
  logoUrl: ['logo_url', nullable(string())],
  logoSquareUrl: ['logo_square_url', nullable(string())],
  logoRectangleUrl: ['logo_rectangle_url', nullable(string())],
  duration: ['duration', nullable(unknown())],
  timeToProcess: ['time_to_process', lazy(() => timeToProcessModelSchema)],
  timeToSetup: ['time_to_setup', lazy(() => timeToSetupModelSchema)],
  productId: ['product_id', string()],
  vonqPrice: ['vonq_price', array(lazy(() => priceModelSchema))],
  ratecardPrice: ['ratecard_price', array(lazy(() => priceModelSchema))],
  type: ['type', channelTypeEnumSchema],
  crossPostings: ['cross_postings', array(string())],
  channel: ['channel', lazy(() => channelModelSchema)],
  audienceGroup: ['audience_group', audienceGroupEnumSchema],
  mcEnabled: ['mc_enabled', boolean()],
  mcOnly: ['mc_only', boolean()],
  allowOrders: ['allow_orders', boolean()],
});
