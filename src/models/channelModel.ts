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
  optional,
  Schema,
  string,
} from '../schema';
import { ChannelTypeEnum, channelTypeEnumSchema } from './channelTypeEnum';
import {
  ContractCredentialModel,
  contractCredentialModelSchema,
} from './contractCredentialModel';
import { FacetModel, facetModelSchema } from './facetModel';

export interface ChannelModel {
  /** The name of a channel */
  name?: string;
  /** The url of a channel */
  url?: string;
  /** The type of a channel */
  type?: ChannelTypeEnum;
  /** Does a channel support My Contracts */
  mcEnabled?: boolean;
  contractCredentials?: ContractCredentialModel[];
  contractFacets?: FacetModel[];
  /** Dynamic posting requirements for MC products, used to provide additional data with vacancies */
  postingRequirements?: FacetModel[];
  [key: string]: unknown;
}

export const channelModelSchema: Schema<ChannelModel> = expandoObject({
  name: ['name', optional(string())],
  url: ['url', optional(string())],
  type: ['type', optional(channelTypeEnumSchema)],
  mcEnabled: ['mc_enabled', optional(boolean())],
  contractCredentials: [
    'contract_credentials',
    optional(array(lazy(() => contractCredentialModelSchema))),
  ],
  contractFacets: [
    'contract_facets',
    optional(array(lazy(() => facetModelSchema))),
  ],
  postingRequirements: [
    'posting_requirements',
    optional(array(lazy(() => facetModelSchema))),
  ],
});
