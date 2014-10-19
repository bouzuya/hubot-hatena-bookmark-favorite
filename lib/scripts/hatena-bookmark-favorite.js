// Description
//   A Hubot script that show user's favorite
//
// Configuration:
//   None
//
// Commands:
//   hubot hatena-bookmark-favorite <user> - show user's favorite
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var cheerio, request;
  request = require('request');
  cheerio = require('cheerio');
  return robot.respond(/hate(?:na-)?b(?:ookmark)?-fav(?:orite)? (.+)$/i, function(res) {
    var user;
    user = res.match[1];
    return request({
      method: 'GET',
      url: "http://b.hatena.ne.jp/" + user + "/favorite"
    }, function(err, _, body) {
      var $, entries, lpad, message, w;
      if (err != null) {
        return res.send(err);
      }
      $ = cheerio.load(body);
      entries = [];
      $('.entry-title').each(function() {
        var e, title, url, users;
        e = $(this);
        title = e.find('.entry-link').text();
        url = e.find('.entry-link').attr('href');
        users = e.find('.users span').text();
        return entries.push({
          title: title,
          url: url,
          users: users
        });
      });
      w = entries.reduce((function(w, entry) {
        return Math.max(w, entry.users.length);
      }), 0);
      lpad = function(s, l) {
        var _i, _ref, _results;
        return (function() {
          _results = [];
          for (var _i = _ref = s.length; _ref <= l ? _i < l : _i > l; _ref <= l ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this).reduce((function(s) {
          return ' ' + s;
        }), s);
      };
      message = entries.map(function(entry) {
        return "" + (lpad(entry.users, w)) + " users | " + entry.title + " | " + entry.url;
      }).join('\n');
      return res.send(message);
    });
  });
};
