#!/bin/bash

# config
git config --global user.email "james.zhang75024@gmail.com"
git config --global user.name "James Zhang"

# deploy
git subtree push "https://${GITHUB_TOKEN}@$github.com/ui-components.git" --prefix docs origin gh-pages
