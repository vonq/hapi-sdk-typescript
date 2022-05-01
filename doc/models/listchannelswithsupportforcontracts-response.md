
# Listchannelswithsupportforcontracts Response

## Structure

`ListchannelswithsupportforcontractsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number` | Required | - |
| `next` | `string` | Required | - |
| `previous` | `string` | Required | - |
| `results` | [`ChannelWithProducts[]`](../../doc/models/channel-with-products.md) | Required | - |

## Example (as JSON)

```json
{
  "count": 60,
  "next": "next2",
  "previous": "previous8",
  "results": [
    {
      "mc_enabled": true,
      "id": null,
      "name": null,
      "url": null,
      "type": null
    }
  ]
}
```

