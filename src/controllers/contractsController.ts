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
import {
  AutocompleteValuesResponseModel,
  autocompleteValuesResponseModelSchema,
} from '../models/autocompleteValuesResponseModel';
import { ChannelModel, channelModelSchema } from '../models/channelModel';
import { ContractModel, contractModelSchema } from '../models/contractModel';
import {
  CreateContractResponseModel,
  createContractResponseModelSchema,
} from '../models/createContractResponseModel';
import {
  FacetAutocompleteModel,
  facetAutocompleteModelSchema,
} from '../models/facetAutocompleteModel';
import {
  ListChannelsResponseModel,
  listChannelsResponseModelSchema,
} from '../models/listChannelsResponseModel';
import {
  ListContractsResponseModel,
  listContractsResponseModelSchema,
} from '../models/listContractsResponseModel';
import {
  MultipleContractsResponseModel,
  multipleContractsResponseModelSchema,
} from '../models/multipleContractsResponseModel';
import {
  PostContractModel,
  postContractModelSchema,
} from '../models/postContractModel';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ContractsController extends BaseController {
  /**
   * This endpoint exposes a list of channels with support for contracts. For all of the required details
   * for creating a contract or a campaign for each channel, please call the "Retrieve details for
   * channel with support for contracts".
   *
   * @param search          A search term.
   * @param limit           Number of results to return per page.
   * @param offset          The initial index from which to return the results.
   * @param acceptLanguage  The language the client prefers.
   * @return Response from the API call
   */
  async listChannels(
    search?: string,
    limit?: number,
    offset?: number,
    acceptLanguage?: AcceptLanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListChannelsResponseModel>> {
    const req = this.createRequest('GET', '/products/channels/mocs/');
    const mapped = req.prepareArgs({
      search: [search, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      acceptLanguage: [acceptLanguage, optional(acceptLanguageEnumSchema)],
    });
    req.header('Accept-Language', mapped.acceptLanguage);
    req.query('search', mapped.search);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    return req.callAsJson(listChannelsResponseModelSchema, requestOptions);
  }

  /**
   * This endpoint exposes the details of a channel with support for contracts,as well as all the
   * required details for creating a contract or a campaign for each channel.
   *
   * @param channelId       ID of the channel
   * @param acceptLanguage  The language the client prefers.
   * @return Response from the API call
   */
  async retrieveChannel(
    channelId: string,
    acceptLanguage?: AcceptLanguageEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ChannelModel>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      channelId: [channelId, string()],
      acceptLanguage: [acceptLanguage, optional(acceptLanguageEnumSchema)],
    });
    req.header('Accept-Language', mapped.acceptLanguage);
    req.appendTemplatePath`/products/channels/mocs/${mapped.channelId}`;
    return req.callAsJson(channelModelSchema, requestOptions);
  }

  /**
   * This endpoint exposes a list of contract available to a particular customer.
   *
   * @param xCustomerId   An identifier for the remote customer
   * @param limit         Amount of contracts returned
   * @param offset        Starting point
   * @return Response from the API call
   */
  async listContracts(
    xCustomerId: string,
    limit?: number,
    offset?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListContractsResponseModel>> {
    const req = this.createRequest('GET', '/contracts/');
    const mapped = req.prepareArgs({
      xCustomerId: [xCustomerId, string()],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
    });
    req.header('X-Customer-Id', mapped.xCustomerId);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    return req.callAsJson(listContractsResponseModelSchema, requestOptions);
  }

  /**
   * This endpoint creates a new customer contract. It requires a reference to a channel, a credential
   * payload, and the facets set for the contracted product.
   *
   * HAPI doesn't support contract editing, because job boards require the same credentials to be able to
   * delete already posted jobs via that contract at a later moment. Otherwise, deleting jobs would not
   * be possible. To edit contract credentials, the credentials need to be deleted first, and then
   * recreated. When deleted, all corresponding jobs can't be deleted anymore
   *
   * @param xCustomerId   An identifier for the remote customer
   * @param body
   * @return Response from the API call
   */
  async createContract(
    xCustomerId: string,
    body: PostContractModel,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CreateContractResponseModel>> {
    const req = this.createRequest('POST', '/contracts/');
    const mapped = req.prepareArgs({
      xCustomerId: [xCustomerId, string()],
      body: [body, postContractModelSchema],
    });
    req.header('X-Customer-Id', mapped.xCustomerId);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ApiError, '');
    return req.callAsJson(createContractResponseModelSchema, requestOptions);
  }

  /**
   * This endpoint deletes a contract.
   *
   * HAPI doesn't support contract editing, because job boards require the same credentials to be able
   * to delete already posted jobs via that contract at a later moment. Otherwise, deleting jobs would
   * not be possible. To edit contract credentials, the credentials need to be deleted first, and then
   * recreated. When deleted, all corresponding jobs can't be deleted anymore
   *
   * @param contractId
   * @param xCustomerId   An identifier for the remote customer
   * @return Response from the API call
   */
  async deleteContract(
    contractId: string,
    xCustomerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      contractId: [contractId, string()],
      xCustomerId: [xCustomerId, string()],
    });
    req.header('X-Customer-Id', mapped.xCustomerId);
    req.appendTemplatePath`/contracts/${mapped.contractId}/`;
    return req.call(requestOptions);
  }

  /**
   * This endpoint retrieves the detail for a customer contract. It contains a reference to a channel, an
   * (encrypted) credential payload, and the facets set for the My Contracts product.
   *
   * @param contractId
   * @param xCustomerId   An identifier for the remote customer
   * @return Response from the API call
   */
  async retrieveContract(
    contractId: string,
    xCustomerId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ContractModel>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      contractId: [contractId, string()],
      xCustomerId: [xCustomerId, string()],
    });
    req.header('X-Customer-Id', mapped.xCustomerId);
    req.appendTemplatePath`/contracts/single/${mapped.contractId}/`;
    return req.callAsJson(contractModelSchema, requestOptions);
  }

  /**
   * This endpoint exposes a list of multiple contracts, if available to a specific customer.
   *
   * @param contractsIds
   * @param limit         Amount of contracts returned
   * @param offset        Starting point
   * @return Response from the API call
   */
  async retrieveMultipleContracts(
    contractsIds: string[],
    limit?: number,
    offset?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MultipleContractsResponseModel>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      contractsIds: [contractsIds, array(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
    });
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.appendTemplatePath`/contracts/multiple/${mapped.contractsIds}/`;
    return req.callAsJson(multipleContractsResponseModelSchema, requestOptions);
  }

  /**
   * This endpoint exposes autocomplete items given a `channel_id` and a posting requirement name.
   *
   * @param channelId                channel_id (number, required)
   * @param postingRequirementName
   * @param body
   * @return Response from the API call
   */
  async listAutocompleteValues(
    channelId: number,
    postingRequirementName: string,
    body: FacetAutocompleteModel,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AutocompleteValuesResponseModel[]>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      channelId: [channelId, number()],
      postingRequirementName: [postingRequirementName, string()],
      body: [body, facetAutocompleteModelSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/contracts/posting-requirements/${mapped.channelId}/${mapped.postingRequirementName}/`;
    req.throwOn(400, ApiError, '');
    return req.callAsJson(
      array(autocompleteValuesResponseModelSchema),
      requestOptions
    );
  }
}
