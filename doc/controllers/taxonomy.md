# Taxonomy

```ts
const taxonomyController = new TaxonomyController(client);
```

## Class Name

`TaxonomyController`

## Methods

* [Retrieve Job Functions Categories Taxonomy](../../doc/controllers/taxonomy.md#retrieve-job-functions-categories-taxonomy)
* [Search Job Titles](../../doc/controllers/taxonomy.md#search-job-titles)
* [Searchfor Locations](../../doc/controllers/taxonomy.md#searchfor-locations)
* [Listall Industries](../../doc/controllers/taxonomy.md#listall-industries)
* [Retrieve Education Level Taxonomy](../../doc/controllers/taxonomy.md#retrieve-education-level-taxonomy)
* [Retrieve Seniority Taxonomy](../../doc/controllers/taxonomy.md#retrieve-seniority-taxonomy)


# Retrieve Job Functions Categories Taxonomy

This endpoint returns a tree-like structure of supported Job Functions that can be used to search for Products.
Use the `id` key of any Job Function in the response to search for a Product.
Each Job Function is associated with [**`Job Titles`**](b3A6MzM0NDA3MzY-job-titles) in a one-to-many fashion.
Besides the default English, German and Dutch result translations can be requested by specifying an `Accept-Language: [de|nl]` header.

```ts
async retrieveJobFunctionsCategoriesTaxonomy(
  acceptLanguage?: AcceptLanguageEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<JobFunctionTree[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptLanguage` | [`AcceptLanguageEnum \| undefined`](../../doc/models/accept-language-enum.md) | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JobFunctionTree[]`](../../doc/models/job-function-tree.md)

## Example Usage

```ts
const acceptLanguage = 'en';
try {
  const { result, ...httpResponse } = await taxonomyController.retrieveJobFunctionsCategoriesTaxonomy(acceptLanguage);
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
    "id": 8,
    "name": "Education",
    "children": [
      {
        "id": 5,
        "name": "Teaching",
        "children": []
      }
    ]
  }
]
```


# Search Job Titles

This endpoint takes any text as input and returns a list of supported Job Titles matching the query, ordered by popularity.
Use the `id` key of each object in the response to search for a Product.
Currently, we support 4,000 job titles for each of the following languages: English, Dutch and German.
Each Job Title is associated with a [**`Job Function`**](b3A6MzM0NDA3MzU-job-functions) in a many-to-one fashion.
Besides the default English, German and Dutch result translations can be requested by specifying an `Accept-Language: [de|nl]` header.

```ts
async searchJobTitles(
  text: string,
  limit?: number,
  offset?: number,
  acceptLanguage?: AcceptLanguageEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<JobTitle[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Query, Required | Search text for a job title name |
| `limit` | `number \| undefined` | Query, Optional | Number of results to return per page. |
| `offset` | `number \| undefined` | Query, Optional | The initial index from which to return the results. |
| `acceptLanguage` | [`AcceptLanguageEnum \| undefined`](../../doc/models/accept-language-enum.md) | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JobTitle[]`](../../doc/models/job-title.md)

## Example Usage

```ts
const text = 'text0';
const acceptLanguage = 'en';
try {
  const { result, ...httpResponse } = await taxonomyController.searchJobTitles(text, None, None, acceptLanguage);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Searchfor Locations

This endpoint takes any text as input and returns a list of Locations matching the query, ordered by popularity.
Each response will include the entire world as a Location, even no Locations match the text query.
Use the `id` key of each object in the response to search for a Product.
Supports text input in English, Dutch and German.

```ts
async searchforLocations(
  text: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Location[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string` | Query, Required | Search text for a location name in either English, Dutch, German, French and Italian. Partial recognition of 20 other languages. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Location[]`](../../doc/models/location.md)

## Example Usage

```ts
const text = 'text0';
try {
  const { result, ...httpResponse } = await taxonomyController.searchforLocations(text);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Listall Industries

This endpoint returns a list of supported industry names that can be used to search for products. Results are ordered alphabetically.
Use the `id` key of any Industry in the response to search for a product.
Besides the default English, German and Dutch result translations can be requested by specifying an `Accept-Language: [de|nl]` header.

```ts
async listallIndustries(
  limit?: number,
  offset?: number,
  acceptLanguage?: AcceptLanguageEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Industry[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | Number of results to return per page. |
| `offset` | `number \| undefined` | Query, Optional | The initial index from which to return the results. |
| `acceptLanguage` | [`AcceptLanguageEnum \| undefined`](../../doc/models/accept-language-enum.md) | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Industry[]`](../../doc/models/industry.md)

## Example Usage

```ts
const acceptLanguage = 'en';
try {
  const { result, ...httpResponse } = await taxonomyController.listallIndustries(None, None, acceptLanguage);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retrieve Education Level Taxonomy

Retrieve all Education Level possible values.

```ts
async retrieveEducationLevelTaxonomy(
  requestOptions?: RequestOptions
): Promise<ApiResponse<EducationLevel[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EducationLevel[]`](../../doc/models/education-level.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await taxonomyController.retrieveEducationLevelTaxonomy();
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
    "id": 1,
    "name": [
      {
        "languageCode": "nl_NL",
        "value": "Master / Postdoctoraal"
      }
    ]
  }
]
```


# Retrieve Seniority Taxonomy

Retrieve all Seniority possible values.

```ts
async retrieveSeniorityTaxonomy(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Seniority[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Seniority[]`](../../doc/models/seniority.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await taxonomyController.retrieveSeniorityTaxonomy();
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
    "id": 3,
    "name": [
      {
        "languageCode": "en_GB",
        "value": "Manager"
      }
    ]
  }
]
```

