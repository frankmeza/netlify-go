# set -euxo pipefail

# cd cmd/gateway/nextjs
# yarn install
# yarn run export
# cd -

# mkdir -p "$(pwd)/functions"
# GOBIN=$(pwd)/functions go install ./...
# chmod +x "$(pwd)"/functions/*
# go env

task build-prod