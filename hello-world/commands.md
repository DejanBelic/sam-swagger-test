1) s3 mb s3://bucketname --region region
2) aws s3 cp  swagger.yaml s3://samrain/swagger.yaml   
3)  aws cloudformation package --template-file template.yaml --output-template-file sam-template-output.yaml --s3-bucket samrain    
4)  aws cloudformation deploy --template-file sam-template-output.yaml --stack-name todo-app-dev --parameter-overrides StageName=dev S3BucketName=samsunday --capabilities CAPABILITY_IAM --region eu-central-1