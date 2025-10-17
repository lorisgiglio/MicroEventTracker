// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    "apiKey": "LA_TUA_API_KEY",
    "authDomain": "micro-event-tracker.firebaseapp.com",
    "databaseURL": "https://micro-event-tracker.firebaseio.com",
    "projectId": "micro-event-tracker",
    "storageBucket": "micro-event-tracker.firebasestorage.app",
    "messagingSenderId": "122262016053",
    "appId": "IL_TUO_APP_ID_WEB",
    "measurementId": "G-IL_TUO_MEASUREMENT_ID_GA4"
  }
};
/*
LA_TUA_API_KEY : Questa è la chiave API del tuo progetto. La trovi nella console Firebase, andando in Impostazioni progetto (l'icona a forma di ingranaggio) -> Impostazioni generali . Si trova sotto la sezione "Le tue app" per la tua app web registrata.
IL_TUO_APP_ID_WEB : Questo è l'ID specifico della tua app web. Lo trovi anche nella console Firebase, sotto Impostazioni progetto -> Impostazioni generali , nella sezione "Le tue app", cliccando sulla tua app web registrata.
G-IL_TUO_MEASUREMENT_ID_GA4 : Se hai abilitato Google Analytics 4, questo è il tuo ID di misurazione. Lo trovi nella console Firebase, andando in Impostazioni progetto -> Integrazioni -> Google Analytics , oppure direttamente nella console di Google Analytics 4 (inizia con G- ). Se non hai ancora configurato GA4, potresti non averlo o potresti doverlo ottenere dopo aver abilitato Analytics per la tua app web.
*/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
