```
docker build -t serverless-vue-aws:latest .
docker run --rm -it --mount ~/aws:/root/aws sls deploy
```
