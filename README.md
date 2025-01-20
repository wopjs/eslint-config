# @wopjs/eslint-config

[![Build Status](https://github.com/wopjs/eslint-config/actions/workflows/build.yml/badge.svg)](https://github.com/wopjs/eslint-config/actions/workflows/build.yml)
[![npm-version](https://img.shields.io/npm/v/@wopjs/eslint-config.svg)](https://www.npmjs.com/package/@wopjs/eslint-config)

Wopjs eslint config

## Install

```
npm add @wopjs/eslint-config
```

## Development

### Publish New Version

You can use [npm version](https://docs.npmjs.com/cli/v10/commands/npm-version) to bump version.

```
npm version patch
```

Push the tag to remote and CI will publish the new version to npm.

```
git push --follow-tags
```

### CI Auto Publish

If you want to publish the package in CI, you need to set the `NPM_TOKEN` secrets [in GitHub repository settings](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository). See how to [create a NPM access token](https://docs.npmjs.com/creating-and-viewing-access-tokens).
