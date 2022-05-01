
# Create Contract Response Model

## Structure

`CreateContractResponseModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string` | Required | - |
| `contractId` | `string` | Required | - |
| `channelId` | `number` | Required | - |
| `credentials` | `string` | Required | - |
| `className` | `string` | Required | - |
| `facets` | `unknown` | Required | - |
| `product` | [`ProductLiteModel`](../../doc/models/product-lite-model.md) | Required | - |
| `postingRequirements` | `string` | Required | - |
| `expiryDate` | `string \| undefined` | Optional | - |
| `credits` | `number \| undefined` | Optional | - |
| `purchasePrice` | [`PurchasePriceModel \| undefined`](../../doc/models/purchase-price-model.md) | Optional | - |

## Example (as JSON)

```json
{
  "customer_id": "76e124d4-ae69-4753-bede-259d505258b7",
  "contract_id": "3a283b8f-1670-404b-b804-92f67e66b71c",
  "channel_id": 13,
  "credentials": "",
  "class_name": "",
  "facets": {},
  "product": {
    "product_id": "2e8c3c17-179b-4db1-9e2b-d48369b5e409",
    "title": "product title"
  },
  "posting_requirements": ""
}
```

