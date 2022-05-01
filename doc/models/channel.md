
# Channel

## Structure

`Channel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of a channel |
| `url` | `string \| undefined` | Optional | The url of a channel |
| `type` | [`ChannelTypeEnum \| undefined`](../../doc/models/channel-type-enum.md) | Optional | The type of a channel |
| `mcEnabled` | `boolean \| undefined` | Optional | Does a channel support My Contracts |
| `contractCredentials` | [`ContractCredential[] \| undefined`](../../doc/models/contract-credential.md) | Optional | - |
| `contractFacets` | [`Facet[] \| undefined`](../../doc/models/facet.md) | Optional | - |
| `postingRequirements` | [`Facet[] \| undefined`](../../doc/models/facet.md) | Optional | Dynamic posting requirements for MC products, used to provide additional data with vacancies |

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

