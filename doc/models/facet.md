
# Facet

## Structure

`Facet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `label` | `string` | Required | - |
| `sort` | `string` | Required | - |
| `required` | `boolean` | Required | - |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | - |
| `options` | [`FacetOption[]`](../../doc/models/facet-option.md) | Required | - |
| `rules` | [`FacetRule[] \| undefined`](../../doc/models/facet-rule.md) | Optional | - |
| `autocomplete` | [`Autocomplete \| null`](../../doc/models/autocomplete.md) | Required | - |
| `show` | [`FacetOptionShowFacets[] \| undefined`](../../doc/models/facet-option-show-facets.md) | Optional | - |

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

