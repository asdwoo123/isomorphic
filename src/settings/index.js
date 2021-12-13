export default {
  apiUrl: 'http://yoursite.com/api/'
};

const siteConfig = {
  siteName: 'SEOJUNAPP',
  siteIcon: 'ion-flash',
  footerText: '© Copyright 2019 Seojun eng - All Rights Reserved'
};

const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault'
};

const language = 'english';
const AlgoliaSearchConfig = {
  appId: 'OHUW1MZIT5',
  apiKey: 'e26465d7c76afdc0b84623a9bf48ff34'
};

const Auth0Config = {
  domain: '',
  clientID: '',
  allowedConnections: ['Username-Password-Authentication'],
  rememberLastLogin: true,
  language: 'en',
  closable: true,
  options: {
    auth: {
      autoParseHash: true,
      redirect: true,
      redirectUrl: 'http://localhost:3000/auth0loginCallback'
    },
    languageDictionary: {
      title: 'SEOJUNAPP',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo'
    },
    theme: {
      labeledSubmitButton: true,
      logo: '',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000'
        }
      }
    }
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyA_GIhk0zzxKoqPtR0NNigs1RhNNb2pnX0",
  authDomain: "seojun-app.firebaseapp.com",
  databaseURL: "https://seojun-app.firebaseio.com",
  projectId: "seojun-app",
  storageBucket: "seojun-app.appspot.com",
  messagingSenderId: "135183173747",
  appId: "1:135183173747:web:fd1fb3ed686f90a6"
};

const googleConfig = {
  apiKey: '' //
};

const mapboxConfig = {
  tileLayer: '',
  maxZoom: '',
  defaultZoom: '',
  center: []
};

const youtubeSearchApi = 'AIzaSyA0bIvbpw18whPv4eqkoZwBa02ANKWOzaY';
export {
  siteConfig,
  themeConfig,
  language,
  AlgoliaSearchConfig,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi
};
