
# Getting Started with VONQ Hiring API

## Introduction

The VONQ Hiring API aims to provide all the basic VONQ Services through a comprehensive [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) API. Systems would be able to
consume these services to list available VONQ Products and create Campaigns based on those Products.

### Overview

Our latest API version is currently version 2. It offers more search facets and filters,
a new recommendation engine, and a richer, evolving set of taxonomies so your users can find the most relevant,
best-performing products for their vacancies.

#### Schema

The API can be accessed at `https://marketplace.api.vonq.com` and is HTTPS-only. All requests must be
encoded in JSON, and all responses will be encoded in JSON as well.

#### Environments

We currently support two different environments for the Hiring API. The `Production` environment is
connected to our other `Production` backend services. That means that any order sent to this
environment is considered final and processed.

At the same time we support a `Sandbox` environment, accessible via `https://marketplace-sandbox.api.vonq.com`. You can safely test your API implementation here.
None of the orders sent to this environment are considered final, so they will not be executed nor charged. This
environment requires a different API Token to operate, which will be provided to you when available.

#### HTTP Methods

Whenever possible, the Hiring API uses RESTful `HTTP` methods for its actions.
| HTTP Method | Description                                      |
|:----------|--------------------------------------------------|
| `GET`     | Retrieve one or several Resources                |
| `POST`    | Create a new Resource. Eg: Create a new Campaign |
| `PATCH`   | Change part of the structure of a Resource       |

#### Pagination

Lists of multiple Resources will automatically paginate every 50 items by default. You can retrieve more elements by
specifying a value for the `offset` parameter (the default `offset` is 0). If you need to change the
number of elements returned by the default pagination, you can do so using the `limit` query parameter.

Example:

```

curl https://marketplace.api.vonq.com/portfolio?limit=100&offset=400

```

#### User-Agent

We recommend that every request made to the Hiring API includes a `User-Agent` header. This is not a mandatory
requirement at the moment, but this may change in the future. Specifying your User-Agent will allow us to provide you with more effective support.

#### Error Codes

The Hiring API uses standard HTTP Status codes for its responses to inform your system how the Hiring API handled your request.
Response codes in the range of `2xx` represent success codes (Eg, `201 Created`).
Codes in the `4xx` range indicates an error on the request performed, usually because the payload used doesn't contain
all the necessary information or is in an invalid format (Eg, `400 Bad Request`).
The error codes in the `5xx` range mean that an error occurred in the Hiring API and we were not able to handle your request.
It can also happen when our services are temporarily not available (Eg, `500 Internal Server Error`). These should be rare. We log these errors and investigate them as soon as possible.

The following Response coded are shared amongst all endpoints:

+ Response 400 (application/json)
  
        {
            "requestBody": "The request does not contain valid JSON."
        }

+ Response 401 (application/json)
  
        {
            "authentication": "Authentication Required"
        }

+ Response 401 (application/json)
  
        {
            "authentication": "Username could not be found."
        }

+ Response 500 (application/json)

#### Caching

We recommend avoiding using cached versions of portfolio and taxonomy data since it is subject to regular updates. Campaign ordeproducts  invalid taxonomy will be rejected.
If you do need to use caching, we recommend refreshing it daily.

#### Rate Limits

To prevent abuse and ensure service stability, all the API requests are rate limited. Rate limits specify
the maximum number of API calls (60) that can be made in 60 seconds. These limits reset every 60 seconds.
User of the API can make upto 60 request per 60 seconds.

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=HAPI&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=HAPI&workspaceName=vonq-hiring-apilib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *VONQ Hiring APILib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add VonqHiringApilib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=HAPI&workspaceName=vonq-hiring-apilib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install VonqHiringApilib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `xAuthToken` | `string` |  |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production,
  xAuthToken: null,
})
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | **Default** Sandbox |
| environment2 | Production |

## Authorization

This API uses `Custom Header Signature`.

## List of APIs

* [Campaigns](doc/controllers/campaigns.md)
* [Contracts](doc/controllers/contracts.md)
* [Portfolio](doc/controllers/portfolio.md)
* [Taxonomy](doc/controllers/taxonomy.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

