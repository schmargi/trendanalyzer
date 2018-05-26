var faker = require("faker");
var moment = require("moment");

faker.locale = "de";

var fake = function() {
  return {
    "text": faker.random.words(8),

    "type": "image",
    "entities": {
      "hashtags": [
        {
          "text": faker.random.word()
        },
        {
          "text": faker.random.word()
        }
      ],
      "urls": [
        {
          "expanded_url": faker.image.cats()+"/"+faker.lorem.word() + faker.random.number(200000000000000)
        }
      ]
    },
    "place": {
      "name": String
    },
    "created_at": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').format('ddd MMM DD hh:mm:ss Z YYYY'),
    "user": {
      "name": faker.internet.userName(),
      "followers_count": faker.random.number({min: 0, max: 80000000}),
    },
    "favorite_count": faker.random.number({min: 0, max: 8000000}),
    "retweet_count": faker.random.number({min:0, max: 100000})
  };
};


  var sampleData = {
          "statuses": [
            {
              "text": "Bald gehts los! Kann es kaum erwarten! #WM2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "WM2018"
                  }
                ],
                "urls": [
                  {
                    "expanded_url": faker.image.cats()+"/"+faker.lorem.word() + faker.random.number(200000000000000)
                  }
                ]
              },
              "place": {
                "name": "Regensburg"
              },
              "created_at": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').format('ddd MMM DD hh:mm:ss Z YYYY'),
              "user": {
                "name": faker.internet.userName(),
                "followers_count": faker.random.number({min: 0, max: 100}),
              },
              "favorite_count": 203,
              "retweet_count": 17
            },
            {
              "text": "#LosJungs #WM2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "WM2018"
                  },
                  {
                    "text": "LosJungs"
                  }
                ],
                "urls": [
                  {
                    "expanded_url": faker.image.cats()+"/"+faker.lorem.word() + faker.random.number(200000000000000)
                  }
                ]
              },
              "place": {
                "name": "München"
              },
              "created_at": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').format('ddd MMM DD hh:mm:ss Z YYYY'),
              "user": {
                "name": "BayernSepp",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": 20,
              "retweet_count": 2
            },
            {
              "text": "Neues Redesign? Gefllt mir! www.mittelbayerische.de/ #MZ #mittelbayerische #UsabilityLove",
              "entities": {
                "hashtags": [
                  {
                    "text": "MZ"
                  },
                  {
                    "text": "UsabilityLove"
                  },
                  {
                    "text": "mittelbayerische"
                  },

                ],
                "urls": [
                  {
                    "expanded_url": faker.image.cats()+"/"+faker.lorem.word() + faker.random.number(200000000000000)
                  }
                ]
              },
              "place": {
                "name": "Regensburg"
              },
              "created_at": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').format('ddd MMM DD hh:mm:ss Z YYYY'),
              "user": {
                "name": faker.internet.userName(),
                "followers_count": faker.random.number({min: 0, max: 100}),
              },
              "favorite_count": 187,
              "retweet_count": 10
            },
            {
              "text": "Bananas in Pyjamas sind out! #LamasInPyjamas sind #in",
              "entities": {
                "hashtags": [
                  {
                    "text": "LamasInPyjamas"
                  },
                  {
                    "text": "in"
                  }
                ],
                "urls": [
                  {
                    "expanded_url": faker.image.cats()+"/"+faker.lorem.word() + faker.random.number(200000000000000)
                  }
                ]
              },
              "place": {
                "name": "Regensburg"
              },
              "created_at": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').format('ddd MMM DD hh:mm:ss Z YYYY'),
              "user": {
                "name": faker.internet.userName(),
                "followers_count": faker.random.number({min: 0, max: 100}),
              },
              "favorite_count": 19,
              "retweet_count": 1
            },
            {
              "text": "Technik hin oder her, analog ist irgendwie doch besser! #MZ #mittelbayerische",
              "entities": {
                "hashtags": [
                  {
                    "text": "MZ"
                  },
                  {
                    "text": "mittelbayerische"
                  }
                ],
                "urls": [
                  {
                    "expanded_url": faker.image.cats()+"/"+faker.lorem.word() + faker.random.number(200000000000000)
                  }
                ]
              },
              "place": {
                "name": "Regensburg"
              },
              "created_at": moment().subtract(faker.random.number({min: 0, max: 3000}), 'minutes').format('ddd MMM DD hh:mm:ss Z YYYY'),
              "user": {
                "name": faker.internet.userName(),
                "followers_count": faker.random.number({min: 0, max: 500}),
              },
              "favorite_count": 350,
              "retweet_count": 20
            },
          ],
          "search_metadata": {
                  "completed_in": 0.057,
                  "max_id": 0,
                  "max_id_str": "0",
                  "next_results": "?max_id=967574182522482687&q=nasa&include_entities=1&result_type=popular",
                  "query": "nasa",
                  "count": 3,
                  "since_id": 0,
                  "since_id_str": "0"
          }
  }

  module.exports = {
    sampleData:sampleData,
    fake: fake
  }
