const dev = {
  STRIPE_KEY: "pk_test_301RUbtEgrdQpL4jk2RjLUZ600xzKlFMwb",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1j1w4gr136j55"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api-note.billing-gateway.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_gi2wVa03u",
    APP_CLIENT_ID: "53fmpcrocu1cgvm0i91iimmqkm",
    IDENTITY_POOL_ID: "us-east-1:c821ba13-50f0-4f31-8cc3-2b2fb57bf1b8"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_301RUbtEgrdQpL4jk2RjLUZ600xzKlFMwb",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1027rho0ltmzz"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api-note.billing-gateway.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_NI95JQJre",
    APP_CLIENT_ID: "4c2308fegir6te7fub6mldvgm2",
    IDENTITY_POOL_ID: "us-east-1:ae47376a-72f4-4ec1-9f71-630e4ca42ec2"
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
