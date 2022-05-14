# Next.js API Server Project Template

This template is a Next.js API server starter with typescript and nextjs-cors configured.

Unlike regularly Next.js projects, this is intended to be use as a "Backend" like regular API servers, with the easy-to-use Next.js API routes setup.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app my-next-api-server -e https://github.com/memenovation/next-api
# or
yarn create next-app my-next-api-server -e https://github.com/memenovation/next-api
```

## Deploy your own

Deploy the example using [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/memenovation/next-api)

### Usage

By wrapping endpoints in a `export default apiHandler(handler)` function, you can use the handler function defined in `@functions/api/APIHandler.ts` as a middleware to handle your API requests.

The `@configs/ActiveEndpoints.ts` file exports a list of endpoints to be used in your API server. You can define whether a specific endpoint should be active here.

Endpoints that are not defined in the list or active set to `false` will not be available in your API server. This allows you to disable endpoints that are not needed for your project.
