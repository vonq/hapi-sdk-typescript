/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import { RuleEnum, ruleEnumSchema } from './ruleEnum';

export interface FacetRuleModel {
  rule: RuleEnum;
  data: string;
  [key: string]: unknown;
}

export const facetRuleModelSchema: Schema<FacetRuleModel> = expandoObject({
  rule: ['rule', ruleEnumSchema],
  data: ['data', string()],
});
