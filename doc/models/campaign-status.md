
# Campaign Status

## Structure

`CampaignStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `string` | Required | - |
| `status` | [`StatusEnum \| undefined`](../../doc/models/status-enum.md) | Optional | Status of the campaign. One of the following |
| `orderedProductsStatuses` | [`OrderedProductsStatusItem[] \| undefined`](../../doc/models/ordered-products-status-item.md) | Optional | - |

## Example (as JSON)

```json
{
  "campaignId": "dd1c5be0-b0e1-41c8-ba92-e876da16c38b"
}
```

