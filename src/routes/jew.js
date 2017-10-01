const express = require('express');
const request = require('request');
const config = require('../config/default');
const getError = require('../utils/vk-error');
const jewishize = require('../utils/jewishizer');
const normalizeUserId = require('../utils/userIdNormalizer');

let router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    path: req.baseUrl,
    title: 'Jewishizer: jew your friends!'
  });
});

router.post('/', function(req, res) {
  const requestOptions = {
    uri: config.uriFriendsGet,
    json: true,
    qs: {
      user_id: normalizeUserId(req.body.userId),
      fields: config.fields,
      count: config.count,
      order: config.order,
      lang: config.language,
      v: config.apiVersion,
    },
  };

  request(requestOptions, function(err, resp, body) {
    if (!err && resp.statusCode == 200 && (body.response)) {
      let friends = [];

      (function listFriends() {
        body.response.items.forEach((friend) => friends.push(jewishize(friend, req.body.mode)));
      }());

      res.render('jew', {
        path: req.baseUrl,
        friends: friends,
        emptyResult: friends.length < 1 && 'No friends found.',
        title: 'All your friends are jew now!',
        vkUserUrl: config.vkUserUrl,
      });
    };

    if (!err && resp.statusCode == 200 && (body.error)) {
      res.render('vk-error', {
        path: req.baseUrl,
        errorMessage: getError(body.error.error_code),
        title: body.error.error_msg,
      });
    };

    if (err) {
      res.status(500).render('error');
    };
  });
});

module.exports = router;
