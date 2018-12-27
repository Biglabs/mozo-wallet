import { KeycloakService, KeycloakEvent, KeycloakInitOptions } from 'keycloak-angular';
//import { Plugins } from '@capacitor/core';

//const { Storage } = Plugins;
import { AppService } from './app.service'



import { environment } from '../environments/environment';
import { EventStackService } from './core/services/event-stack.service';

export function initializer(
  keycloak: KeycloakService,
  eventStackService: EventStackService,
  appService: AppService
): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        keycloak.keycloakEvents$.subscribe(event => {
          eventStackService.triggerEvent(event);
        });

        const initKeycloak = async (token, refreshToken) => {
          let initOptions = {
            onLoad: "check-sso",
            checkLoginIframe: false
          } as KeycloakInitOptions

          if(token && refreshToken) {
            initOptions = {...initOptions, token, refreshToken}
          }

          await keycloak.init({
            config: environment.keycloak,
            initOptions: initOptions,
            //enableBearerInterceptor: true
            bearerExcludedUrls: []
          });
          resolve();
        }

        await appService.getSetting(['token', 'refreshToken']).then((data) => {
          if(data) {
            initKeycloak(data["token"], data["refreshToken"])
          } else {
            initKeycloak(null, null)
          }
        }, (error) => {
          initKeycloak(null, null)
        })

      } catch (error) {
        reject(error);
      }
    });
  };
}
