#!/usr/bin/env node

const argv = require('yargs')
  .usage('Usage: $0 --token [string] --o [string]')
  .demandOption(['token', 'owner', 'repo', 'sha'])
  .argv
const run = require('./index')
const {token, owner, repo, sha} = argv

run({token, owner, repo, sha})
  .then((pr) => console.log(JSON.stringify(pr)))
