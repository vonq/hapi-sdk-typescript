
# Take Campaign Offline Error Response 2 Error

## Structure

`TakeCampaignOfflineErrorResponse2Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignId` | `string[]` | Required | - |
| `status` | `string[]` | Required | - |

## Example (as JSON)

```json
{
  "campaignId": [
    "The campaignId in the request body should match the campaignId in the request URL."
  ],
  "status": [
    "This value should not be blank.",
    "This value should be equal to \"offline\""
  ]
}
```

