set -euxo pipefail

# cd public/nextjs
cd nextjs
yarn install
yarn run export
cd -

mkdir -p "$(pwd)/functions"
GOBIN=$(pwd)/functions go install ./...
chmod +x "$(pwd)"/functions/*
go env
