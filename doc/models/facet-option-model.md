
# Facet Option Model

## Structure

`FacetOptionModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mDefault` | `string` | Required | - |
| `key` | `string` | Required | - |
| `label` | `string` | Required | - |
| `sort` | `string` | Required | - |
| `show` | [`FacetOptionShowFacetsModel[] \| undefined`](../../doc/models/facet-option-show-facets-model.md) | Optional | References to Facets that becomes required when this option is selected |

## Example (as JSON)

```json
{
  "default": "default0",
  "key": "key0",
  "label": "label0",
  "sort": "sort8",
  "show": null
}
```

