
# List Channels Response Model

## Structure

`ListChannelsResponseModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number` | Required | - |
| `next` | `string` | Required | - |
| `previous` | `string` | Required | - |
| `results` | [`ChannelLiteModel[]`](../../doc/models/channel-lite-model.md) | Required | - |

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

