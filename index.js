require('./assert.js')
const _ = require('lodash')
const Octokit = require('./octokit')

// assert.js assures that this environment variables are set
const token = process.env.GH_TOKEN
const owner = process.env.GH_OWNER
const repo = process.env.GH_REPO
const sha = process.env.GH_SHA

// main application
module.exports = async () => {
  const o = new Octokit(token)
  const pullRequests = await o.searchPullRequest({owner, repo, sha})
    .catch((e) => {
      return e
    })

  const pullRequestNumber = _.get(pullRequests, 'data.items[0].number', false)

  if (!pullRequestNumber) {
    return new Error(`no pull request found with commit ${sha} `)
  }

  const pr = await o.getPullRequest({repo, owner, number: pullRequestNumber})
    .catch((e) => {
      return e
    })

  return pr
}
