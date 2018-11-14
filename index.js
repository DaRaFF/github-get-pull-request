const _ = require('lodash')
const Octokit = require('./octokit')

// main application
module.exports = async ({owner, repo, sha, token}) => {
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
