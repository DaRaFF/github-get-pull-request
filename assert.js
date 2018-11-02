const assert = require('assert')

assert(process.env.GH_TOKEN, 'missing environment variable GH_TOKEN e.g 11b22b33n4')
assert(process.env.GH_OWNER, 'missing environment variable GH_OWNER e.g daraff')
assert(process.env.GH_REPO, 'missing environment variable GH_REPO e.g github-get-pull-request')
assert(process.env.GH_SHA, 'missing environment variable GH_SHA e.g 3abcdef')
