const octokit = require('@octokit/rest')()

module.exports = class Octokit {

  constructor (token) {
    octokit.authenticate({
      type: 'oauth',
      token: token
    })
  }

  async getPullRequest ({owner, repo, number}) {
    return await octokit.pullRequests.get({
      owner,
      repo,
      number
    })
  }

  async searchPullRequest ({owner, repo, sha}) {
    return await octokit.search.issues({
      q: `${sha} repo:${owner}/${repo}`
    })
  }
}
