const express = require('express');
const router = express.Router();
const redis = require('redis');
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

client.set('visits', 0);

/* GET home page. */
router.get('/', function(req, res, next) {
  client.get('visits', (err, visits) => {
    res.render('index', { title: 'Express', visits });
    client.set('visits', parseInt(visits)+1);
  })
});

module.exports = router;
