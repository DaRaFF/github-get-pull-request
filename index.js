require('./assert.js')
const Octokit = require('./octokit')

// main application
module.exports = async () => {
  return 77
  // let state = 'success'
  // const o = new OctokitHelper(token)
  // const js = await json(req)
  // const {repository, sha} = js
  //
  // if (!isValidRepository(repository, res)) return
  // if (!isValidSha(sha, res)) return
  //
  // const pullRequests = await o.searchPullRequest({repository, sha})
  //   .catch((e) => {
  //     return send(res, 400, e)
  //   })
  // const pullRequestNumber = _.get(pullRequests, 'data.items[0].number', false)
  //
  // if (!pullRequestNumber) {
  //   return send(res, 401, `no pull request found with commit ${sha} `)
  // }
  //
  // const pr = await o.getPullRequest({repository, number: pullRequestNumber})
  //   .catch((e) => {
  //     return send(res, 400, e)
  //   })
  //
  // const baseBranchName = pr.data.base.ref
  //
  // if (isReleaseBranch(baseBranchName)) {
  //   const prComments = await o.getPullRequestCommits({repository, number: pullRequestNumber})
  //     .catch((e) => {
  //       return send(res, 400, e)
  //     })
  //   const commits = _.map(prComments.data, (c) => c.commit)
  //
  //   const type = await conventionalCommits(commitConfig, {commits})
  //   console.log('type', type)
  //
  //   if (type !== 'patch') {
  //     state = 'error'
  //   }
  // }
  //
  // await o.createStatus({repository, sha, state})
  //   .catch((e) => {
  //     return send(res, 400, `failed to update github check on pr ${pr.data.html_url} `)
  //   })
  // return send(res, 200, `github check updated on pr ${pr.data.html_url} `)
}
