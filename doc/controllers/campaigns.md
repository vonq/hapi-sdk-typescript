# Campaigns

```ts
const campaignsController = new CampaignsController(client);
```

## Class Name

`CampaignsController`

## Methods

* [Order Campaign](../../doc/controllers/campaigns.md#order-campaign)
* [List Campaigns](../../doc/controllers/campaigns.md#list-campaigns)
* [Retrieve Campaign](../../doc/controllers/campaigns.md#retrieve-campaign)
* [Check Campaign Status](../../doc/controllers/campaigns.md#check-campaign-status)
* [Take Campaign Offline](../../doc/controllers/campaigns.md#take-campaign-offline)


# Order Campaign

Once your Customer has decided on a list of Channels they would like to buy, you can send the list along with
publishing information as a `POST` request in order to create a `Campaign`. In return, you'll receive
the id of the newly created `Campaign` along with the URL where you can access that Campaign information.
For "My Contracts" type of Products, there is no expiration. The vacancy can be taken offline either by the job board or manually, by calling the "[Take a campaign offline](https://vonq.stoplight.io/docs/hapi/b3A6MzM0NDA3MzQ-take-a-campaign-offline)" endpoint.

#### Target group

You should use the following endpoints for the target group information:

- [**`Industry`**](b3A6MzM0NDA3Mzg-industry-names)

- [**`Job Function`**](b3A6MzM0NDA3MzU-job-functions)

- [**`Education Level`**](b3A6MzM0NDA3Mzk-retrieve-education-level-taxonomy)

- [**`Seniority`**](b3A6MzM0NDA3NDA-retrieve-seniority-taxonomy)

```ts
async orderCampaign(
  body: CampaignOrder,
  companyId?: string,
  limit?: string,
  offset?: string,
  xCustomerId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<OrderCampaignSuccessResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CampaignOrder`](../../doc/models/campaign-order.md) | Body, Required | - |
| `companyId` | `string \| undefined` | Query, Optional | - |
| `limit` | `string \| undefined` | Query, Optional | - |
| `offset` | `string \| undefined` | Query, Optional | - |
| `xCustomerId` | `string \| undefined` | Header, Optional | The ID of the end-user creating the order. Only required if you are using HAPI Job Post and creating orders with contracts. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrderCampaignSuccessResponse`](../../doc/models/order-campaign-success-response.md)

## Example Usage

```ts
const contentType = null;
const bodyRecruiterInfo: RecruiterInfo = {
  name: 'John Doe',
};

const bodyPostingDetailsOrganization: PostingOrganization = {
  name: 'Vonq',
  companyLogo: 'http://static.ats.com/public/vonq-company-logo.png',
};

const bodyPostingDetailsWorkingLocation: PostingWorkingLocation = {
  addressLine1: 'Westblaak 175',
  postcode: '3012 KJ',
  city: 'Rotterdam',
  country: 'The Netherlands',
};

const bodyPostingDetailsWeeklyWorkingHours: PostingWeeklyWorkingHours = {
  to: 69.94,
};

const bodyPostingDetailsSalaryIndicationRange: Range3 = {
  to: 22.8,
};

const bodyPostingDetailsSalaryIndication: PostingSalaryIndication = {
  period: 'yearly',
  range: bodyPostingDetailsSalaryIndicationRange,
};

const bodyPostingDetails: PostingDetails = {
  title: 'Come work for us, we\'re looking for amazing Software Developers',
  description: 'Are you a LEADER and a BUILDER?  Global is looking for individuals who are dynamic, sales-oriented, and who want to control their destiny.  With a full training programme and consistent support, Global will provide you with the tools to excel in this very lucrative business.',
  organization: bodyPostingDetailsOrganization,
  workingLocation: bodyPostingDetailsWorkingLocation,
  yearsOfExperience: 220.92,
  employmentType: 'permanent',
  weeklyWorkingHours: bodyPostingDetailsWeeklyWorkingHours,
  salaryIndication: bodyPostingDetailsSalaryIndication,
  jobPageUrl: 'http://amadeus-hospitality-it-careers.com/vacancy/software-development-manager-breda',
  applicationUrl: 'http://amadeus-hospitality-it-careers.com/vacancy/software-development-manager-breda/apply',
};

const bodyTargetGroupEducationLevel: TargetGroupElement[] = [];

const bodyTargetGroupeducationLevel0: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupEducationLevel[0] = bodyTargetGroupeducationLevel0;

const bodyTargetGroupeducationLevel1: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupEducationLevel[1] = bodyTargetGroupeducationLevel1;

const bodyTargetGroupSeniority: TargetGroupElement[] = [];

const bodyTargetGroupseniority0: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupSeniority[0] = bodyTargetGroupseniority0;

const bodyTargetGroupseniority1: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupSeniority[1] = bodyTargetGroupseniority1;

const bodyTargetGroupseniority2: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupSeniority[2] = bodyTargetGroupseniority2;

const bodyTargetGroupIndustry: TargetGroupElement[] = [];

const bodyTargetGroupindustry0: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupIndustry[0] = bodyTargetGroupindustry0;

const bodyTargetGroupindustry1: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupIndustry[1] = bodyTargetGroupindustry1;

const bodyTargetGroupindustry2: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupIndustry[2] = bodyTargetGroupindustry2;

const bodyTargetGroupJobCategory: TargetGroupElement[] = [];

const bodyTargetGroupjobCategory0: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupJobCategory[0] = bodyTargetGroupjobCategory0;

const bodyTargetGroupjobCategory1: TargetGroupElement = {
  description: 'Element name',
  vonqId: '23',
};

bodyTargetGroupJobCategory[1] = bodyTargetGroupjobCategory1;

const bodyTargetGroup: TargetGroup = {
  educationLevel: bodyTargetGroupEducationLevel,
  seniority: bodyTargetGroupSeniority,
  industry: bodyTargetGroupIndustry,
  jobCategory: bodyTargetGroupJobCategory,
};

const bodyOrderedProducts: string[] = ['orderedProducts2'];
const body: CampaignOrder = {
  companyId: 'dd1c5be0-b0e1-41c8-ba92-e876da16c38b',
  recruiterInfo: bodyRecruiterInfo,
  postingDetails: bodyPostingDetails,
  targetGroup: bodyTargetGroup,
  orderedProducts: bodyOrderedProducts,
};

try {
  const { result, ...httpResponse } = await campaignsController.orderCampaign(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "campaignId": "ffb37e76-d4fe-5ad6-8441-b02c1b15aa4c"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`OrderCampaignErrorResponseError`](../../doc/models/order-campaign-error-response-error.md) |


# List Campaigns

Displays all the existing Campaigns already ordered for this Partner is as simple as executing a `GET`
request against the endpoint `/campaigns`

```ts
async listCampaigns(
  companyId: string,
  limit?: number,
  offset?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResultSet1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string` | Query, Required | CompanyId to filter the results on |
| `limit` | `number \| undefined` | Query, Optional | Amount of products returned |
| `offset` | `number \| undefined` | Query, Optional | Starting point |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResultSet1`](../../doc/models/result-set-1.md)

## Example Usage

```ts
const companyId = 'companyId0';
try {
  const { result, ...httpResponse } = await campaignsController.listCampaigns(companyId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "total": 1337,
  "limit": 50,
  "offset": 0,
  "data": [
    {
      "companyId": "dd1c5be0-b0e1-41c8-ba92-e876da16c38b",
      "orderReference": "PO_567_2019",
      "recruiterInfo": {
        "id": "af78ce39-94a8-45dc-8c68-35f4d684fa5f",
        "name": "John Doe",
        "emailAddress": "john.doe@vonq.com"
      },
      "campaignName": "Software Development Manager",
      "postingDetails": {
        "title": "Come work for us, we're looking for amazing Software Developers",
        "description": "Are you a LEADER and a BUILDER?  Global is looking for individuals who are dynamic, sales-oriented, and who want to control their destiny.  With a full training programme and consistent support, Global will provide you with the tools to excel in this very lucrative business.",
        "organization": {
          "name": "Vonq",
          "companyLogo": "http://static.ats.com/public/vonq-company-logo.png"
        },
        "workingLocation": {
          "addressLine1": "Westblaak 175",
          "postcode": "3012 KJ",
          "city": "Rotterdam",
          "country": "The Netherlands",
          "allowsRemoteWork": 0
        },
        "contactInfo": {
          "name": "Janet Doe",
          "phoneNumber": "+31 6 5555 5555",
          "emailAddress": "janet.doe@vonq.com"
        },
        "yearsOfExperience": 5,
        "employmentType": "permanent",
        "weeklyWorkingHours": {
          "from": 32,
          "to": 40
        },
        "salaryIndication": {
          "period": "yearly",
          "range": {
            "from": 56000,
            "to": 60000,
            "currency": "EUR"
          }
        },
        "jobPageUrl": "http://amadeus-hospitality-it-careers.com/vacancy/software-development-manager-breda",
        "applicationUrl": "http://amadeus-hospitality-it-careers.com/vacancy/software-development-manager-breda/apply"
      },
      "targetGroup": {
        "educationLevel": [
          {
            "description": "Vendor-specific value",
            "vonqId": "23"
          }
        ],
        "seniority": [
          {
            "description": "Vendor-specific value",
            "vonqId": "23"
          }
        ],
        "industry": [
          {
            "description": "Vendor-specific value",
            "vonqId": "23"
          }
        ],
        "jobCategory": [
          {
            "description": "Vendor-specific value",
            "vonqId": "23"
          }
        ]
      },
      "orderedProducts": [
        "89",
        "889",
        "2cbad29e-a510-52fc-bbdf-e873320e89f5"
      ],
      "orderedProductsSpecs": [
        {
          "productId": "2cbad29e-a510-52fc-bbdf-e873320e89f5",
          "status": "online",
          "statusDescription": "",
          "deliveredOn": "2020-11-30T11:00:15+0000",
          "duration": "20 days",
          "durationPeriod": {
            "range": "days",
            "period": 30
          },
          "utm": "utm_medium=social&utm_source=facebook&utm_campaign=example",
          "jobBoardLink": "http://job.ad.com/software-developer",
          "contractId": "06a8f6f0-5e0e-4614-869e-ab95a8530633",
          "postingRequirements": {
            "someText": "example",
            "multipleSelectField": [
              "123",
              "234"
            ],
            "someIntValue": 22
          }
        }
      ],
      "postings": [
        {
          "name": "Linkedin.com 30 days",
          "clicks": 14
        }
      ]
    }
  ]
}
```


# Retrieve Campaign

Retrieve the details of a specific Campaign. Only Campaigns created by the calling Partner can be
retrieved.

```ts
async retrieveCampaign(
  campaignId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListCampaignResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `string` | Template, Required | Id of the Campaign that you want to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListCampaignResponse`](../../doc/models/list-campaign-response.md)

## Example Usage

```ts
const campaignId = '000026a2-0000-0000-0000-000000000000';
try {
  const { result, ...httpResponse } = await campaignsController.retrieveCampaign(campaignId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "data": {
    "companyId": "dd1c5be0-b0e1-41c8-ba92-e876da16c38b",
    "orderReference": "PO_567_2019",
    "recruiterInfo": {
      "id": "af78ce39-94a8-45dc-8c68-35f4d684fa5f",
      "name": "John Doe",
      "emailAddress": "john.doe@vonq.com"
    },
    "campaignName": "Software Development Manager",
    "postingDetails": {
      "title": "Come work for us, we're looking for amazing Software Developers",
      "description": "Are you a LEADER and a BUILDER?  Global is looking for individuals who are dynamic, sales-oriented, and who want to control their destiny.  With a full training programme and consistent support, Global will provide you with the tools to excel in this very lucrative business.",
      "organization": {
        "name": "Vonq",
        "companyLogo": "http://static.ats.com/public/vonq-company-logo.png"
      },
      "workingLocation": {
        "addressLine1": "Westblaak 175",
        "postcode": "3012 KJ",
        "city": "Rotterdam",
        "country": "The Netherlands",
        "allowsRemoteWork": 0
      },
      "contactInfo": {
        "name": "Janet Doe",
        "phoneNumber": "+31 6 5555 5555",
        "emailAddress": "janet.doe@vonq.com"
      },
      "yearsOfExperience": 5,
      "employmentType": "permanent",
      "weeklyWorkingHours": {
        "from": 32,
        "to": 40
      },
      "salaryIndication": {
        "period": "yearly",
        "range": {
          "from": 56000,
          "to": 60000,
          "currency": "EUR"
        }
      },
      "jobPageUrl": "http://amadeus-hospitality-it-careers.com/vacancy/software-development-manager-breda",
      "applicationUrl": "http://amadeus-hospitality-it-careers.com/vacancy/software-development-manager-breda/apply"
    },
    "targetGroup": {
      "educationLevel": [
        {
          "description": "Vendor-specific value",
          "vonqId": "23"
        }
      ],
      "seniority": [
        {
          "description": "Vendor-specific value",
          "vonqId": "23"
        }
      ],
      "industry": [
        {
          "description": "Vendor-specific value",
          "vonqId": "23"
        }
      ],
      "jobCategory": [
        {
          "description": "Vendor-specific value",
          "vonqId": "23"
        }
      ]
    },
    "orderedProducts": [
      "89",
      "889",
      "2cbad29e-a510-52fc-bbdf-e873320e89f5"
    ],
    "orderedProductsSpecs": [
      {
        "productId": "2cbad29e-a510-52fc-bbdf-e873320e89f5",
        "status": "online",
        "statusDescription": "",
        "deliveredOn": "2020-11-30T11:00:15+0000",
        "duration": "20 days",
        "durationPeriod": {
          "range": "days",
          "period": 30
        },
        "utm": "utm_medium=social&utm_source=facebook&utm_campaign=example",
        "jobBoardLink": "http://job.ad.com/software-developer",
        "contractId": "06a8f6f0-5e0e-4614-869e-ab95a8530633",
        "postingRequirements": {
          "someText": "example",
          "multipleSelectField": [
            "123",
            "234"
          ],
          "someIntValue": 22
        }
      }
    ],
    "postings": [
      {
        "name": "Linkedin.com 30 days",
        "clicks": 14
      }
    ]
  }
}
```


# Check Campaign Status

This is a specialized endpoint for Campaign statuses only. Although the Campaign Details endpoint also returns the
status of a campaign, if you only need to get the specific status of a Campaign, this endpoint is
optimized for that.

```ts
async checkCampaignStatus(
  campaignId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckCampaignStatusresponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `string` | Template, Required | Id of the Campaign you want the status of |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CheckCampaignStatusresponse`](../../doc/models/check-campaign-statusresponse.md)

## Example Usage

```ts
const campaignId = '000026a2-0000-0000-0000-000000000000';
try {
  const { result, ...httpResponse } = await campaignsController.checkCampaignStatus(campaignId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "data": {
    "campaignId": "ffb37e76-d4fe-5ad6-8441-b02c1b15aa4c",
    "status": "online",
    "orderedProductsStatuses": [
      {
        "productId": "8eefb7a1-c5f3-5739-9fe6-cea17e2ee742",
        "status": "online",
        "statusDescription": "null"
      }
    ]
  }
}
```


# Take Campaign Offline

Specific endpoint to take a campaign offline. Keep in mind that processing this might
take some time and it only has an effect if the campaign's status is "online".

```ts
async takeCampaignOffline(
  campaignId: string,
  body: TakeCampaignOfflineRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TakeCampaignOfflineResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `string` | Template, Required | Id of the Campaign you want to take offline |
| `body` | [`TakeCampaignOfflineRequest`](../../doc/models/take-campaign-offline-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TakeCampaignOfflineResponse`](../../doc/models/take-campaign-offline-response.md)

## Example Usage

```ts
const campaignId = '000026a2-0000-0000-0000-000000000000';
const contentType = null;
const body: TakeCampaignOfflineRequest = {
  campaignId: 'ffb37e76-d4fe-5ad6-8441-b02c1b15aa4c',
  status: 'offline',
};

try {
  const { result, ...httpResponse } = await campaignsController.takeCampaignOffline(campaignId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "campaignId": "ffb37e76-d4fe-5ad6-8441-b02c1b15aa4c"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`TakeCampaignOfflineErrorResponse2Error`](../../doc/models/take-campaign-offline-error-response-2-error.md) |
| 404 | - | [`TakeCampaignOfflineErrorResponseError`](../../doc/models/take-campaign-offline-error-response-error.md) |

