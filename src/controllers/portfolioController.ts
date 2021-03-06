/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import {
  AcceptLanguageEnum,
  acceptLanguageEnumSchema,
} from '../models/acceptLanguageEnum';
import { ProductModel, productModelSchema } from '../models/productModel';
import {
  ProductsDeliveryTimeModel,
  productsDeliveryTimeModelSchema,
} from '../models/productsDeliveryTimeModel';
import { SortByEnum, sortByEnumSchema } from '../models/sortByEnum';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class PortfolioController extends BaseController {
  /**
   * For a detailed tutorial on how to get started with portfolio search v2, check out our [Quickstart
   * Tutorial](https://pkb.stoplight.io/docs/search/docs/Tutorial.md).
   * For an implementation demo of the product search experience, check out our [Developer Portal](http:
   * //vonq.io/pkb).
   * This endpoint exposes a list of Products with the options to search by Location, Job Title, Job
   * Function and Industry.
   * Products are ranked by their relevancy to the search terms.
   * Optionally, products can filtered by Location.
   * Values for each parameter can be fetched by calling the other endpoints in this section.
   * Calling this endpoint will guarantee that the Products you see are configured for you as our Partner.
   * Besides the default English, German and Dutch result translations can be requested by specifying an
   * `Accept-Language: [de|nl]` header.
   *
   * @param limit              Number of results to return per page.
   * @param offset             The initial index from which to return the results.
   * @param includeLocationId  Id for a Location to search products against. If no exact matches
   *                                                 exist, search will be expanded to the Location's region and
   *                                                 country. Optionally, a (comma-separated) array of values can be
   *                                                 passed. Passing multiple values increases the number of search
   *                                                 results.
   * @param exactLocationId    Match only products specifically assigned to a Location.
   * @param jobFunctionId      Job Function id. Not to be used in conjunction with a Job Title
   *                                                 id.
   * @param jobTitleId         Job title id
   * @param industryId         Industry Id
   * @param durationFrom       Match only products with a duration more or equal than a certain
   *                                                 number of days
   * @param durationTo         Match only products with a duration up to a certain number of
   *                                                 days
   * @param name               Search text for a product name
   * @param currency           ISO-4217 code for a currency
   * @param sortBy             Which products to show first. Defaults to 'relevant'
   * @param recommended        Whether to display a list of recommended products for the search
   *                                                 parameters. If true, returns a limited list of products for the
   *                                                 types: Job board, social media, publication and community.
   * @param mcEnabled          Can be used to filter for products that are linked to a channel
   *                                                 enabled for My Contracts orders
   * @param acceptLanguage
   * @param excludeRecommended Exclude recommended products from search results. Cannot be used
   *                                                 in combination with 'recommended'.
   * @return Response from the API call
   */
  async searchProducts(
    limit?: number,
    offset?: number,
    includeLocationId?: string[],
    exactLocationId?: string,
    jobFunctionId?: string,
    jobTitleId?: string,
    industryId?: string[],
    durationFrom?: string,
    durationTo?: string,
    name?: string,
    currency?: string,
    sortBy?: SortByEnum,
    recommended?: boolean,
    mcEnabled?: boolean,
    acceptLanguage?: AcceptLanguageEnum,
    excludeRecommended?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductModel[]>> {
    const req = this.createRequest('GET', '/products/search/');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      includeLocationId: [includeLocationId, optional(array(string()))],
      exactLocationId: [exactLocationId, optional(string())],
      jobFunctionId: [jobFunctionId, optional(string())],
      jobTitleId: [jobTitleId, optional(string())],
      industryId: [industryId, optional(array(string()))],
      durationFrom: [durationFrom, optional(string())],
      durationTo: [durationTo, optional(string())],
      name: [name, optional(string())],
      currency: [currency, optional(string())],
      sortBy: [sortBy, optional(sortByEnumSchema)],
      recommended: [recommended, optional(boolean())],
      mcEnabled: [mcEnabled, optional(boolean())],
      acceptLanguage: [acceptLanguage, optional(acceptLanguageEnumSchema)],
      excludeRecommended: [excludeRecommended, optional(boolean())],
    });
    req.header('Accept-Language', mapped.acceptLanguage);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('includeLocationId', mapped.includeLocationId);
    req.query('exactLocationId', mapped.exactLocationId);
    req.query('jobFunctionId', mapped.jobFunctionId);
    req.query('jobTitleId', mapped.jobTitleId);
    req.query('industryId', mapped.industryId);
    req.query('durationFrom', mapped.durationFrom);
    req.query('durationTo', mapped.durationTo);
    req.query('name', mapped.name);
    req.query('currency', mapped.currency);
    req.query('sortBy', mapped.sortBy);
    req.query('recommended', mapped.recommended);
    req.query('mcEnabled', mapped.mcEnabled);
    req.query('excludeRecommended', mapped.excludeRecommended);
    req.throwOn(400, ApiError, '');
    return req.callAsJson(array(productModelSchema), requestOptions);
  }

  /**
   * Sometimes you already have access to the Identification code of any particular Product and you want
   * to retrieve the most up-to-date information about it.
   * Besides the default English, German and Dutch result translations can be requested by specifying an
   * `Accept-Language: [de|nl]` header.
   *
   * @param productId
   * @param acceptLanguage
   * @return Response from the API call
   */
  async retrieveSingleProduct(
    productId: string,
    acceptLanguage?: AcceptLanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductModel>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productId: [productId, string()],
      acceptLanguage: [acceptLanguage, optional(acceptLanguageEnumSchema)],
    });
    req.header('Accept-Language', mapped.acceptLanguage);
    req.appendTemplatePath`/products/single/${mapped.productId}/`;
    return req.callAsJson(productModelSchema, requestOptions);
  }

  /**
   * Sometimes you already have access to the Identification codes of more than one Product and you want
   * to retrieve the most up-to-date information about them.
   * Besides the default English, German and Dutch result translations can be requested by specifying an
   * `Accept-Language: [de|nl]` header.
   *
   * @param productsIds
   * @param acceptLanguage
   * @return Response from the API call
   */
  async retrieveMultipleProducts(
    productsIds: string[],
    acceptLanguage?: AcceptLanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductModel[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productsIds: [productsIds, array(string())],
      acceptLanguage: [acceptLanguage, optional(acceptLanguageEnumSchema)],
    });
    req.header('Accept-Language', mapped.acceptLanguage);
    req.appendTemplatePath`/products/multiple/${mapped.productsIds}/`;
    return req.callAsJson(array(productModelSchema), requestOptions);
  }

  /**
   * This endpoint calculates total number of days to process and setup a campaign containing a list of
   * Products, given a comma-separated list of their ids.
   *
   * @param productsIds
   * @return Response from the API call
   */
  async calculateOrderDeliveryTime(
    productsIds: string[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProductsDeliveryTimeModel[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      productsIds: [productsIds, array(string())],
    });
    req.appendTemplatePath`/products/delivery-time/${mapped.productsIds}/`;
    return req.callAsJson(
      array(productsDeliveryTimeModelSchema),
      requestOptions
    );
  }
}
