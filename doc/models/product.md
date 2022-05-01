
# Product

## Structure

`Product`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string \| undefined` | Optional | - |
| `locations` | [`Location[] \| undefined`](../../doc/models/location.md) | Optional | - |
| `jobFunctions` | [`JobFunction[] \| undefined`](../../doc/models/job-function.md) | Optional | - |
| `industries` | [`Industry[] \| undefined`](../../doc/models/industry.md) | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `homepage` | `string \| undefined` | Optional | - |
| `logoUrl` | `string \| undefined` | Optional | - |
| `logoSquareUrl` | `string \| undefined` | Optional | - |
| `logoRectangleUrl` | `string \| undefined` | Optional | - |
| `duration` | `string \| undefined` | Optional | - |
| `timeToProcess` | [`TimeToProcess \| undefined`](../../doc/models/time-to-process.md) | Optional | - |
| `timeToSetup` | [`TimeToSetup \| undefined`](../../doc/models/time-to-setup.md) | Optional | - |
| `productId` | `string \| undefined` | Optional | - |
| `vonqPrice` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | the price to be displayed to customers |
| `ratecardPrice` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | - |
| `type` | `string \| undefined` | Optional | - |
| `crossPostings` | `string[] \| undefined` | Optional | - |
| `channel` | [`Channel \| undefined`](../../doc/models/channel.md) | Optional | - |
| `audienceGroup` | `string \| undefined` | Optional | The product's audience group (niche/generic) |
| `mcEnabled` | `boolean \| undefined` | Optional | is My Contract enabled for the channel |
| `mcOnly` | `boolean \| undefined` | Optional | is the product available only for My Contract order |
| `allowOrders` | `boolean \| undefined` | Optional | is the product available for order. a campaign cannot be ordered with a product having `allow_orders` set to `false`. |

## Example (as JSON)

```json
{
  "title": null,
  "locations": null,
  "job_functions": null,
  "industries": null,
  "description": null,
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
  "type": null,
  "cross_postings": null,
  "channel": null,
  "audience_group": null,
  "mc_enabled": null,
  "mc_only": null,
  "allow_orders": null
}
```

