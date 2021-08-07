const url = 'https://demo.docusign.net/restapi/v2.1/accounts/70effc48-d52c-4e4d-adb8-828bf793ebca/envelopes';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const exampleReqBody = {
  "status": "Sent",
  "templateId": "ba859400-f6e5-4518-93a9-85cd76d4753b",
  "emailSubject": "This is an email subject",
  "templateRoles": [{
      "email": "example@email.com",
      "name": "John Smith",
      "roleName": "Applicant",
      "tabs": {
        "textTabs": [
          {
            "tabLabel": "address",
            "value": "123 Fake Street",
            "locked": true
          },
          {
              "tabLabel": "d_3_2",
              "value": "This is the second line of question 3.",
              "locked": true
          }
        ]
      }
  }]
}

export async function postData(data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'x-access-token': `Bearer ${ACCESS_TOKEN}`
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData(exampleReqBody)
  .then(data => {
    console.log(data);
});
