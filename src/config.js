export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-uploads"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://5by75p4gn3.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_udmFFSb92",
    APP_CLIENT_ID: "4hmari2sqvskrup67crkqa4rmo",
    IDENTITY_POOL_ID: "ap-southeast-2:ceef8ccc-0a19-4616-9067-854dc69c2d82"
  }
};
