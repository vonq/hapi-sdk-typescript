/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  TargetGroupElementModel,
  targetGroupElementModelSchema,
} from './targetGroupElementModel';

export interface TargetGroupModel {
  /** Education Level required by the Candidate. You can specify only one value. */
  educationLevel: TargetGroupElementModel[];
  /** Seniority Level expected by the Candidate. You can specify only one value. */
  seniority: TargetGroupElementModel[];
  /** The Industry related to the Position open. You can specify only one value. */
  industry: TargetGroupElementModel[];
  /** Job Category indicates the type of Position that's open. You can specify only one value. */
  jobCategory: TargetGroupElementModel[];
  [key: string]: unknown;
}

export const targetGroupModelSchema: Schema<TargetGroupModel> = expandoObject({
  educationLevel: [
    'educationLevel',
    array(lazy(() => targetGroupElementModelSchema)),
  ],
  seniority: ['seniority', array(lazy(() => targetGroupElementModelSchema))],
  industry: ['industry', array(lazy(() => targetGroupElementModelSchema))],
  jobCategory: [
    'jobCategory',
    array(lazy(() => targetGroupElementModelSchema)),
  ],
});
