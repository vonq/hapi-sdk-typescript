/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, number, Schema, string } from '../schema';

export interface ChannelLiteModel {
  mcEnabled: boolean;
  id: number;
  name: string;
  url: string;
  type: string;
  [key: string]: unknown;
}

export const channelLiteModelSchema: Schema<ChannelLiteModel> = expandoObject({
  mcEnabled: ['mc_enabled', boolean()],
  id: ['id', number()],
  name: ['name', string()],
  url: ['url', string()],
  type: ['type', string()],
});
