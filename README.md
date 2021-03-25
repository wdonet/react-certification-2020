# Wizeline Academy - 2021 React Bootcamp

Please refere to the following [GIST](https://gist.github.com/jparciga/83341911fbc8cd716be12af50c0e496a) for further instructions

gh-pages: https://alexsmxwz.github.io/react-certification-2021

# to trigger publishing to gh pages do:

npm run deploy

# this are the endpoint we will use:

To query for videos:

curl --location --request GET 'https://www.googleapis.com/youtube/v3/search?key={apikey}&q=summer&part=snippet&maxResults=50&order=date&type=video'

To query for videos related to other video:

curl --location --request GET 'https://www.googleapis.com/youtube/v3/search?key={apikey}&q=summer&part=snippet&maxResults=10&order=date&type=video&relatedToVideoId=JvbZdRdQSXk'
