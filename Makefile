.EXPORT_ALL_VARIABLES:
CUSTOM_PORT=3030
GRAPHQL_PATH=/graphql
JWT_SECRET=shh_th1s_1s_4_s3cr3t
JWT_EXPIRESIN=3600
MONGODB_URI=mongodb://localhost:27017/ezt-test
MONGODB_HOST=localhost
MONGODB_PORT=27017
MONGODB_DB=ezt-test
SALT=32

local-server:
	yarn run dev