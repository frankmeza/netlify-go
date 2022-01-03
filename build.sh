set -euxo pipefail

cd public/nextjs
yarn install
yarn run export

mkdir -p "$(pwd)/functions"
GOBIN=$(pwd)/functions go install ./...
chmod +x "$(pwd)"/functions/*
go env
