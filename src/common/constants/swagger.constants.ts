export const SWAGGER = {
  TITLE: 'Auth API',
  DESCRIPTION: 'JWT Auth APIs',
  PATH: 'api-docs',
  BEARER_AUTH_NAME: 'Bearer auth', // 可自定义的 Bearer 认证名称
  BEARER_AUTH_OPTIONS: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  },
  VERSION: '1.0.0',
};
