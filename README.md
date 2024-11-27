# Exprest

# Contributing

## Code structure

The code that's shared between the server and the client, which mainly consists
of types, is in the exprest-shared package.

The easiest way to develop with that package is to check it out, run
`npm run build`, then run `npm link` in the dist directory of exprest-shared.
Then run `npm link exprest-shared` in exprest-server. This sets up
exprest-server to use the local copy of exprest-shared. If you are going
to make frequent changes in exprest-shared as well, you can run
`npm run build-watch` in exprest-shared.
