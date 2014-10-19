# Description
#   A Hubot script that show user's favorite
#
# Configuration:
#   None
#
# Commands:
#   hubot hatena-bookmark-favorite <user> - show user's favorite
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  request = require 'request'
  cheerio = require 'cheerio'

  robot.respond /hate(?:na-)?b(?:ookmark)?-fav(?:orite)? (.+)$/i, (res) ->
    user = res.match[1]
    request
      method: 'GET'
      url: "http://b.hatena.ne.jp/#{user}/favorite"
    , (err, _, body) ->
      return res.send(err) if err?
      $ = cheerio.load body
      entries = []
      $('.entry-title').each ->
        e = $ @
        title = e.find('.entry-link').text()
        url = e.find('.entry-link').attr('href')
        users = e.find('.users span').text()
        entries.push { title, url, users }

      w = entries.reduce(((w, entry) -> Math.max(w, entry.users.length)), 0)
      lpad = (s, l) -> [s.length...l].reduce(((s) -> ' ' + s), s)
      message = entries
        .map (entry) ->
          "#{lpad(entry.users, w)} users | #{entry.title} | #{entry.url}"
        .join '\n'
      res.send message
