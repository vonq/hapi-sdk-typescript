
# Facet Option Model

## Structure

`FacetOptionModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mDefault` | `string` | Required | Whether the option should be the default choice when rendering the SELECT. |
| `key` | `string` | Required | The value to be used when setting the value of the facet when this option is selected. |
| `label` | `string` | Required | The option's user-friendly label |
| `sort` | `string` | Required | The order of the option in the list of options. lower value means higher rank. |
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

