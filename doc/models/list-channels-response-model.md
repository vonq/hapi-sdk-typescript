
# List Channels Response Model

## Structure

`ListChannelsResponseModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number` | Required | - |
| `next` | `string \| null` | Required | - |
| `previous` | `string \| null` | Required | - |
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
      "id": 29,
      "name": "name3",
      "url": "url7",
      "type": "type7"
    }
  ]
}
```

