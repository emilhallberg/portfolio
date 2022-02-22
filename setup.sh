#!/bin/bash

git config --local core.hooksPath .githooks
npm config set scripts-prepend-node-path true

(cd client && yarn)
yarn

(cd server && yarn)
yarn

echo "🦕 Configs setup correctly"
