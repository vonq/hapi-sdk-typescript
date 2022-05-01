
# Salary Indication

## Structure

`SalaryIndication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `period` | `string[]` | Required | - |
| `range` | [`Range4`](../../doc/models/range-4.md) | Required | - |

## Example (as JSON)

```json
{
  "period": [
    "A SalaryIndication needs a period"
  ],
  "range": {
    "to": [
      "This value should not be blank."
    ]
  }
}
```

