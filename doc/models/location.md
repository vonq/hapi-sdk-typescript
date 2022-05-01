
# Location

Location(id, canonical_name, desq_name_en, desq_country_code, country_code, mapbox_id, mapbox_text, mapbox_placename, mapbox_context, mapbox_place_type, mapbox_shortcode, mapbox_within)

## Structure

`Location`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `fullyQualifiedPlaceName` | `string` | Required | - |
| `canonicalName` | `string` | Required | - |
| `boundingBox` | `number[]` | Required | - |
| `area` | `number` | Required | - |
| `placeType` | [`PlaceTypeEnum`](../../doc/models/place-type-enum.md) | Required | - |
| `within` | [`Location`](../../doc/models/location.md) | Required | - |

## Example (as JSON)

```json
{
  "id": null,
  "fully_qualified_place_name": null,
  "canonical_name": null,
  "bounding_box": null,
  "area": null,
  "place_type": "place",
  "within": {
    "id": null,
    "fully_qualified_place_name": null,
    "canonical_name": null,
    "bounding_box": null,
    "area": null,
    "place_type": "place",
    "within": null
  }
}
```

