# Portfolio

```ts
const portfolioController = new PortfolioController(client);
```

## Class Name

`PortfolioController`

## Methods

* [Calculate Order Delivery Time](../../doc/controllers/portfolio.md#calculate-order-delivery-time)
* [Retrieve Multiple Products](../../doc/controllers/portfolio.md#retrieve-multiple-products)
* [Retrieve Single Product](../../doc/controllers/portfolio.md#retrieve-single-product)
* [Search Products](../../doc/controllers/portfolio.md#search-products)


# Calculate Order Delivery Time

This endpoint calculates total number of days to process and setup a campaign containing a list of Products, given a comma-separated list of their ids.

```ts
async calculateOrderDeliveryTime(
  productsIds: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductsDeliveryTimeModel[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productsIds` | `string[]` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductsDeliveryTimeModel[]`](../../doc/models/products-delivery-time-model.md)

## Example Usage

```ts
const ProductsIds: string[] = ['products_ids7', 'products_ids8'];
try {
  const { result, ...httpResponse } = await portfolioController.calculateOrderDeliveryTime(productsIds);
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
[
  {
    "days_to_process": 1,
    "days_to_setup": 1,
    "total_days": 2
  }
]
```


# Retrieve Multiple Products

Sometimes you already have access to the Identification codes of more than one Product and you want to retrieve the most up-to-date information about them.
Besides the default English, German and Dutch result translations can be requested by specifying an `Accept-Language: [de|nl]` header.

```ts
async retrieveMultipleProducts(
  productsIds: string[],
  acceptLanguage?: AcceptLanguageEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductModel[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productsIds` | `string[]` | Template, Required | - |
| `acceptLanguage` | [`AcceptLanguageEnum \| undefined`](../../doc/models/accept-language-enum.md) | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductModel[]`](../../doc/models/product-model.md)

## Example Usage

```ts
const ProductsIds: string[] = ['products_ids7', 'products_ids8'];
const acceptLanguage = 'en';
try {
  const { result, ...httpResponse } = await portfolioController.retrieveMultipleProducts(productsIds, acceptLanguage);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Single Product

Sometimes you already have access to the Identification code of any particular Product and you want to retrieve the most up-to-date information about it.
Besides the default English, German and Dutch result translations can be requested by specifying an `Accept-Language: [de|nl]` header.

```ts
async retrieveSingleProduct(
  productId: string,
  acceptLanguage?: AcceptLanguageEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ProductModel>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string` | Template, Required | - |
| `acceptLanguage` | [`AcceptLanguageEnum \| undefined`](../../doc/models/accept-language-enum.md) | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductModel`](../../doc/models/product-model.md)

## Example Usage

```ts
const productId = 'product_id4';
const acceptLanguage = 'en';
try {
  const { result, ...httpResponse } = await portfolioController.retrieveSingleProduct(productId, acceptLanguage);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Products

For a detailed tutorial on how to get started with portfolio search v2, check out our [Quickstart Tutorial](https://pkb.stoplight.io/docs/search/docs/Tutorial.md).
For an implementation demo of the product search experience, check out our [Developer Portal](http://vonq.io/pkb).
This endpoint exposes a list of Products with the options to search by Location, Job Title, Job Function and Industry.
Products are ranked by their relevancy to the search terms.
Optionally, products can filtered by Location.
Values for each parameter can be fetched by calling the other endpoints in this section.
Calling this endpoint will guarantee that the Products you see are configured for you as our Partner.
Besides the default English, German and Dutch result translations can be requested by specifying an `Accept-Language: [de|nl]` header.

```ts
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
): Promise<ApiResponse<ProductModel[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | Number of results to return per page. |
| `offset` | `number \| undefined` | Query, Optional | The initial index from which to return the results. |
| `includeLocationId` | `string[] \| undefined` | Query, Optional | Id for a Location to search products against. If no exact matches exist, search will be expanded to the Location's region and country. Optionally, a (comma-separated) array of values can be passed. Passing multiple values increases the number of search results. |
| `exactLocationId` | `string \| undefined` | Query, Optional | Match only products specifically assigned to a Location. |
| `jobFunctionId` | `string \| undefined` | Query, Optional | Job Function id. Not to be used in conjunction with a Job Title id. |
| `jobTitleId` | `string \| undefined` | Query, Optional | Job title id |
| `industryId` | `string[] \| undefined` | Query, Optional | Industry Id |
| `durationFrom` | `string \| undefined` | Query, Optional | Match only products with a duration more or equal than a certain number of days |
| `durationTo` | `string \| undefined` | Query, Optional | Match only products with a duration up to a certain number of days |
| `name` | `string \| undefined` | Query, Optional | Search text for a product name |
| `currency` | `string \| undefined` | Query, Optional | ISO-4217 code for a currency |
| `sortBy` | [`SortByEnum \| undefined`](../../doc/models/sort-by-enum.md) | Query, Optional | Which products to show first. Defaults to 'relevant'<br>**Default**: `SortByEnum.Relevant` |
| `recommended` | `boolean \| undefined` | Query, Optional | Whether to display a list of recommended products for the search parameters. If true, returns a limited list of products for the types: Job board, social media, publication and community. |
| `mcEnabled` | `boolean \| undefined` | Query, Optional | Can be used to filter for products that are linked to a channel enabled for My Contracts orders |
| `acceptLanguage` | [`AcceptLanguageEnum \| undefined`](../../doc/models/accept-language-enum.md) | Header, Optional | - |
| `excludeRecommended` | `boolean \| undefined` | Query, Optional | Exclude recommended products from search results. Cannot be used in combination with 'recommended'.<br>**Default**: `false` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProductModel[]`](../../doc/models/product-model.md)

## Example Usage

```ts
const sortBy = 'relevant';
const acceptLanguage = 'en';
const excludeRecommended = false;
try {
  const { result, ...httpResponse } = await portfolioController.searchProducts(None, None, None, None, None, None, None, None, None, None, None, sortBy, None, None, acceptLanguage, excludeRecommended);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | `ApiError` |

