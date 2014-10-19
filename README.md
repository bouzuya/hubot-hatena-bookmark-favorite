# hubot-hatena-bookmark-favorite

A Hubot script that show user's favorite

## Installation

    $ npm install git://github.com/bouzuya/hubot-hatena-bookmark-favorite.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-hatena-bookmark-favorite.git#TAG'

## Example

    bouzuya> hubot help hatena-bookmark-favorite
      hubot> hubot hatena-bookmark-favorite <user> - show user's favorite

    bouzuya> hubot hatena-bookmark-favorite bouzuya
      hubot> 54 users | 【翻訳】抽象化と組み合わせができるレイアウト言語があれば、CSSは必要ない | POSTD | http://postd.cc/css-is-unnecessary/
             73 users | 【翻訳】ジョエル・スポルスキによる『Trello, Inc.について』 | POSTD | http://postd.cc/trello-inc/
             59 users | 自動検出と自動修正でCSSを保守する - Qiita | http://qiita.com/r7kamura/items/7addebc61d177313a29d
              1 users | AVRの型番についているアルファベットの見方 - nomolkのブログ | http://nomolk.hatenablog.com/entry/2014/10/18/235658
              2 users | How To Build and Use a Multi GPU System for Deep Learning | Deep Learning | http://timdettmers.wordpress.com/2014/09/21/how-to-build-and-use-a-multi-gpu-system-for-deep-learning/
            198 users | 在特会より危険!? 安倍内閣を支配する極右団体・神社本庁の本質｜LITERA／リテラ　本と雑誌の知を再発見 | http://lite-ra.com/2014/10/post-558.html
             17 users | 大学の授業楼を払うために最賃働いた場合の必要労働時間の推移を大雑把に計算してみる - 情報の海の漂流者 | http://hatena.fut573.com/entry/2014/10/19/083000
             12 users | 新聞５紙のハッカソン始まる　４９人がサービス開発競う：朝日新聞デジタル | http://www.asahi.com/articles/ASGBH3D3PGBHULZL001.html
            106 users | Yahoo!ニュース - 子供の声は「騒音」か…脅迫、訴訟、そばには「ドクロ」「般若」の看板まで （産経新聞） | http://headlines.yahoo.co.jp/hl?a=20141018-00000529-san-soci
             18 users | 複数Webサイトからフリーの高品質な写真を探せる・「Stock Up」 - かちびと.net | http://kachibito.net/useful-resource/stock-up
              7 users | 香港市民の反抗、中国共産党の困惑 | グローバルアイ | 東洋経済オンライン | 新世代リーダーのためのビジネスサイト | http://toyokeizai.net/articles/-/50687

## Configuration

See [`src/scripts/hatena-bookmark-favorite.coffee`](src/scripts/hatena-bookmark-favorite.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-hatena-bookmark-favorite
[travis-badge]: https://travis-ci.org/bouzuya/hubot-hatena-bookmark-favorite.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-hatena-bookmark-favorite
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-hatena-bookmark-favorite.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-hatena-bookmark-favorite
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-hatena-bookmark-favorite.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
