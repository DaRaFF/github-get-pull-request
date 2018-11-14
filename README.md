# Scope

A simple helper to get the info of a github pull request

# Example

### via CLI

```bash
npx github-get-pull-request --token=<your-token> --owner=<gh-owner> --repo=<gh-repo> --sha=<gh-sha>
```

### as module

```js
#!/usr/bin/env node

// index.js
const githubGetPullRequest = require('@daraff/github-get-pull-request')
const pr = await githubGetPullRequest({token, owner, repo, sha})
  .catch((err) => {
    console.log('this is an error', err)
  })
```
