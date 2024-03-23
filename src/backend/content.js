const contentful = require('contentful')

const client = contentful.createClient({
  space: 'rr7n560wercm',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'rNjT5tkjoonrt2yxPqylZhpIbBM8f9tuPilyY7rLr6c'
})

client.getEntry('1X5zLvcYJ9dSEFrLH8rvJT')
  .then((entry) => console.log(entry))
  .catch(console.error)


  // API key: XOxMFzxtgTTorqvKqcxyT9mCV877Ipoc3XzMB2HwvAY
  // TODO:
    // 1. Create a new contentful space
    // 2. Create a new content model
    // Next step
    // Done: register free contentful 
    // - create FE app connect to contentful
    // - collect sample info from FE
    // - use AI (LangChain) to process this information 
    // - suggest sample solution from AI in the FE

// TODO: Marwkting promotion
// Thnk about the marketing promotion initially how to promote our product
// Explore the legal aspect of the business