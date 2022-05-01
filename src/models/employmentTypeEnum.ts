/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EmploymentTypeEnum
 */
export enum EmploymentTypeEnum {
  Permanent = 'permanent',
  Temporary = 'temporary',
  FixedTerm = 'fixed_term',
  FixedTermWithOptionForPermanent = 'fixed_term_with_option_for_permanent',
  Freelance = 'freelance',
  Traineeship = 'traineeship',
  Internship = 'internship',
}

/**
 * Schema for EmploymentTypeEnum
 */
export const employmentTypeEnumSchema: Schema<EmploymentTypeEnum> = stringEnum(EmploymentTypeEnum);
