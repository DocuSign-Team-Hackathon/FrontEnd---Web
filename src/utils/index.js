const replaceSpacesWithPluses = (s) => s.split(" ").join("+");

export const getPowerFormUrl = (formData) => {
  const URL_START = 'https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=cc332d81-dd07-4f59-8938-8e6e42623cd0&env=demo&acct=70effc48-d52c-4e4d-adb8-828bf793ebca&v=2&';

  const queryParams = Object.entries(formData)
    .map(([key, value]) => {
      return key + '=' + replaceSpacesWithPluses(value);
  });
  console.log(queryParams);

  const joinedQueryParams = queryParams.join('&');
  console.log(joinedQueryParams);

  const entireURL = URL_START + joinedQueryParams;
  console.log(entireURL);

  return entireURL;
}