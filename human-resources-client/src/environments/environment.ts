export const environment = {
  production: false,
  apiUrl: process.env['API_URL'] || 'http://localhost:5000',
  clientAuthority:
    process.env['CLIENT_AUTHORITY'] ||
    'http://localhost:8080/realms/human-resources',
  clientId: process.env['CLIENT_ID'] || 'human-resources-client',
  clientUrl: process.env['CLIENT_URL'] || 'http://localhost:4200',
};
