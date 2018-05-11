'use strict';

module.exports.user = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'OK',
      endpoint: 'user',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.vm = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'OK',
      endpoint: 'vm',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.admin = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'OK',
      endpoint: 'vm',
      input: event,
    }),
  };

  callback(null, response);
};


