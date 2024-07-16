// mongosh
// show dbs
// show collections

/* import json files */

//  mongoimport --db market --collection product --file F:\Mongodb\mongodb_json\product.json --jsonArray

/* update and delete Querys  */

/* Update Querys 

   1. updateOne            => syntax -> db.database_name.updateOne(
                                                                     {name:'filed_name'},     // filter
                                                                     {$set : {price:200}});  // update operation

   2. updateMany           => syntax -> db.database_name.updateMany({title:'rose holdback'},{$set: {title:devil}})

*/

/* delete Querys 

   1. deleteone            => syntax -> db.database_name.deleteOne({title:"name"})

   2. deleteMany           => syntax -> db.database_name.deleteMany({title:''})
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

ex:- 
    db.product.find({ $expr: {$gt: [$price,200]}})


   
