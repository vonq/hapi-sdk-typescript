
# Ordered Products Post Element

## Structure

`OrderedProductsPostElement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `string \| undefined` | Optional | Product Identification |
| `utm` | `string \| undefined` | Optional | Query string for UTM parameters<br><br>**Pattern:** `/^([%.-_!*a-zA-Z0-9]{1,}=[%.-_!*+,;$()a-zA-Z0-9]{1,}[&]{0,}){1,}$/` |
| `contractId` | `string \| undefined` | Optional | Contract Identifier needed for My Contracts product |
| `postingRequirements` | [`PostingRequirements \| undefined`](../../doc/models/posting-requirements.md) | Optional | - |

## Example (as JSON)

```json
{
  "productId": null,
  "utm": null,
  "contractId": null,
  "postingRequirements": null
}
```

