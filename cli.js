#!/usr/bin/env node

const run = require('./index')

run()
  .then((result) => {
    console.log(result)
  })
