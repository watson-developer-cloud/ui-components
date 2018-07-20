#!/bin/bash

GH_REPO="@github.com/watson-developer-cloud/ui-components.git"
FULL_REPO="https://$GITHUB_TOKEN$GH_REPO"

gulp compile
cd example
git init
git config user.name "Watson Github Bot"
git config user.email "gattana@us.ibm.com"

git add .
git commit -m "Automatic update to github pages"
git push --force --quiet $FULL_REPO master:gh-pages
