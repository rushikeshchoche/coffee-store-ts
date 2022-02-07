export const isProduction = process.env.NODE_ENV === "production";

const ENV = {
  develop: {
    apiBaseUrl: "http://localhost:4000/store",
  },
  production: {
    apiBaseUrl: "dummyProdUrl",
  },
};

export const getEnvironment = isProduction ? ENV.production : ENV.develop;
