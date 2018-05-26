var moment = require("moment");
var faker = require("faker");
faker.locale = "de";

var fake = function() {
  return {
    "type": "image",
    "images": {
      "standard_resolution": {
        "url": faker.image.cats()
      }
    },
    "user": {
      "username": faker.internet.userName()
    },
    "likes": {
      "count": faker.random.number(42)
    },
    "caption": {
      "text": faker.random.words(8)
    },
    "created_time": faker.random.number(1200000000),
    "tags": [faker.random.word(), faker.random.word()],
    "link": faker.internet.url()+'/'+faker.random.number(1000000)
  };
};

var sampleData = {
    "data": [{
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["expobar", 'lolcat'],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
            "text": "Hackaburg ist echt ein riesen Spaß!",
            "from": {
                "username": "josh",
            },
            "id": "25663923"
        },
        "likes": {
            "count": 35
        },
        "link": "http://instagr.am/p/BUS3X/",
        "user": {
            "username": "josh",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    },
    {
        "type": "video",
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 640,
                "height": 640
            }
          },
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": ['Hackaburg2018','catlol', 'maike_is_cute_af'],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": 1
        },
        "link": "http://instagr.am/p/D/",
        "user": {
            "username": "kevin",
        },
        "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    },
    {
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["expobar", "Hackaburg2018", "thestruggleisreal"],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
            "text": "Ich hab sooo hunger. Ich will mehr Pizza, aber mich nicht anstellen.",
            "from": {
                "username": "SamyDecoder",
            },
            "id": "25663923"
        },
        "likes": {
            "count": 35
        },
        "link": "http://instagr.am/p/BUS3X/",
        "user": {
            "username": "codingLover69",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    },
    {
        "type": "video",
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 640,
                "height": 640
            }
          },
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": ["scheiß", "Hackaburg2018"],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": 1
        },
        "link": "http://instagr.am/p/D/",
        "user": {
            "username": "kevin",
        },
        "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    },
    {
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["expobar", "Hackaburg2018"],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
            "text": "Well.. let's give it a try. You never know, what will happen..",
            "from": {
                "username": "SusanBob",
            },
            "id": "25663923"
        },
        "likes": {
            "count": 35
        },
        "link": "http://instagr.am/p/BUS3X/",
        "user": {
            "username": "josh",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    },
    {
        "type": "video",
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 640,
                "height": 640
            }
          },
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": ["hans", "Hackaburg2018"],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": 1
        },
        "link": "http://instagr.am/p/D/",
        "user": {
            "username": "kevin",
        },
        "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    },
    {
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["expobar", "Hackaburg2018"],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
            "text": "I don't know any german word. Send help!",
            "from": {
                "username": "KafkaLos",
            },
            "id": "25663923"
        },
        "likes": {
            "count": 35
        },
        "link": "http://instagr.am/p/BUS3X/",
        "user": {
            "username": "josh",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    },
    {
        "type": "video",
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_101.mp4",
                "width": 640,
                "height": 640
            }
          },
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": ["somuchfunnn", "Hackaburg2018"],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": 1
        },
        "link": "http://instagr.am/p/D/",
        "user": {
            "username": "kevin",
        },
        "created_time": moment().format('MMMM Do YYYY, h:mm:ss a'),
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": faker.image.cats(),
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    }
  ]
}

module.exports = {
  sampleData: sampleData,
  fake: fake
}
