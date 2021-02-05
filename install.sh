#!/bin/bash

shopt -s dotglob
directory=$(realpath $(dirname $0))

pushd $directory

rm -rf .git
mv * ..
rm ../install.sh

popd

rmdir $directory
