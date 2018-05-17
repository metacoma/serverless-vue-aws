'use strict';

const AWS = require('aws-sdk');
const util = require('util');
AWS.config.update({region: process.env.S_REGION});

const private_key = `LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQ0KTUlJRXBnSUJBQUtDQVFFQTIzSEFmZDBJ
dURBSGpsRUNjRXVwa0FjNUxCcHFya3lSNkR1QnczWXpoRk02aEltVzd4bEtkYXIyU2t4eg0KY2w2
R2k4NWtlbGlNVkc4a0ZXYkRMV25JNUdzTVJWVFplMTM2Z29lbEJhZ3U4eFNOcW1aSFNBZlRhRGk5
Zi9aSnk2NE9XZUR3bFN5Sg0KUFBxaE1QNjU0TmpWQ2ZhTEg4WnhNTEs1SkFMcEpvRDFPZTVnT0FG
c1RoL0Q1K3RnU2xGMHJxQWJWNUdaWmhlT3phMjV1bUpDSGI4Ug0Kb1hIVWFibW9Qa3FQa0s2U2xR
UnF1MXM3RkJUdVJVd3ZhSjRQNEZseVdwRUwxV3I1bmVKNHphSmY0UWN5TGlTdVJwU0RvOUdyaStH
TQ0KMzQwVFlrOGxnWjZzYkNnYWU2dU1WMElEcVI2M0x2TGM3Y1BMMEtRRVdPbExQRVBEaUlRN1B3
SURBUUFCQW9JQkFRREVYRVpGbWNxYQ0KbmdlMDFsSmJUNmo3d3lycWh2emMySkZiQUJ4K1hiOTlj
Y2dVSHRZYlAwTThoVzE3VUd1aGRHbnFvaFdRMExsSk9HWk9iRFRMNXpPbg0KQ1E3aTN5ajRWa0M2
R2t5VkFraDRwUFNhL0loZU1QcC84UDNJaWdiQXBoQWJac2VBaEdpTlV5dDNud2VPNWhmRG9ZUWVP
OEMvTmIycg0KTnB1UUk2YkxYUlNVcllBbVFhWnFMWDlUNi91U0I4MmJ5cGdwSVRhWlZ2R1FHbXND
dUlWUlllbFpwbTBDQkxlQUtleitObWZBVisybA0KTTdOTGcyOUxmZzhCSEF4Q09aWXFiK0YycC9k
T1l1TXRaLzJRQlVJek9Lb0NmVmpQc0FkK0dVZG1RMVJQSGZGSHRvS25MZzg2VHU1Qg0KdTNZdVlY
RVhXNVErVXoycWRNY2JmenEzQk1UcEFvR0JBUHBtczlTN3pLNThiUXpsSFZlRVFjOU9tREtlMEts
dFc4Yk1nbkduaUZRcg0KdHhYampFc1psYzl2YXQ3aGEvaFdEY2VZRGNsZytQMkJHeEtXUXJLdU8v
dWtCcFhndjNiM1o0RlJkbVJLajFzTGwvcnkrUXlXNHl3TA0Kbi9KVGEvWFAxUnJtSnpBbnVyK1lh
MVFSYkJTZXRsUFBScnhVZ0p3WEZQN3RJUTNvRHN1YkFvR0JBT0JaMmpUbXpOdWRNc0VRdkhPdA0K
eTdWakQrSXNCUnMxT2hhT0ZIL3lIbk5xR0QwMjJJYzRNY08xeURyNTB3TmdRd3hsSWw1eHdaMDRI
eDY3WTE1YXEySUd6Wm01TE9xeQ0KM1hLSnF0RmE1aXo1Ym8rOWdSZm9yeGEzUnZWR2RLMmFpMzdB
OVl6MUw4S1lKSjV2QkpRSk85eDlobEFBWlFjbmtjbnVVN3BFSU9NdA0KQW9HQkFLSEZZRUQ3NDB5
SERsemFXSTZGMzQ1ekZGai95WWJzSS9MWGhSNndRWjgvYnRVeFlSM1R0Ym1DSGVWSWRWekhHN2Zy
UUZ6dA0Kelc3WnpnZkFFKzhrS1pSMWI5dThpM1hzZUc1UGx0Rk1hamxEMERoTWFTSDlDVjhYVTRw
VzR0UzRKTkZ3QjdsUXNaRytndmlaR041cA0KZXhuQ084eklPeDZjdXUvSGV5ZGsyTW9wQW9HQkFK
K3lGY3IyUnZoRWkyNDJOWTY2TlhqbUROWlhzMExNdm81emtGQUt6bllsSFIvbA0KdkhkMEhxaEs2
ejVmdWo1NjlQOEx0azAzK0RPclVTdVZBNFNVVWM0elBZS2c5MElSRStTRjdodWI4cUFzNVBCWVds
M2tlVTFZSktCUA0KQ0pyU21WMGVpU3RQRkRJV0RtcmdaNGZna3NXK2JDN2lPUWZBdU52ZVU2Y1Er
Ny81QW9HQkFJTEhLSlNsSU9weHhPOXZKMGwxNzhXeQ0KbUF5Zk8xZitjdjFSS1hEbi9Mcy9DY2kw
N0VVRmxlcXdzWUVBQXF5cXplc3lMVXlISFBVRDR3QWJYYWlxT2IyQVFPelRzOVNySmo1VQ0KekFl
V2FkTUZrSEJFZXRQaGt4S01DTmI1TW1EWStWaUlCTlhLSGp3WGpWN1IrWHE5a2JGcjQ4WDNUOHFZ
REV1enh2V3MzUHp0DQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==`


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


function get_ec2_public_ip(ec2, instanceId) {

     var instanceParams = {
				InstanceIds: [
					instanceId
				],
			};

      ec2.describeInstances(instanceParams, function(err, data) {
        if(err) {
            console.error(err.toString());
        } else {
            var currentTime = new Date();
            console.log(currentTime.toString());

            for(var r=0,rlen=data.Reservations.length; r<rlen; r++) {
                var reservation = data.Reservations[r];
                for(var i=0,ilen=reservation.Instances.length; i<ilen; ++i) {
                    var instance = reservation.Instances[i];

                    var name = '';
                    for(var t=0,tlen=instance.Tags.length; t<tlen; ++t) {
                        if(instance.Tags[t].Key === 'Name') {
                            name = instance.Tags[t].Value;
                        }
                    }
                    console.log('\t'+name+'\t'+instance.InstanceId+'\t'+instance.PublicIpAddress+'\t'+instance.InstanceType+'\t'+instance.ImageId+'\t'+instance.State.Name);
                }
            }
        }
});
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

module.exports.vm = (event, context, callback) => {
  var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

	var instanceParams = {
		ImageId: 'ami-ad4812c8',
		InstanceType: 't2.nano',
		KeyName: 'smashware-courses-access-key',
		MinCount: 1,
		MaxCount: 1
	};

	var instancePromise = new AWS.EC2({apiVersion: '2016-11-15'}).runInstances(instanceParams).promise();


	instancePromise.then(
		function(data) {
			console.log(data);


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

      const response = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        },
        statusCode: 200,
        body: JSON.stringify(data)
      };
      callback(null, response);

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


function vmDetailReply(callback, instance) {

  var publicIpAddress = '';
  if (instance != null && instance.PublicIpAddress != null) {
    publicIpAddress = instance.PublicIpAddress
  }

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    },
    body: JSON.stringify({
      message: 'OK',
      publicIp: publicIpAddress,
      'ssh': {
        username: 'ubuntu',
        privateKey: private_key,
      }
    }),
  };

  callback(null, response);
}




module.exports.vmDetail = (event, context, callback) => {
  var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

  var instanceId = event.queryStringParameters.instanceId;


  var instanceParams = {
    InstanceIds: [
			instanceId
    ],
  };

  ec2.describeInstances(instanceParams, function(err, data) {
    if(err) {
        console.error(err.toString());
        return vmDetailReply(callback, {})
    } else {
        var currentTime = new Date();
        console.log(currentTime.toString());

        for(var r=0,rlen=data.Reservations.length; r<rlen; r++) {
            var reservation = data.Reservations[r];
            for(var i=0,ilen=reservation.Instances.length; i<ilen; ++i) {
                var instance = reservation.Instances[i];

                var name = '';
                for(var t=0,tlen=instance.Tags.length; t<tlen; ++t) {
                    if(instance.Tags[t].Key === 'Name') {
                        name = instance.Tags[t].Value;
                    }
                }
                console.log('\t'+name+'\t'+instance.InstanceId+'\t'+instance.PublicIpAddress+'\t'+instance.InstanceType+'\t'+instance.ImageId+'\t'+instance.State.Name);
                return vmDetailReply(callback, instance)

            }
        }
    }
  })
};

function addTargetToRule(callback, ruleName, instanceId, statementId) {
	let cloudwatchevents = new AWS.CloudWatchEvents({apiVersion: '2015-10-07'});
  const terminateLambdaFuncArn = 'arn:aws:lambda:us-east-2:247051893090:function:serverless-courses443-prod-vmDestroy'


  var targetRule = {
    Rule: ruleName,
    Targets: [
      {
        Id: '1',
        Arn: terminateLambdaFuncArn,
        Input: JSON.stringify({
          'instanceId': instanceId,
          'ruleName': ruleName,
          'statementId': statementId
        })
      }
    ]
  }

  cloudwatchevents.putTargets(targetRule, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        console.log('add Target to rule ' + ruleName)
        const response = {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
          },
          statusCode: 200,
          body: JSON.stringify({
            message: 'OK'
          })
        };

        callback(null, response);
      }
  });
}

module.exports.scheduleTest = (event, context, callback) => {
	var cloudwatchevents = new AWS.CloudWatchEvents({apiVersion: '2015-10-07'});
  var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});

	var instanceId = event.queryStringParameters.instanceId;
  const ruleName = 'terminate-ec2-' + instanceId
  const lambdaFuncName = "serverless-courses443-prod-vmDestroy"


	var ruleParams = {
		Name: ruleName,
    //RoleArn: ruleRoleArn,
		Description: 'Destroy ec2 instance ' + instanceId,
		ScheduleExpression: 'rate(5 minutes)',
		State: "ENABLED"
	};

  cloudwatchevents.putRule(ruleParams, function(err, ruleData) {
      if (err) console.log(err, err.stack);
      else {
        console.log('Rule ' + ruleName + ' added')

        const statementId = "permission-lambda-" + instanceId

				var permissionParams = {
					Action: "lambda:InvokeFunction",
					FunctionName: lambdaFuncName,
					Principal: "events.amazonaws.com",
					SourceArn: ruleData.RuleArn,
					StatementId: statementId
				};

        console.log('Add permission to ' + ruleName + ' added')
 				lambda.addPermission(permissionParams, function(err, data) {
   				if (err) console.log(err, err.stack); // an error occurred
   				else {
     				console.log("Permission was added");

        		addTargetToRule(callback, ruleName, instanceId, statementId)
					}
 				});

      }
  });

}

module.exports.vmDestroy = (event, context, callback) => {
	var cloudwatchevents = new AWS.CloudWatchEvents({apiVersion: '2015-10-07'});
  var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});
  const lambdaFuncName = "serverless-courses443-prod-vmDestroy"

  console.log("vmDESTROY: " + JSON.stringify(event))
  console.log("CONTEXT: " + JSON.stringify(context))


  cloudwatchevents.listTargetsByRule({ 'Rule': event.ruleName } , function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else {
        console.log(data);           // successful response
        cloudwatchevents.removeTargets({ 'Rule': event.ruleName, 'Ids' : data.Targets.map(a => a.Id) }, function(err, data) {
              if (err) console.log(err, err.stack); // an error occurred
              else {
                console.log('remove targets from rule ' + event.ruleName)

                cloudwatchevents.deleteRule({ 'Name': event.ruleName }, function(err, data) {
                  if (err) console.log(err, err.stack); // an error occurred
                  else {
                    console.log('delete rule ' + event.ruleName)
                  }
                });
              }
        })

      }
  });

  let deletePermissionParams = {
		FunctionName: lambdaFuncName,
  	StatementId: event.statementId
  }

  lambda.removePermission(deletePermissionParams, function(err, data) {
  	if (err) {
			console.log(err, err.stack); // an error occurred
		} else {
   		console.log("Delete permission for " + lambdaFuncName + " statementId " + event.statementId)
		}
	});

 var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

 var instanceId = event.instanceId

 var params = {
     InstanceIds: [ instanceId ]
 };

 ec2.terminateInstances({ InstanceIds: [ instanceId ] }, function(err, data) {
    if (err) {
      console.log(err, err.stack)
    }
    else {
      console.log("Instance " + instaceID + " was terminated")
    }
 });
 callback(null, 'Finished');

}
