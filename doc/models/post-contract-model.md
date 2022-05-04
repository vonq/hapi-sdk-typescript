
# Post Contract Model

## Structure

`PostContractModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `channelId` | `number` | Required | - |
| `credentials` | `unknown` | Required | An object with credentials data |
| `facets` | `unknown \| undefined` | Optional | An object with product parameters |
| `followedInstructions` | `boolean \| undefined` | Optional | When creating contracts for Channels that require the end-user to follow instructions (based on the `manual_setup_required` key in the response body for the [Retrieve details for channel with support for contracts](https://vonq.stoplight.io/docs/hapi/b3A6NTUxMjYwODI-retrieve-details-for-channel-with-support-for-contracts) endpoint), set this value to `true` to confirm the user has done so. For quality purposes, setting this field to `true` for Channels that don't require following instructions will result in a 400 Bad Request. |
| `expiryDate` | `string \| undefined` | Optional | - |
| `credits` | `number \| undefined` | Optional | - |
| `purchasePrice` | [`ContractPurchasePriceModel \| undefined`](../../doc/models/contract-purchase-price-model.md) | Optional | - |

## Example (as JSON)

```json
{
  "channel_id": 0,
  "credentials": null
}
```

