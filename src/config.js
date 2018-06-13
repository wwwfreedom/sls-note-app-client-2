const dev = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1ud39z516qqtp"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://avksfutcy4.execute-api.ap-southeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_kdgfdFm1Z",
    APP_CLIENT_ID: "ibbjk6g31b4uu35v1ncfv0rd",
    IDENTITY_POOL_ID: "ap-southeast-2:ce30a4a8-e04d-4281-ba40-632ad11dd87f"
  }
};

const prod = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-hws305ofajfu"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://gsvoo5yid6.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_Bqmj1cNJe",
    APP_CLIENT_ID: "2dmh7al69fg1c77ijm85s2c0d1",
    IDENTITY_POOL_ID: "ap-southeast-2:4a900ed6-99db-443c-88f6-3742060d8eb2"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};