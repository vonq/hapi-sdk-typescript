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
  OrderedProductsPostElementModel,
  orderedProductsPostElementModelSchema,
} from './orderedProductsPostElementModel';
import {
  PostingDetailsModel,
  postingDetailsModelSchema,
} from './postingDetailsModel';
import {
  RecruiterInfoModel,
  recruiterInfoModelSchema,
} from './recruiterInfoModel';
import { TargetGroupModel, targetGroupModelSchema } from './targetGroupModel';

export interface CampaignOrderModel {
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
  /**
   * An ISO 4217 code for a currency to use for order invoicing.
   * Currently only GBP and USD are supported. Default currency is EUR.
   */
  currency?: string;
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
  /** Specification object for some of the ordered products */
  orderedProductsSpecs?: OrderedProductsPostElementModel[];
  [key: string]: unknown;
}

export const campaignOrderModelSchema: Schema<CampaignOrderModel> = expandoObject(
  {
    companyId: ['companyId', string()],
    orderReference: ['orderReference', optional(string())],
    currency: ['currency', optional(string())],
    recruiterInfo: ['recruiterInfo', lazy(() => recruiterInfoModelSchema)],
    campaignName: ['campaignName', optional(string())],
    postingDetails: ['postingDetails', lazy(() => postingDetailsModelSchema)],
    targetGroup: ['targetGroup', lazy(() => targetGroupModelSchema)],
    orderedProducts: ['orderedProducts', array(string())],
    orderedProductsSpecs: [
      'orderedProductsSpecs',
      optional(array(lazy(() => orderedProductsPostElementModelSchema))),
    ],
  }
);
