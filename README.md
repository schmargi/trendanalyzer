## Inspiration
One of our close friends works for a radio station and he sometimes has problems keeping up with the amount of local news. Sometimes this leads to lost chances on reporting about really trending news. 
We want to help him and other local news outlets by developing a tool which keeps an eye on local news and trending topics.

## What it does
Its a web app that checks Instagram and Twitter for recent posts and hashtags in a given location. We analyze and track the statistics of posts, likes and retweets and visualize the trend of hashtags using line charts. Additionally we show them in a ranked list. 
We also show all posts to a given hashtag where the user can easily get an overview of what has been posted. 

## How we built it
Our frontend is a webapp that has been build with ember.js and styled with bootstrap.
The backend is a node.js server with a restful API. At the current state of development the backend is using mock data that represents actual data of both Instagram and Twitter. Switching to real data can be done without much effort by registering and receiving authTokens from Instagram and Twitter.

## Challenges we ran into
We had to use mock data because Instagram does not allow developer apps to gather real data right from the start. Before being reviewed and approved developer apps can only handle sandbox data. Since Twitter does give access to real data we were in quite a conflict but decided to mock both platforms instead of only using Twitter.

## Accomplishments that we're proud of
It's pretty. 
After working for more than a weekend straight, all team member still like each other. 
We listened to a lof of Taylor Swift and had fun while doing so.
We developed a platform that will be used by our close friend once we get those authTokens.

## What we learned
We haven't programmed in Javascript for quite a while. We almost forgot why we don't like it. Now we know again. 
10/10, would do again.

## What's next for Trendanalyzer
Get those authTokens asap. 
More statistics, save collected data persistently.
