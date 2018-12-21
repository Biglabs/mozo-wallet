// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'https://dev.keycloak.mozocoin.io/auth',
  realm: 'mozo',
  clientId: 'native_app',
};

export const environment = {
  production: false,
  apis: { 
    solomon: 'https://dev.gateway.mozocoin.io/solomon/api/app',
    store: 'https://dev.gateway.mozocoin.io/store/api/app',
    notification: 'ws://18.136.38.11:8089/websocket'
  },
  keycloak: keycloakConfig
};
