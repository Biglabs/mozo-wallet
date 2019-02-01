
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