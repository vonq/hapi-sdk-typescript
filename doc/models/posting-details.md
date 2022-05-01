
# Posting Details

## Structure

`PostingDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | The title of the posting across the different Channels where the posting is going to be published. |
| `description` | `string` | Required | Full description of the job posting, including all possible sections<br><br>**Allowed tags:** `a[href\|target], em, b, br, strong, i, li, ol, p, ul` |
| `organization` | [`PostingOrganization`](../../doc/models/posting-organization.md) | Required | - |
| `workingLocation` | [`PostingWorkingLocation`](../../doc/models/posting-working-location.md) | Required | - |
| `contactInfo` | [`PostingContactInfo \| undefined`](../../doc/models/posting-contact-info.md) | Optional | - |
| `yearsOfExperience` | `number` | Required | Numbers of years of experience required for this position |
| `employmentType` | [`EmploymentTypeEnum`](../../doc/models/employment-type-enum.md) | Required | The type of employment of the posting, whether it's a permanent position or a fixed time position |
| `weeklyWorkingHours` | [`PostingWeeklyWorkingHours`](../../doc/models/posting-weekly-working-hours.md) | Required | - |
| `salaryIndication` | [`PostingSalaryIndication`](../../doc/models/posting-salary-indication.md) | Required | - |
| `jobPageUrl` | `string` | Required | Link to the page with the description of the job |
| `applicationUrl` | `string` | Required | Link to the page where the candidate needs to be directed when applying for a position |

## Example (as JSON)

```json
{
  "title": "Come work for us, we're looking for amazing Software Developers",
  "description": "Are you a LEADER and a BUILDER?  Global is looking for individuals who are dynamic, sales-oriented, and who want to control their destiny.  With a full training programme and consistent support, Global will provide you with the tools to excel in this very lucrative business.",
  "organization": {
    "name": "Vonq",
    "companyLogo": "http://static.ats.com/public/vonq-company-logo.png"
  },
  "workingLocation": {
    "addressLine1": "Westblaak 175",
    "postcode": "3012 KJ",
    "city": "Rotterdam",
    "country": "The Netherlands"
  },
  "yearsOfExperience": 5,
  "employmentType": "permanent",
  "weeklyWorkingHours": {
    "to": 40
  },
  "salaryIndication": {
    "period": "yearly",
    "range": {
      "to": 60000
    }
  },
  "jobPageUrl": "http://amadeus-hospitality-it-careers.com/vacancy/software-development-manager-breda",
  "applicationUrl": "http://amadeus-hospitality-it-careers.com/vacancy/software-development-manager-breda/apply"
}
```

