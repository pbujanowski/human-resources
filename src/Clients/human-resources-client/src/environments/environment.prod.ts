export const environment = {
  production: true,
  apiUrl: process.env['API_URL'] || 'http://localhost:5213',
  authority:
    process.env['AUTHORITY'] || 'http://localhost:8080/realms/human-resources',
  clientId: process.env['CLIENT_ID'] || 'human-resources-client',
  scope: process.env['SCOPE'] || 'openid profile',
};
