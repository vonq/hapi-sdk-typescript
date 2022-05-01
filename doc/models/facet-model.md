
# Facet Model

## Structure

`FacetModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `label` | `string` | Required | - |
| `sort` | `string` | Required | - |
| `required` | `boolean` | Required | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | - |
| `options` | [`FacetOptionModel[]`](../../doc/models/facet-option-model.md) | Required | - |
| `rules` | [`FacetRuleModel[] \| undefined`](../../doc/models/facet-rule-model.md) | Optional | - |
| `autocomplete` | [`AutocompleteModel \| null`](../../doc/models/autocomplete-model.md) | Required | - |
| `show` | [`FacetOptionShowFacetsModel[] \| undefined`](../../doc/models/facet-option-show-facets-model.md) | Optional | - |

## Example (as JSON)

```json
{
  "name": null,
  "label": null,
  "sort": null,
  "required": null,
  "type": "AUTOCOMPLETE",
  "options": null,
  "autocomplete": null
}
```

