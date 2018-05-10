FROM node:9.11-slim AS vue-app
RUN npm install -g vue              \
  vue-material                      \
  webpack                           \
  webpack-dev-server

FROM vue-app AS vue-app-builder
ADD ./vue-app /app
WORKDIR /app
RUN npm install
RUN npm run build


#FROM amaysim/serverless:1.26.1
#RUN npm install vue
#RUN npm install vue-material@beta --save
#RUN npm install -g vue-cli
#RUN npm install -g webpack webpack-dev-server
#RUN npm install --save vue-material
#RUN npm install --save axios
#WORKDIR /app
