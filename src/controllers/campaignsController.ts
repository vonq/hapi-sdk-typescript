/**
 * VONQ Hiring APILib
 *
 * This file was automatically generated for VONQ by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  OrderCampaignErrorResponseError,
} from '../errors/orderCampaignErrorResponseError';
import {
  TakeCampaignOfflineErrorResponse2Error,
} from '../errors/takeCampaignOfflineErrorResponse2Error';
import {
  TakeCampaignOfflineErrorResponseError,
} from '../errors/takeCampaignOfflineErrorResponseError';
import {
  CampaignOrderModel,
  campaignOrderModelSchema,
} from '../models/campaignOrderModel';
import {
  CheckCampaignStatusresponseModel,
  checkCampaignStatusresponseModelSchema,
} from '../models/checkCampaignStatusresponseModel';
import {
  ListCampaignResponseModel,
  listCampaignResponseModelSchema,
} from '../models/listCampaignResponseModel';
import {
  OrderCampaignSuccessResponseModel,
  orderCampaignSuccessResponseModelSchema,
} from '../models/orderCampaignSuccessResponseModel';
import {
  ResultSet1Model,
  resultSet1ModelSchema,
} from '../models/resultSet1Model';
import {
  TakeCampaignOfflineRequestModel,
  takeCampaignOfflineRequestModelSchema,
} from '../models/takeCampaignOfflineRequestModel';
import {
  TakeCampaignOfflineResponseModel,
  takeCampaignOfflineResponseModelSchema,
} from '../models/takeCampaignOfflineResponseModel';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class CampaignsController extends BaseController {
  /**
   * Once your Customer has decided on a list of Channels they would like to buy, you can send the list
   * along with
   * publishing information as a `POST` request in order to create a `Campaign`. In return, you'll
   * receive
   * the id of the newly created `Campaign` along with the URL where you can access that Campaign
   * information.
   * For "My Contracts" type of Products, there is no expiration. The vacancy can be taken offline either
   * by the job board or manually, by calling the "[Take a campaign offline](https://vonq.stoplight.
   * io/docs/hapi/b3A6MzM0NDA3MzQ-take-a-campaign-offline)" endpoint.
   *
   * #### Target group
   *
   * You should use the following endpoints for the target group information:
   *
   * - [**`Industry`**](b3A6MzM0NDA3Mzg-industry-names)
   *
   * - [**`Job Function`**](b3A6MzM0NDA3MzU-job-functions)
   *
   * - [**`Education Level`**](b3A6MzM0NDA3Mzk-retrieve-education-level-taxonomy)
   *
   * - [**`Seniority`**](b3A6MzM0NDA3NDA-retrieve-seniority-taxonomy)
   *
   * @param body
   * @param companyId
   * @param limit
   * @param offset
   * @param xCustomerId   The ID of the end-user creating the order. Only required if you
   *                                                   are using HAPI Job Post and creating orders with contracts.
   * @return Response from the API call
   */
  async orderCampaign(
    body: CampaignOrderModel,
    companyId?: string,
    limit?: string,
    offset?: string,
    xCustomerId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<OrderCampaignSuccessResponseModel>> {
    const req = this.createRequest('POST', '/campaigns/order');
    const mapped = req.prepareArgs({
      body: [body, campaignOrderModelSchema],
      companyId: [companyId, optional(string())],
      limit: [limit, optional(string())],
      offset: [offset, optional(string())],
      xCustomerId: [xCustomerId, optional(string())],
    });
    req.header('Content-Type', 'application/json');
    req.header('X-Customer-Id', mapped.xCustomerId);
    req.query('companyId', mapped.companyId);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.json(mapped.body);
    req.throwOn(400, OrderCampaignErrorResponseError, '');
    return req.callAsJson(
      orderCampaignSuccessResponseModelSchema,
      requestOptions
    );
  }

  /**
   * Displays all the existing Campaigns already ordered for this Partner is as simple as executing a
   * `GET`
   * request against the endpoint `/campaigns`
   *
   * @param companyId CompanyId to filter the results on
   * @param limit     Amount of products returned
   * @param offset    Starting point
   * @return Response from the API call
   */
  async listCampaigns(
    companyId: string,
    limit?: number,
    offset?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ResultSet1Model>> {
    const req = this.createRequest('GET', '/campaings');
    const mapped = req.prepareArgs({
      companyId: [companyId, string()],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
    });
    req.query('companyId', mapped.companyId);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    return req.callAsJson(resultSet1ModelSchema, requestOptions);
  }

  /**
   * Retrieve the details of a specific Campaign. Only Campaigns created by the calling Partner can be
   * retrieved.
   *
   * @param campaignId Id of the Campaign that you want to retrieve
   * @return Response from the API call
   */
  async retrieveCampaign(
    campaignId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListCampaignResponseModel>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ campaignId: [campaignId, string()] });
    req.appendTemplatePath`/campaigns/${mapped.campaignId}`;
    return req.callAsJson(listCampaignResponseModelSchema, requestOptions);
  }

  /**
   * This is a specialized endpoint for Campaign statuses only. Although the Campaign Details endpoint
   * also returns the
   * status of a campaign, if you only need to get the specific status of a Campaign, this endpoint is
   * optimized for that.
   *
   * @param campaignId Id of the Campaign you want the status of
   * @return Response from the API call
   */
  async checkCampaignStatus(
    campaignId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<CheckCampaignStatusresponseModel>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ campaignId: [campaignId, string()] });
    req.appendTemplatePath`/campaigns/${mapped.campaignId}/status`;
    return req.callAsJson(
      checkCampaignStatusresponseModelSchema,
      requestOptions
    );
  }

  /**
   * Specific endpoint to take a campaign offline. Keep in mind that processing this might
   * take some time and it only has an effect if the campaign's status is "online".
   *
   * @param campaignId   Id of the Campaign you want to take offline
   * @param body
   * @return Response from the API call
   */
  async takeCampaignOffline(
    campaignId: string,
    body: TakeCampaignOfflineRequestModel,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<TakeCampaignOfflineResponseModel>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      campaignId: [campaignId, string()],
      body: [body, takeCampaignOfflineRequestModelSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/campaigns/${mapped.campaignId}/cancellation`;
    req.throwOn(400, TakeCampaignOfflineErrorResponse2Error, '');
    req.throwOn(404, TakeCampaignOfflineErrorResponseError, '');
    return req.callAsJson(
      takeCampaignOfflineResponseModelSchema,
      requestOptions
    );
  }
}
