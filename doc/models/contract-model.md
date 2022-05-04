
# Contract Model

## Structure

`ContractModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contractId` | `string` | Required | The identifier of the Contract. To be used when creating a Campaign |
| `customerId` | `string` | Required | The customer_id this contract belongs to. Based on the original `X-Customer-Id` header used when the contract was created. |
| `channelId` | `number` | Required | The Channel (job board) the contract is to be used for |
| `credentials` | `unknown` | Required | AES Encrypted credentials |
| `className` | `string` | Required | Channel slug |
| `facets` | `unknown` | Required | An object with contract parameters |
| `product` | [`ContractProductModel`](../../doc/models/contract-product-model.md) | Required | The Product to be used in combination with the Contract when ordering a Campaign. |
| `postingRequirements` | [`FacetModel[]`](../../doc/models/facet-model.md) | Required | A list of the Contract Channel's Facets |
| `expiryDate` | `string \| null` | Required | - |
| `credits` | `number \| null` | Required | - |
| `purchasePrice` | [`ContractPurchasePriceModel \| undefined`](../../doc/models/contract-purchase-price-model.md) | Optional | - |

## Example (as JSON)

```json
{
  "contract_id": "06a8f6f0-5e0e-4614-869e-ab95a8530633",
  "customer_id": "c0cbefa5-6f04-4dbc-8208-5963bc433166",
  "channel_id": 0,
  "credentials": null,
  "class_name": null,
  "facets": null,
  "product": null,
  "posting_requirements": {
    "name": null,
    "label": null,
    "sort": null,
    "required": null,
    "type": "AUTOCOMPLETE",
    "options": null,
    "autocomplete": null
  },
  "expiry_date": "02/15/2022 12:03:45",
  "credits": 0
}
```

