var faker = require("faker");
var moment = require("moment");

faker.locale = "de";

var fake = function() {
  var tagWord = faker.random.word().replace(/\s/g,'');
  return {
    "text": faker.random.words(8),

    "type": "image",
    "entities": {
      "hashtags": [
        {
          "text": tagWord
        },
        {
          "text": tagWord
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
      "followers_count": faker.random.number({min: 0, max: 300}),
    },
    "favorite_count": faker.random.number({min: 0, max: 50}),
    "retweet_count": faker.random.number({min:0, max: 20})
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
                "followers_count": faker.random.number({min: 0, max: 300}),
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
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
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
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "Hackaburg ist soo geil bis jetzt! Bin total begeistert! #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "LollipopGirls",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "Wann gibts endlich wieder essen? Bin am verhungern! #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "LollipopGirls",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "So viele hübsche Mädchen auf der #Hackaburg2018. Hoffentlich trau ich mich eine anzusprechen ich bin so schüchtern.",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "ShyGuy30",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "I like clean code and I can not lie. #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "HackerGuyzAreMyStylz",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "i love #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "CodingIsForLovers",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "Hätte eine nette w Lust sich ein bisschen über Code zu unterhalten? Bin draußen und der mit dem Cap.. #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "KevinMcKevKev",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "To sleep or not to sleep. That is the question. #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "SleeplessInOhio",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "Gibts hier Mobile Devs, die sich RICHTIG gut mit xCode auskennen und mir kurz helfen könnten? #sendhelp #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
                  },
                  {
                    "text": "sendhelp"
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
                "name": "LollipopGirls",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "Hätte ein netter m Lust auf einen Drink an der Cocktail-Bar? Bin w 19, klein und mag ember. #Hackaburg2018 #HackaburgVerkuppelt",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
                  },
                  {
                    "text": "HackaburgVerkuppelt"
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
                "name": "CodingGirl",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "He's the reason for the bugs in my code. Broken Heart codes badly. #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "StevieLovessYourSchnitzel",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "Drew looks at me, I fake a smile so he won't see... mit nix coded es sich besser als mit Taylor Swift! Love her so much! #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "TaylorSwift",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "I love the players and you love the game - #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "NastyCars",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "Mein rechter, rechter Platz ist leer, ich wünsch mir einen netten m her. #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "ohNoScreamingCrying",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "I just wanna keep coding your class. Until you come back bugfree. #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "Codingismylife",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "I don't wanna code for ever. Cause I don't wanna be living in bugs. #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "KermitGirlzAreSexy",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "Ich möchte gerne wissen wer von euch black metal mag? Vllt ne nette w? #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "HopefulGuy",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
            },
            {
              "text": "Wenn die Wurst einfach viel zu groß ist. #Hackaburg2018",
              "entities": {
                "hashtags": [
                  {
                    "text": "Hackaburg2018"
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
                "name": "HackfleischHassenderZerhacker",
                "followers_count": faker.random.number({min: 0, max: 300}),
              },
              "favorite_count": faker.random.number({min: 0, max: 50}),
              "retweet_count": faker.random.number({min: 0, max: 20})
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
