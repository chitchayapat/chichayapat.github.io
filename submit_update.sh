#!/bin/bash

git add .
git commit -m "Update files"
git push -u origin main

yarn run deploy
