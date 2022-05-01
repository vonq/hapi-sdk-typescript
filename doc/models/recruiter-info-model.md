
# Recruiter Info Model

Recruiter is the person using the ATS to create the Campaign and it's generally part of the Company whose Id
we request first.

## Structure

`RecruiterInfoModel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | A vendor-related unique identification for the Recruiter |
| `name` | `string` | Required | - |
| `emailAddress` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "John Doe"
}
```

