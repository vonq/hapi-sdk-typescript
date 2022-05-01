
# Range 3

## Structure

`Range3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | `number \| undefined` | Optional | Minimum salary indication of the indicated period, if given, cannot be greater<br><br>than 'to', but equal to 'to' is allowed. This integer value should be specified in units (not cents). |
| `to` | `number` | Required | Maximum salary indication of the indicated period. This integer value should be specified in units (not cents). |
| `currency` | `string \| undefined` | Optional | The currency in which the range amount is expressed. Must be a valid ISO-4217 value. |

## Example (as JSON)

```json
{
  "to": 60000
}
```

