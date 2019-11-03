// const axios = require('axios')
// const url = 'https://jsonplaceholder.typicode.com/users';
let response;

// exports.listTasks = async (event, context) => {
//   try {
//     // const ret = await axios(url);
//     response = {
//       'statusCode': 200,
//       'body': JSON.stringify({
//         message: 'hello world',
//       })
//     }
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
//
//   return response
// };

exports.listTasks = async () => {
  // If you change this message, you will need to change hello-from-lambda.test.js
  const message = 'Hello from Lambda!';

  // All log statements are written to CloudWatch
  console.info(`${message}`);

  return message;
}
