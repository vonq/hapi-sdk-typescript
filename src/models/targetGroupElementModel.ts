/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface TargetGroupElementModel {
  /** The vonq name for this target group element */
  description: string;
  /** The Vonq ID representing this concept, as indicated in the [**`Taxonomy Endpoints`**](#reference/experimental-products-search) */
  vonqId: string;
  [key: string]: unknown;
}

export const targetGroupElementModelSchema: Schema<TargetGroupElementModel> = expandoObject(
  { description: ['description', string()], vonqId: ['vonqId', string()] }
);
