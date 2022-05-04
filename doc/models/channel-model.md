
# Channel Model

## Structure

`ChannelModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of a channel |
| `url` | `string` | Required | The url of a channel |
| `type` | [`ChannelTypeEnum`](../../doc/models/channel-type-enum.md) | Required | The type of a channel |
| `mcEnabled` | `boolean` | Required | Does a channel support My Contracts |
| `contractCredentials` | [`ContractCredentialModel[]`](../../doc/models/contract-credential-model.md) | Required | - |
| `contractFacets` | `unknown[]` | Required | - |
| `postingRequirements` | [`FacetModel[]`](../../doc/models/facet-model.md) | Required | Dynamic posting requirements for MC products, used to provide additional data with vacancies |
| `manualSetupRequired` | `boolean` | Required | Some Channels require manual setup done by the end-user. In most such cases, `setup_instructions` should contain HTML |
| `setupInstructions` | `string \| null` | Required | Additional setup instructions required to post on the Channel |
| `feedUrl` | `string \| null` | Required | Some channels like apec.fr require the user to send the job board an XML url. If not null, this value should be displayed to the user, along with the `setup_instructions` |

## Example (as JSON)

```json
{
  "name": "Linkedin",
  "url": "www.linkedin.com",
  "type": "job board",
  "mc_enabled": false,
  "contract_credentials": null,
  "contract_facets": null,
  "posting_requirements": {
    "name": null,
    "label": null,
    "sort": null,
    "required": null,
    "type": "AUTOCOMPLETE",
    "options": null,
    "autocomplete": null
  },
  "manual_setup_required": null,
  "setup_instructions": null,
  "feed_url": null
}
```

