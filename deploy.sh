#!/usr/bin/env sh

set -e

npm run build:prod

cd dist

git init
git add -A
git commit -m "deploy"

git push -f https://github.com/BardKidd/Hex_todolist.git master:gh-pages

cd -