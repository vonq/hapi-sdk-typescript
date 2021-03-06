/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for RuleEnum
 */
export enum RuleEnum {
  Date = 'date',
  Email = 'email',
  Int = 'int',
  Float = 'float',
  Regex = 'regex',
  Lower = 'lower',
  Higher = 'higher',
  Min = 'min',
  Max = 'max',
  Minitems = 'minitems',
  Maxitems = 'maxitems',
  Minlength = 'minlength',
  Maxlength = 'maxlength',
  Before = 'before',
  After = 'after',
  Url = 'url',
  Bepc = 'be-pc',
  Belgiumcity = 'belgiumcity',
  Decity = 'de-city',
  Dutchcity = 'dutchcity',
  Isodateoptionaltie = 'isodateoptionaltie',
  Maxlengthcombined = 'maxlengthcombined',
  Maxlevels = 'maxlevels',
  Nlpc = 'nl-pc',
  Nlpcstraat = 'nl-pc-straat',
  Notequal = 'notequal',
  PropertyId = 'propertyId',
  Pushvalue = 'pushvalue',
  Separator = 'separator',
  Ukpc = 'uk-pc',
  EnumValidatorcheckKeywords = 'validator:checkKeywords',
  EnumValidatorinRange = 'validator:inRange',
  EnumValidatorkruispunt = 'validator:kruispunt',
  EnumValidatornotEmptyIf = 'validator:notEmptyIf',
}

/**
 * Schema for RuleEnum
 */
export const ruleEnumSchema: Schema<RuleEnum> = stringEnum(RuleEnum);
