
# Contract Model

## Structure

`ContractModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contractId` | `string \| undefined` | Optional | - |
| `customerId` | `string \| undefined` | Optional | - |
| `channelId` | `number \| undefined` | Optional | - |
| `credentials` | `string \| undefined` | Optional | - |
| `className` | `string \| undefined` | Optional | - |
| `facets` | `unknown \| undefined` | Optional | An object with product parameters |
| `product` | [`ContractProductModel \| undefined`](../../doc/models/contract-product-model.md) | Optional | - |
| `postingRequirements` | `string \| undefined` | Optional | - |
| `expiryDate` | `string \| undefined` | Optional | - |
| `credits` | `number \| undefined` | Optional | - |
| `purchasePrice` | [`ContractPurchasePriceModel \| undefined`](../../doc/models/contract-purchase-price-model.md) | Optional | - |

## Example (as JSON)

```json
{
  "contract_id": null,
  "customer_id": null,
  "channel_id": null,
  "credentials": null,
  "class_name": null,
  "facets": null,
  "product": null,
  "posting_requirements": null,
  "expiry_date": null,
  "credits": null,
  "purchase_price": null
}
```

