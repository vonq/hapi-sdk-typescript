/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  AcceptLanguageEnum,
  acceptLanguageEnumSchema,
} from '../models/acceptLanguageEnum';
import {
  EducationLevelModel,
  educationLevelModelSchema,
} from '../models/educationLevelModel';
import { IndustryModel, industryModelSchema } from '../models/industryModel';
import {
  JobFunctionModel,
  jobFunctionModelSchema,
} from '../models/jobFunctionModel';
import { JobTitleModel, jobTitleModelSchema } from '../models/jobTitleModel';
import { LocationModel, locationModelSchema } from '../models/locationModel';
import { SeniorityModel, seniorityModelSchema } from '../models/seniorityModel';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class TaxonomyController extends BaseController {
  /**
   * This endpoint returns a tree-like structure of supported Job Functions that can be used to search
   * for Products.
   * Use the `id` key of any Job Function in the response to search for a Product.
   * Each Job Function is associated with [**`Job Titles`**](b3A6MzM0NDA3MzY-job-titles) in a one-to-many
   * fashion.
   * Besides the default English, German and Dutch result translations can be requested by specifying an
   * `Accept-Language: [de|nl]` header.
   *
   * @param acceptLanguage
   * @return Response from the API call
   */
  async retrieveJobFunctionsTree(
    acceptLanguage?: AcceptLanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JobFunctionModel[]>> {
    const req = this.createRequest('GET', '/products/job-functions/');
    const mapped = req.prepareArgs({
      acceptLanguage: [acceptLanguage, optional(acceptLanguageEnumSchema)],
    });
    req.header('Accept-Language', mapped.acceptLanguage);
    return req.callAsJson(array(jobFunctionModelSchema), requestOptions);
  }

  /**
   * This endpoint takes any text as input and returns a list of supported Job Titles matching the query,
   * ordered by popularity.
   * Use the `id` key of each object in the response to search for a Product.
   * Currently, we support 4,000 job titles for each of the following languages: English, Dutch and
   * German.
   * Each Job Title is associated with a [**`Job Function`**](b3A6MzM0NDA3MzU-job-functions) in a many-to-
   * one fashion.
   * Besides the default English, German and Dutch result translations can be requested by specifying an
   * `Accept-Language: [de|nl]` header.
   *
   * @param text            Search text for a job title name
   * @param limit           Number of results to return per page.
   * @param offset          The initial index from which to return the results.
   * @param acceptLanguage
   * @return Response from the API call
   */
  async searchJobTitles(
    text: string,
    limit?: number,
    offset?: number,
    acceptLanguage?: AcceptLanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JobTitleModel[]>> {
    const req = this.createRequest('GET', '/products/job-titles/');
    const mapped = req.prepareArgs({
      text: [text, string()],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      acceptLanguage: [acceptLanguage, optional(acceptLanguageEnumSchema)],
    });
    req.header('Accept-Language', mapped.acceptLanguage);
    req.query('text', mapped.text);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    return req.callAsJson(array(jobTitleModelSchema), requestOptions);
  }

  /**
   * This endpoint takes any text as input and returns a list of Locations matching the query, ordered by
   * popularity.
   * Each response will include the entire world as a Location, even no Locations match the text query.
   * Use the `id` key of each object in the response to search for a Product.
   * Supports text input in English, Dutch and German.
   *
   * @param text Search text for a location name in either English, Dutch, German, French and Italian.
   *                       Partial recognition of 20 other languages.
   * @return Response from the API call
   */
  async searchLocations(
    text: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LocationModel[]>> {
    const req = this.createRequest('GET', '/products/location/search/');
    const mapped = req.prepareArgs({ text: [text, string()] });
    req.query('text', mapped.text);
    return req.callAsJson(array(locationModelSchema), requestOptions);
  }

  /**
   * This endpoint returns a list of supported industry names that can be used to search for products.
   * Results are ordered alphabetically.
   * Use the `id` key of any Industry in the response to search for a product.
   * Besides the default English, German and Dutch result translations can be requested by specifying an
   * `Accept-Language: [de|nl]` header.
   *
   * @param limit           Number of results to return per page.
   * @param offset          The initial index from which to return the results.
   * @param acceptLanguage
   * @return Response from the API call
   */
  async listIndustries(
    limit?: number,
    offset?: number,
    acceptLanguage?: AcceptLanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IndustryModel[]>> {
    const req = this.createRequest('GET', '/products/industries/');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      acceptLanguage: [acceptLanguage, optional(acceptLanguageEnumSchema)],
    });
    req.header('Accept-Language', mapped.acceptLanguage);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    return req.callAsJson(array(industryModelSchema), requestOptions);
  }

  /**
   * Retrieve all Education Level possible values.
   *
   * @return Response from the API call
   */
  async retrieveEducationLevels(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EducationLevelModel[]>> {
    const req = this.createRequest('GET', '/taxonomy/education-levels');
    return req.callAsJson(array(educationLevelModelSchema), requestOptions);
  }

  /**
   * Retrieve all Seniority possible values.
   *
   * @return Response from the API call
   */
  async retrieveSeniorities(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<SeniorityModel[]>> {
    const req = this.createRequest('GET', '/taxonomy/seniority');
    return req.callAsJson(array(seniorityModelSchema), requestOptions);
  }
}
