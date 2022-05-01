
# Posting Details Errors

## Structure

`PostingDetailsErrors`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string[]` | Required | - |
| `description` | `string[]` | Required | - |
| `yearsOfExperience` | `string[]` | Required | - |
| `employmentType` | `string[]` | Required | - |
| `organization` | [`Organization`](../../doc/models/organization.md) | Required | - |
| `workingLocation` | [`WorkingLocation`](../../doc/models/working-location.md) | Required | - |
| `weeklyWorkingHours` | [`WeeklyWorkingHours`](../../doc/models/weekly-working-hours.md) | Required | - |
| `salaryIndication` | [`SalaryIndication`](../../doc/models/salary-indication.md) | Required | - |
| `jobPageUrl` | `string[]` | Required | - |
| `applicationUrl` | `string[]` | Required | - |

## Example (as JSON)

```json
{
  "title": [
    "A Title of the Posting is required"
  ],
  "description": [
    "A Description of the Posting is required"
  ],
  "yearsOfExperience": [
    "This value should not be blank."
  ],
  "employmentType": [
    "A Posting needs a type of employment"
  ],
  "organization": {
    "name": [
      "This value should not be blank."
    ],
    "companyLogo": [
      "This value should not be blank."
    ]
  },
  "workingLocation": {
    "addressLine1": [
      "This value should not be blank."
    ],
    "postcode": [
      "This value should not be blank."
    ],
    "city": [
      "This value should not be blank."
    ],
    "country": [
      "This value should not be blank."
    ]
  },
  "weeklyWorkingHours": {
    "to": [
      "This value should not be blank."
    ]
  },
  "salaryIndication": {
    "period": [
      "A SalaryIndication needs a period"
    ],
    "range": {
      "to": [
        "This value should not be blank."
      ]
    }
  },
  "jobPageUrl": [
    "This value should not be blank."
  ],
  "applicationUrl": [
    "This value should not be blank."
  ]
}
```

