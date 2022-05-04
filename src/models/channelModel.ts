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
import { ChannelTypeEnum, channelTypeEnumSchema } from './channelTypeEnum';
import {
  ContractCredentialModel,
  contractCredentialModelSchema,
} from './contractCredentialModel';
import { FacetModel, facetModelSchema } from './facetModel';

export interface ChannelModel {
  /** The name of a channel */
  name: string;
  /** The url of a channel */
  url: string;
  /** The type of a channel */
  type: ChannelTypeEnum;
  /** Does a channel support My Contracts */
  mcEnabled: boolean;
  contractCredentials: ContractCredentialModel[];
  contractFacets: unknown[];
  /** Dynamic posting requirements for MC products, used to provide additional data with vacancies */
  postingRequirements: FacetModel[];
  /** Some Channels require manual setup done by the end-user. In most such cases, `setup_instructions` should contain HTML */
  manualSetupRequired: boolean;
  /** Additional setup instructions required to post on the Channel */
  setupInstructions: string | null;
  /** Some channels like apec.fr require the user to send the job board an XML url. If not null, this value should be displayed to the user, along with the `setup_instructions` */
  feedUrl: string | null;
  [key: string]: unknown;
}

export const channelModelSchema: Schema<ChannelModel> = expandoObject({
  name: ['name', string()],
  url: ['url', string()],
  type: ['type', channelTypeEnumSchema],
  mcEnabled: ['mc_enabled', boolean()],
  contractCredentials: [
    'contract_credentials',
    array(lazy(() => contractCredentialModelSchema)),
  ],
  contractFacets: ['contract_facets', array(unknown())],
  postingRequirements: [
    'posting_requirements',
    array(lazy(() => facetModelSchema)),
  ],
  manualSetupRequired: ['manual_setup_required', boolean()],
  setupInstructions: ['setup_instructions', nullable(string())],
  feedUrl: ['feed_url', nullable(string())],
});
