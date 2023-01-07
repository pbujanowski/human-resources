const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;
const apiUrl = argv.apiUrl || process.env['API_URL'];
const clientAuthority = argv.clientAuthority || process.env['CLIENT_AUTHORITY'];
const clientId = argv.clientId || process.env['CLIENT_ID'];
const isProduction = environment === 'production';
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

const environmentFileContent = `export const environment = {
  production: ${isProduction},
  apiUrl: '${apiUrl}',
  clientAuthority: '${clientAuthority}',
  clientId: '${clientId}',
};
`;

writeFile(targetPath, environmentFileContent, function (err: Error) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
