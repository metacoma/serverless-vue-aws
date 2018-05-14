'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: process.env.S_REGION});

module.exports.user = (event, context, callback) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  var user = event.queryStringParameters.user;
  var password = event.queryStringParameters.password;

 var params = {
  Key: {
    email: user
  },
  TableName: process.env.DYNAMODB_USER_TABLE,
 };

 dynamoDb.get(params, function(err, data) {
   if (err) {
      console.log(err, err.stack); // an error occurred
   } else {
    const response = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
      statusCode: 200,
      body: JSON.stringify(data)
    };
    callback(null, response);
   }
 });

  /*
  const params = {
    TableName: process.env.DYNAMODB_USER_TABLE,
    Item: {
      email: "jon@doe"
    },
  };

 	dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the email item.',
      });
      return;
    }

    // create a response
    const response = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
      statusCode: 200,
      body: JSON.stringify({
        'user': user,
        'password': password
      })
    };
    callback(null, response);
  });
  */

};

module.exports.vm = (event, context, callback) => {
  var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

	var instanceParams = {
  	ImageId: 'ami-ad4812c8',
  	InstanceType: 't2.nano',
  	KeyName: 'test',
 		MinCount: 1,
 		MaxCount: 1
	};

	var instancePromise = new AWS.EC2({apiVersion: '2016-11-15'}).runInstances(instanceParams).promise();

	instancePromise.then(
  	function(data) {
    	console.log(data);

      const response = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        },
        statusCode: 200,
        body: JSON.stringify(data)
      };
      callback(null, response);

    	var instanceId = data.Instances[0].InstanceId;
    	console.log("Created instance", instanceId);
    	// Add tags to the instance
    	var tagParams = {Resources: [instanceId], Tags: [
      	{
          Key: 'Name',
          Value: 'Smashware courses'
      	}
    	]};
    	// Create a promise on an EC2 service object
    	var tagPromise = new AWS.EC2({apiVersion: '2016-11-15'}).createTags(tagParams).promise();
    	// Handle promise's fulfilled/rejected states
    	tagPromise.then(
      	function(data) {
        	console.log("Instance tagged");
      	}).catch(
        	function(err) {
        	console.error(err, err.stack);
      	});
  	}).catch(
    function(err) {
    console.error(err, err.stack);
	});

};

module.exports.admin = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'OK',
      endpoint: 'admin',
      input: event,
    }),
  };

  callback(null, response);
};


