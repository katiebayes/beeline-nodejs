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

configure.parser = {
  w3c: api.w3c.unmarshalTraceContext,
  aws: api.aws.unmarshalTraceContext
};

configure.propagator = {
  w3c: api.w3c.marshalTraceContext,
};

module.exports = configure;
