// MongoDB basic command
// MongoDB is object base orianted but it's a json object

    //mongosh                                       => connect to shell
    // show dbs/show databases                                     =>To show the database
    // use <database name>                          => create database     Note => with out any collection your database is not  show
    // show collections                             => To show the collections.
    // db.createCollection("Collection_name")       => create collection.
    // db.collection_name drop()                    => delete collection.
    // db.dropdatabase()                            => delete database
    
    /* Comparison operators */
    // $gt                                          => greater than

     // syntax of $gt                               => db.mydatabase.find({age : {$gt : 20}})

    // $lt                                          => less than (samesyntax of gt)

    //$eq                                           => equal values are return
    //$ne                                           => not equal values are return 
    //$gte                                          => greater than equal values return
    //$lte                                          => lessthan equal values return
    //$in                                           => match with in array

    /* Logical Operators */

    // $and                                        => both quesries match
    // $or                                         => either query matches
       