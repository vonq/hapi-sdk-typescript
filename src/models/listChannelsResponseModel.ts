/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, Schema, string } from '../schema';
import { ChannelLiteModel, channelLiteModelSchema } from './channelLiteModel';

export interface ListChannelsResponseModel {
  count: number;
  next: string;
  previous: string;
  results: ChannelLiteModel[];
  [key: string]: unknown;
}

export const listChannelsResponseModelSchema: Schema<ListChannelsResponseModel> = expandoObject(
  {
    count: ['count', number()],
    next: ['next', string()],
    previous: ['previous', string()],
    results: ['results', array(lazy(() => channelLiteModelSchema))],
  }
);
