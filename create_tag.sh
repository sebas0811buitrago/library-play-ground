#!/bin/sh

version=$(jq -r '.version' "./package.json")

echo "Package version: $version"

if git ls-remote --exit-code --tags origin $version >/dev/null 2>&1 
then

    echo "A tag with this version already exist"
else
    git tag $version
    git push origin $version
    echo tag created succesfully
    echo "New tag: $version created"
fi

