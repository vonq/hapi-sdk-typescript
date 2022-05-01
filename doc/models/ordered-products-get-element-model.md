
# Ordered Products Get Element Model

## Structure

`OrderedProductsGetElementModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string \| undefined` | Optional | Product Identification |
| `status` | `string \| undefined` | Optional | Status per product |
| `statusDescription` | `string \| undefined` | Optional | Status description, additional status information |
| `deliveredOn` | `string \| undefined` | Optional | Date when the channel went online |
| `duration` | `string \| undefined` | Optional | How long will the `Product` be online. [DEPRECATED] please instead use the `durationPeriod` |
| `durationPeriod` | [`DurationModel \| undefined`](../../doc/models/duration-model.md) | Optional | - |
| `utm` | `string \| undefined` | Optional | Tracking codes |
| `jobBoardLink` | `string \| undefined` | Optional | Link to the job ad on the channel. Sometimes this link is not available from a job board, then the product homepage is returned. |
| `contractId` | `string \| undefined` | Optional | Contract Identifier for My Contracts product |
| `postingRequirements` | [`PostingRequirementsModel \| undefined`](../../doc/models/posting-requirements-model.md) | Optional | - |

## Example (as JSON)

```json
{
  "productId": null,
  "status": null,
  "statusDescription": null,
  "deliveredOn": null,
  "duration": null,
  "durationPeriod": null,
  "utm": null,
  "jobBoardLink": null,
  "contractId": null,
  "postingRequirements": null
}
```

