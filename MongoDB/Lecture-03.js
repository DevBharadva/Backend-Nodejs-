// mongosh
// show dbs
// show collections

/* import json files */

//  mongoimport --db market --collection product --file F:\Mongodb\mongodb_json\product.json --jsonArray
//  mongoimport --db shop --collection home --file  --jsonArray

/* update and delete Querys  */

/* Update Querys 

   1. updateOne            => syntax -> db.database_name.updateOne(
                                                                     {name:'filed_name'},     // filter
                                                                     {$set : {price:200}});  // update operation

   2. updateMany           => syntax -> db.database_name.updateMany({title:'rose holdback'},{$set: {title:devil}})
   
   db.product.updateMany({}, { $set: {course: "fullstack"}})
   db.product.updateMany({}, { $unset: {course: ""}})
   db.product.updateMany({title:'Khakhi jeans'}, { $unset: {price: ""}})

   
   
   db.home.updateOne({filed_name}, {$rename: {'oldname', 'newname'}})
   
   */
  ex:- db.home.updateMany({pages : {$gt: 256}}, {$rename: {"title": "Names"}})

/* delete Querys 

   1. deleteone            => syntax -> db.database_name.deleteOne({title:"name"})

   2. deleteMany           => syntax -> db.database_name.deleteMany({course:'fullstack'})

   db.product.deleteOne({course:'fullstack'})

   db.developer.deleteOne({email:"test1@test.com"})
   
*/

/* Logical Operator */

/* Basics Note: for AND Operator */
/* 1. true
               => true
      true
   
 2. false
               => false
     true
 
 3. true
                => false                     
    false

 4. false
                => false         
 false 
   */

ex: -
    db.home.find({$and: [{ 'price': {$gt: 100 } },{ title: 'BASKET WITH HANDLES' }]})
    db.product.find({$and: [{price: {$gte:50}}, {title:'Kids choice'}]})

/* Basics Note: for OR Operstor */

/* 1. true
               => true
      true
   
 2. false
               => true
     true
 
 3. true
                => true                     
    false

 4. false
                => false         
   false 
   */

   ex : - 
db.product.find({$or: [{oldPrice: {$gte:70}}, {title:'Blue jins'}]})

// nor (not or)
db.product.find({$nor: [{oldPrice: {$gte:70}}, {title:'Blue jins'}]})

// $not
db.product.find({oldprice: {$not: {$gt: 80}}}).count()

/* Complex expresion */

// => The $expr operstor allows using aggregation expressionwithin a query
// => compare fileds from the same document 

ex:- 
    db.product.find({ $expr: {$gt: ["$price",200]}})
    
    /* Elements operator  */
    
// 1. exists
// {filed: {$exists: boolean}}
// 2. type
//{field: {type:"<bson-data-type>"}}
// 3. size
// {field: {$size: <array length>}}

    ex:-
    1. // db.product.find({price: {$exists:false}}).count()
    2. // db.home.find({pages:{type:'number'}}).count()
      // db.home.find({pages:{type:'string'}}).count()

   3. // db.home.find({pages:{$size:2}})


   /* projection */

   /* To include specific fields, use projection with a value 
   of 1 for the fields you want.*/

   /* To exclude fields, use projection with a value of 0 for the fields you want to exclude
   /* you cannot include and exclude fields simultaneously in the same query projection */

   // db.developer.find()

   // db.developer.find({"address":{$size:2}})

   // db.developer.find({address:1})

   // db.developer.find({"address":{$size:2}},{address:1,_id:0})

   // db.developer.find({"address":{$size:2}},{email:1})


/* Emebeded Document  */

ex:
   db.developer.find({'address.county':'Everywhere'})


   /* $all and $elematch */

   // ex:-
      db.developer.find({'address.county': {$all: ['india','USA']}})
      db.developer.find({'address':{$elemMatch: {'county':'India','price':450}}})

/* Update in array emebed document */      

ex:- 
db.developer.updateOne({email:"test1@test.com", "address.county":"Something"}, {$set: {"address.$.county":"India"}})
db.developer.updateOne({email:"test1@test.com", "address.county":"Something"}, {$unset: {"address.$.county":""}})
db.developer.updateOne({email:"test1@test.com"},{$push: {address: {county: "India"}}})
db.developer.updateOne({email:"test1@test.com"},{$pop:{"address":1}})

