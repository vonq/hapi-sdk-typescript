
# List Channels Response

## Structure

`ListChannelsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number` | Required | - |
| `next` | `string` | Required | - |
| `previous` | `string` | Required | - |
| `results` | [`ChannelLite[]`](../../doc/models/channel-lite.md) | Required | - |

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

