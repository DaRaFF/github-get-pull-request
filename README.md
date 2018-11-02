# github-get-pull-request

A simple helper script to get the info of a github pull request

### required environment variables
```
GH_TOKEN: a github token with access to your target repository
GH_SHA: a pull request which contains this commit sha
GH_OWNER: owner of the repository
GH_REPO: repository name
```

# get pull request via node
```bash
GH_SHA=1a3216bb GH_TOKEN=123456789 GH_OWNER=daraff GH_REPO=github-get-pull-request node index.js
```

```js
#!/usr/bin/env node

// index.js
const pull = require('@daraff/github-get-pull-request')
pull()
  .then((pr) => {
    console.log('this is the pull request', pr)
  })
  .catch((err) => {
    console.log('this is an error', err)
  })

```

# get pull request via cli
```
# Example
GH_SHA=1a3216bb GH_TOKEN=123456789 GH_OWNER=daraff GH_REPO=github-get-pull-request npx github-get-pull-request
```
