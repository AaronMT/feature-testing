## Firefox for Android Feature Testing (CouchApp)

Firefox for Android Feature Testing (CouchApp)

Clone with git:

    git clone git://github.com/AaronMT/feature-testing.git
    cd feature-testing

Install with 
    
    couchapp push . http://localhost:5984/feature-testing

or (if you have security turned on)

    couchapp push . http://adminname:adminpass@localhost:5984/feature-testing
  
You can also create this app by running

    couchapp generate feature-testing && cd feature-testing
    couchapp push . http://localhost:5984/feature-testing

Deprecated: *couchapp generate proto && cd proto*


## Todo

* factor CouchApp Commonjs to jquery.couch.require.js
* use $.couch.app in app.js

## License

Apache 2.0
