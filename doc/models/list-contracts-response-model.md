
# List Contracts Response Model

## Structure

`ListContractsResponseModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `count` | `number \| undefined` | Optional | count of elements in results |
| `previous` | `string \| undefined` | Optional | link to get previous results |
| `next` | `string \| undefined` | Optional | link to get next results |
| `results` | [`ContractModel[] \| undefined`](../../doc/models/contract-model.md) | Optional | - |

## Example (as JSON)

```json
{
  "count": null,
  "previous": null,
  "next": null,
  "results": null
}
```

