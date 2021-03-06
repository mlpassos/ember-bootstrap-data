/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-bootstrap',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  // ENV['g-map'] = {
  //   exclude: true,
  //   // libraries: ['places'],
  //   key: 'AIzaSyAuTPAIhJmjiN7koIxMKQ3125yKwDzhCoo'
  //   // AIzaSyAcqXF6nzd3bfoM7LvN9Y4NloaHI-leLq0
  //   // AIzaSyAuTPAIhJmjiN7koIxMKQ3125yKwDzhCoo
  //   // http://localhost/landing-remo/
  //   // client: ' 63010766503-84o468ebru1gc3na0e2hrivig5j9lglc.apps.googleusercontent.com',
  //   // version: '3.26',
  //   // language: 'en',
  //   // protocol: 'http'
  // };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
    'font-src': "'self' fonts.gstatic.com",
    'connect-src': "'self' maps.gstatic.com",
    'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
    'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
  };

  ENV.googleMap = {
    apiKey: 'AIzaSyAcqXF6nzd3bfoM7LvN9Y4NloaHI-leLq0',
    libraries: ['places','drawing', 'visualization']
  };

  ENV.cordova = {
  // Rebuild the cordova project on file changes. Blocks the server until it's
  // finished.
  //
  // default: false
  rebuildOnChange: true,

  // Run the cordova emulate command after the build is finished
  //
  // default: false
  emulate: true,

  // Which emulated target to deploy to
  //
  // default: <system default>
  emulateTarget: {
    ios: "iPad-2",
    android: "android-23"
  },

  // Which platform to build and/or emulate
  //
  // default: 'ios'
  platform: 'android',

  // Which URL the ember server is running on. This is used when using
  // live-reload that comes with the starter kit.
  //
  // default: 'the-device-ip:4200'
  emberUrl: 'http://192.168.0.18:4200',

  // Whether or not to use liveReload on the device simulator. Requires a few
  // plugins to be installed that come with the starter-kit. It will cause your
  // app to not boot up in the browser
  //
  // default: false and iOS
  liveReload: {
    enabled: false,
    platform: 'android'
  }
};

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
