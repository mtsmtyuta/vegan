const contentful = require('contentful')
// const timeout = 10000

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  // timeout: timeout
}

const client = contentful.createClient(config);

export default client
