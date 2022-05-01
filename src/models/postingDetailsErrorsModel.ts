/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema, string } from '../schema';
import {
  OrganizationModel,
  organizationModelSchema,
} from './organizationModel';
import {
  SalaryIndicationModel,
  salaryIndicationModelSchema,
} from './salaryIndicationModel';
import {
  WeeklyWorkingHoursModel,
  weeklyWorkingHoursModelSchema,
} from './weeklyWorkingHoursModel';
import {
  WorkingLocationModel,
  workingLocationModelSchema,
} from './workingLocationModel';

export interface PostingDetailsErrorsModel {
  title: string[];
  description: string[];
  yearsOfExperience: string[];
  employmentType: string[];
  organization: OrganizationModel;
  workingLocation: WorkingLocationModel;
  weeklyWorkingHours: WeeklyWorkingHoursModel;
  salaryIndication: SalaryIndicationModel;
  jobPageUrl: string[];
  applicationUrl: string[];
  [key: string]: unknown;
}

export const postingDetailsErrorsModelSchema: Schema<PostingDetailsErrorsModel> = expandoObject(
  {
    title: ['title', array(string())],
    description: ['description', array(string())],
    yearsOfExperience: ['yearsOfExperience', array(string())],
    employmentType: ['employmentType', array(string())],
    organization: ['organization', lazy(() => organizationModelSchema)],
    workingLocation: [
      'workingLocation',
      lazy(() => workingLocationModelSchema),
    ],
    weeklyWorkingHours: [
      'weeklyWorkingHours',
      lazy(() => weeklyWorkingHoursModelSchema),
    ],
    salaryIndication: [
      'salaryIndication',
      lazy(() => salaryIndicationModelSchema),
    ],
    jobPageUrl: ['jobPageUrl', array(string())],
    applicationUrl: ['applicationUrl', array(string())],
  }
);
