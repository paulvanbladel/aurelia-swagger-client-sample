import 'fetch';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('paulvanbladel/aurelia-swagger-client');

  aurelia.start().then(a => a.setRoot());
}
