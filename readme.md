# TODO
- do not repeat numbers
- ability to start new game
- ability to repeat last number
- ability to change maximum ball - fixed at 75 currently

# Questions?
- how to have a dev and prod version from same code?
- update alexa info from claudia/command line?

# create
./node_modules/.bin/claudia create --region us-east-1 --handler index.handler --profile claudia

# update
./node_modules/.bin/claudia update --profile claudia

# test
./node_modules/.bin/claudia test-lambda --profile claudia
