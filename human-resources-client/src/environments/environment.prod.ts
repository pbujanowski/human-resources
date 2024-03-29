export const environment = {
  production: true,
  apiUrl: process.env['API_URL'] || 'http://localhost:5000',
  clientAuthority:
    process.env['CLIENT_AUTHORITY'] ||
    'http://localhost:8080/realms/human-resources',
  clientId: process.env['CLIENT_ID'] || 'human-resources-client',
};
