# Exprest - Shared Code Between Client and Server

This package contains the shared code and types between the
[exprest-server](https://github.com/egokt/exprest-server)
and [exprest-web-client](https://github.com/egokt/exprest-web-client) packages.
See their documentation for information about exprest.

# Contributing

Feel free to open a pull request.

## Code structure

The code that's shared between the server and the client, which mainly consists
of types, is in the exprest-shared package.

The easiest way to develop with that package is to check it out, run
`npm run build`, then run `npm link` in the dist directory of exprest-shared.
Then run `npm link exprest-shared` in exprest-server. This sets up
exprest-server to use the local copy of exprest-shared. If you are going
to make frequent changes in exprest-shared as well, you can run
`npm run build-watch` in exprest-shared.
