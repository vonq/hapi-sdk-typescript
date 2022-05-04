
# Product Model

## Structure

`ProductModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | - |
| `locations` | [`LocationModel[]`](../../doc/models/location-model.md) | Required | **Constraints**: *Unique Items Required* |
| `jobFunctions` | [`JobFunctionModel[]`](../../doc/models/job-function-model.md) | Required | **Constraints**: *Unique Items Required* |
| `industries` | [`IndustryModel[]`](../../doc/models/industry-model.md) | Required | **Constraints**: *Unique Items Required* |
| `description` | `string \| null` | Required | - |
| `homepage` | `string \| null` | Required | - |
| `logoUrl` | `string \| null` | Required | - |
| `logoSquareUrl` | `string \| null` | Required | - |
| `logoRectangleUrl` | `string \| null` | Required | - |
| `duration` | `unknown \| null` | Required | - |
| `timeToProcess` | [`TimeToProcessModel`](../../doc/models/time-to-process-model.md) | Required | - |
| `timeToSetup` | [`TimeToSetupModel`](../../doc/models/time-to-setup-model.md) | Required | - |
| `productId` | `string` | Required | - |
| `vonqPrice` | [`PriceModel[]`](../../doc/models/price-model.md) | Required | the price to be displayed to customers |
| `ratecardPrice` | [`PriceModel[]`](../../doc/models/price-model.md) | Required | - |
| `type` | [`ChannelTypeEnum`](../../doc/models/channel-type-enum.md) | Required | The type of a channel |
| `crossPostings` | `string[]` | Required | - |
| `channel` | [`ChannelModel`](../../doc/models/channel-model.md) | Required | - |
| `audienceGroup` | [`AudienceGroupEnum`](../../doc/models/audience-group-enum.md) | Required | The product's audience group (niche/generic) |
| `mcEnabled` | `boolean` | Required | is My Contract enabled for the channel |
| `mcOnly` | `boolean` | Required | is the product available only for My Contract order |
| `allowOrders` | `boolean` | Required | is the product available for order. a campaign cannot be ordered with a product having `allow_orders` set to `false`. |

## Example (as JSON)

```json
{
  "title": null,
  "locations": {
    "id": null,
    "fully_qualified_place_name": null,
    "canonical_name": null,
    "bounding_box": null,
    "area": null,
    "place_type": "place",
    "within": {
      "id": null,
      "fully_qualified_place_name": null,
      "canonical_name": null,
      "bounding_box": null,
      "area": null,
      "place_type": "place",
      "within": null
    }
  },
  "job_functions": null,
  "industries": null,
  "description": "this is a product description",
  "homepage": null,
  "logo_url": null,
  "logo_square_url": null,
  "logo_rectangle_url": null,
  "duration": null,
  "time_to_process": null,
  "time_to_setup": null,
  "product_id": null,
  "vonq_price": null,
  "ratecard_price": null,
  "type": "job board",
  "cross_postings": null,
  "channel": {
    "name": "Linkedin",
    "url": "www.linkedin.com",
    "type": "job board",
    "mc_enabled": false,
    "contract_credentials": null,
    "contract_facets": null,
    "posting_requirements": {
      "name": null,
      "label": null,
      "sort": null,
      "required": null,
      "type": "AUTOCOMPLETE",
      "options": null,
      "autocomplete": null
    },
    "manual_setup_required": null,
    "setup_instructions": null,
    "feed_url": null
  },
  "audience_group": null,
  "mc_enabled": null,
  "mc_only": null,
  "allow_orders": null
}
```

