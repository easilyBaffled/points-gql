require('dotenv').config();

const fs = require('fs');
const gradient = require('gradient-string');
const path = require('path');
const ProgressBar = require('progress');
const { fetch } = require('cross-undici-fetch');
const axios = require('axios');

const {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} = require('graphql');

const supagradient = gradient(['#00CB8A', '#78E0B8']);

function fetchGraphQLSchema(url, options) {
  options = options || {}; // eslint-disable-line no-param-reassign

  const bar = new ProgressBar('🔦  Introspecting schema [:bar]', 24);

  const id = setInterval(function () {
    bar.tick();
    if (bar.complete) {
      clearInterval(id);
    }
  }, 250);

  return (
    axios
      .post(
        url,
        {
          query: getIntrospectionQuery(),
        },
        {
          headers: {
            apiKey: process.env.SUPABASE_ANON_KEY,
          },
        }
      )
      // .then((res) => res.json())
      .then((schemaJSON) => {
        if (options.readable) {
          return printSchema(buildClientSchema(schemaJSON.data.data));
        }

        bar.update(1);

        return JSON.stringify(schemaJSON.data, null, 2);
      })
  );
}

const filePath = path.join(__dirname, '../src/api/graphql/', 'schema.graphql');

console.log();

console.log(
  supagradient(
    `🗞   Fetching GraphQL Schema from ${process.env.SUPABASE_URL}/graphql/v1 ...`
  )
);

fetchGraphQLSchema(`${process.env.SUPABASE_URL}/graphql/v1`, {
  readable: true,
}).then((schema) => {
  console.log(schema);
  fs.writeFileSync(filePath, schema, 'utf-8');
  console.log(supagradient(`✨  Saved to ${filePath}`));
  console.log(
    '💡  Be sure to run "yarn run codegen" to generate latest types.'
  );
});
