#!/bin/bash

GH_REPO="@github.com/watson-developer-cloud/ui-components.git"
FULL_REPO="https://$GH_TOKEN$GH_REPO"

gulp compile
cd docs
git init
git config user.name "Travis Ci"
git config user.email "james.zhang75024@gmail.com"

git add .
git commit -m "deployed to github pages"
git push --force --quiet $FULL_REPO master:gh-pages
