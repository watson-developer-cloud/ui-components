# Release process

Standard practice with this project is to commit all of the changes for a release except updating the version. We use [bumpversion] to update the version file, commit, and tag the changes.

### 1. Updating the version
A small command line tool to simplify releasing software by updating all version strings in your source code by the correct increment.
Install it with:
```bash
pip install bumpversion
```

### 2. Doing a release

- [ ] Commit all the local changes
- [ ] Run `npm run compile`
- [ ] Commit the changes
- [ ] Deploy the changes

    `git push origin master` will publish the changes to `package.json`.  
    `git push origin --tags` will publish the tag to github.
