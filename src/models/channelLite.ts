/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

export interface ChannelLite {
  mcEnabled: boolean;
  id?: number;
  name?: string;
  url?: string;
  type?: string;
}

export const channelLiteSchema: Schema<ChannelLite> = object({
  mcEnabled: ['mc_enabled', boolean()],
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  url: ['url', optional(string())],
  type: ['type', optional(string())],
});
