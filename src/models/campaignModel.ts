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
  CampaignPostingModel,
  campaignPostingModelSchema,
} from './campaignPostingModel';
import {
  OrderedProductsGetElementModel,
  orderedProductsGetElementModelSchema,
} from './orderedProductsGetElementModel';
import {
  PostingDetailsModel,
  postingDetailsModelSchema,
} from './postingDetailsModel';
import {
  RecruiterInfoModel,
  recruiterInfoModelSchema,
} from './recruiterInfoModel';
import { TargetGroupModel, targetGroupModelSchema } from './targetGroupModel';

export interface CampaignModel {
  /**
   * A vendor-related unique identification for the Company that's making the order. Doesn't affect the
   * order process at all, but provides a method for later filtering by this identification. It's also
   * used when creating a unified report of Campaign orders made in a period of time.
   */
  companyId: string;
  /**
   * A vendor-related Reference number for the order. This could be a PO number or an Invoice number.
   * Doesn't affect the order process at all, but provides a way for the ATS to identify the specific
   * order for their internal billing process
   * Maximum length of this field is 80 symbols
   */
  orderReference?: string;
  /** Recruiter is the user creating the campaign and you may want to use this to provide filtering by recruiter for groups sharing an account. */
  recruiterInfo: RecruiterInfoModel;
  /**
   * Campaign name as it's going to be listed. Doesn't have to resemble the Posting Title.
   * For example, the Campaign name could be **Software Development Manager** while the Posting
   * title could be **Want to lead a Team of Software Developers? Join us**
   */
  campaignName?: string;
  postingDetails: PostingDetailsModel;
  targetGroup: TargetGroupModel;
  /** A list of the Products selected by the user. */
  orderedProducts: string[];
  /** This part contains information of the ordered products. */
  orderedProductsSpecs?: OrderedProductsGetElementModel[];
  postings?: CampaignPostingModel[];
  [key: string]: unknown;
}

export const campaignModelSchema: Schema<CampaignModel> = expandoObject({
  companyId: ['companyId', string()],
  orderReference: ['orderReference', optional(string())],
  recruiterInfo: ['recruiterInfo', lazy(() => recruiterInfoModelSchema)],
  campaignName: ['campaignName', optional(string())],
  postingDetails: ['postingDetails', lazy(() => postingDetailsModelSchema)],
  targetGroup: ['targetGroup', lazy(() => targetGroupModelSchema)],
  orderedProducts: ['orderedProducts', array(string())],
  orderedProductsSpecs: [
    'orderedProductsSpecs',
    optional(array(lazy(() => orderedProductsGetElementModelSchema))),
  ],
  postings: [
    'postings',
    optional(array(lazy(() => campaignPostingModelSchema))),
  ],
});
