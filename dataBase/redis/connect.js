const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');
client.connect()
client.on('ready', function (res) {
  console.log('ready');
});
client.on('end', function (err) {
  console.log('end');
});
client.on('error', function (err) {
  console.log('rrr');
});
client.on('connect', function () {
  console.log('redis连接成功');
});
module.exports = client