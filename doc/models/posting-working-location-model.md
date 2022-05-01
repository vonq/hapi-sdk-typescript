
# Posting Working Location Model

## Structure

`PostingWorkingLocationModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine1` | `string` | Required | - |
| `addressLine2` | `string \| undefined` | Optional | - |
| `postcode` | `string` | Required | - |
| `city` | `string` | Required | - |
| `country` | `string` | Required | - |
| `allowsRemoteWork` | `number \| undefined` | Optional | Optional parameter allowing remote work, possible values are 0 and 1, defaults to 0 |

## Example (as JSON)

```json
{
  "addressLine1": "Westblaak 175",
  "postcode": "3012 KJ",
  "city": "Rotterdam",
  "country": "The Netherlands"
}
```

