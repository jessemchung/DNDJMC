# DNDJMC


My personal project to try and make DnD easier to run


  check for updates
  ncu -u

  tsc --watch to watch typescript changes

  The first one is needed to start up the local host, the second one is needed to automatically save changes.  If that isn't working, run npx webpack --config webpack.config.js


  "start": "nodemon server/index.js",
  "react": "webpack --config ./webpack.config.js --mode development -w"

  important places: 
  index.js :  Purpose is to dictate where the url paths are.   Pretty important.