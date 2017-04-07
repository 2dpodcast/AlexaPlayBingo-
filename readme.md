# TODO
- sound out number, eg 1 and 0, 10
- wordy version, 11= legs eleven
- do not repeat numbers
-- need to id user/game and persist nums
https://github.com/claudiajs/example-projects/tree/master/dynamodb-example - cost?
- ability to start new game
- ability to repeat last number
- Add max number to app description , also link to twitter page (AlexaCaller)
- Send help / feature request from app - tweet, perhaps
- ability to change maximum ball - fixed at 75 currently
- shared game across locations, devices

# Questions?
- how to have a dev and prod version from same code?
- update alexa info from claudia/command line?
- multiple source files/require etc - does that work

# create
./node_modules/.bin/claudia create --region us-east-1 --handler index.handler --profile claudia

# update
./node_modules/.bin/claudia update --profile claudia

# test
./node_modules/.bin/claudia test-lambda --profile claudia

# for other regions
./node_modules/.bin/claudia create --region eu-west-1 --handler index.handler --profile claudia --config claudia-eu.json
./node_modules/.bin/claudia update --profile claudia --config claudia-eu.json
