/* eslint-env node */
const api = require("./api"),
  instrumentation = require("./instrumentation");

function configure(opts = {}) {
  api.configure(opts);
  instrumentation.configure(opts);

  return configure;
}

// copy the api as properties on the configure function
Object.keys(api).forEach(k => {
  if (k === "configure") {
    // skip this one, though
    return;
  }
  configure[k] = api[k];
});

configure.getInstrumentations = instrumentation.getInstrumentations;

configure.httpTraceParserHook = {
  w3c: api.w3c.httpTraceParserHook,
  aws: api.aws.httpTraceParserHook,
};

configure.httpTracePropagationHook = {
  w3c: api.w3c.httpTracePropagationHook,
  aws: api.aws.httpTracePropagationHook,
};

module.exports = configure;
