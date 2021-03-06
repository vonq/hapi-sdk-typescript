/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  EmploymentTypeEnum,
  employmentTypeEnumSchema,
} from './employmentTypeEnum';
import {
  PostingContactInfoModel,
  postingContactInfoModelSchema,
} from './postingContactInfoModel';
import {
  PostingOrganizationModel,
  postingOrganizationModelSchema,
} from './postingOrganizationModel';
import {
  PostingSalaryIndicationModel,
  postingSalaryIndicationModelSchema,
} from './postingSalaryIndicationModel';
import {
  PostingWeeklyWorkingHoursModel,
  postingWeeklyWorkingHoursModelSchema,
} from './postingWeeklyWorkingHoursModel';
import {
  PostingWorkingLocationModel,
  postingWorkingLocationModelSchema,
} from './postingWorkingLocationModel';

export interface PostingDetailsModel {
  /** The title of the posting across the different Channels where the posting is going to be published. */
  title: string;
  /**
   * Full description of the job posting, including all possible sections
   * **Allowed tags:** `a[href|target], em, b, br, strong, i, li, ol, p, ul`
   */
  description: string;
  organization: PostingOrganizationModel;
  workingLocation: PostingWorkingLocationModel;
  /** Contact is whom to contact about the job. This may be part of the posting info for candidates to know whom they can reach out to learn more about the vacancy. */
  contactInfo?: PostingContactInfoModel;
  /** Numbers of years of experience required for this position */
  yearsOfExperience: number;
  /** The type of employment of the posting, whether it's a permanent position or a fixed time position */
  employmentType: EmploymentTypeEnum;
  weeklyWorkingHours: PostingWeeklyWorkingHoursModel;
  salaryIndication: PostingSalaryIndicationModel;
  /** Link to the page with the description of the job */
  jobPageUrl: string;
  /** Link to the page where the candidate needs to be directed when applying for a position */
  applicationUrl: string;
  [key: string]: unknown;
}

export const postingDetailsModelSchema: Schema<PostingDetailsModel> = expandoObject(
  {
    title: ['title', string()],
    description: ['description', string()],
    organization: ['organization', lazy(() => postingOrganizationModelSchema)],
    workingLocation: [
      'workingLocation',
      lazy(() => postingWorkingLocationModelSchema),
    ],
    contactInfo: [
      'contactInfo',
      optional(lazy(() => postingContactInfoModelSchema)),
    ],
    yearsOfExperience: ['yearsOfExperience', number()],
    employmentType: ['employmentType', employmentTypeEnumSchema],
    weeklyWorkingHours: [
      'weeklyWorkingHours',
      lazy(() => postingWeeklyWorkingHoursModelSchema),
    ],
    salaryIndication: [
      'salaryIndication',
      lazy(() => postingSalaryIndicationModelSchema),
    ],
    jobPageUrl: ['jobPageUrl', string()],
    applicationUrl: ['applicationUrl', string()],
  }
);
