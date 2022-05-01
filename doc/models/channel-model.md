
# Channel Model

## Structure

`ChannelModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of a channel |
| `url` | `string \| undefined` | Optional | The url of a channel |
| `type` | [`ChannelTypeEnum \| undefined`](../../doc/models/channel-type-enum.md) | Optional | The type of a channel |
| `mcEnabled` | `boolean \| undefined` | Optional | Does a channel support My Contracts |
| `contractCredentials` | [`ContractCredentialModel[] \| undefined`](../../doc/models/contract-credential-model.md) | Optional | - |
| `contractFacets` | [`FacetModel[] \| undefined`](../../doc/models/facet-model.md) | Optional | - |
| `postingRequirements` | [`FacetModel[] \| undefined`](../../doc/models/facet-model.md) | Optional | Dynamic posting requirements for MC products, used to provide additional data with vacancies |

## Example (as JSON)

```json
{
  "name": null,
  "url": null,
  "type": null,
  "mc_enabled": null,
  "contract_credentials": null,
  "contract_facets": null,
  "posting_requirements": null
}
```

