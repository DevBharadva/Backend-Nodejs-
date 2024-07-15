// mongosh
// show dbs
// show collection

db.mydatabase.insertOne({"name":"Dev","email":'dev@gmail.com',"age":20})

db.mydatabase.insertMany([
    
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/variable-product-img-505x505.jpg",
           "title": "VARIABLE PRODUCT",
           "price": 240
           
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-505x505.jpg",
           "title": "TABLE LAMP",
           "price": 60,
           "para": "New"
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-505x505.jpg",
           "title": "POTTERY VASE",
           "price": 390
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-3-1-505x505.jpg",
           "title": " ROSE HOLDBACK",
           "oldprice": 30,
           "price": 24
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-505x505.jpg",
           "title": "NEWSPAPER STORAGE",
           "price": 90
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-505x505.jpg",
           "title": "WALL CLOCK",
           "price": 110,
           "para": "New"
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-505x505.jpg",
           "title": "DECO ACCESSORY",
           "price": 15
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-505x505.jpg",
           "title": "FLOWER VASE",
           "price": 170,
           "Discount": "-19%",
           "para": "New"
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-505x505.jpg",
           "title": "BASKET WITH HANDLES",
           "price": 160,
           "para": "New"
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-2-505x505.jpg",
           "title": "ELEGANT PENDANT",
           "price": 290
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-3-505x505.jpg",
           "title": "FLOWERING CACTUS",
           "price": 65
        },
        {
           "image": "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h3-product-4-505x505.jpg",
           "title": "SHELL COLLECTION",
           "price": 25
        }
     
  
])

// import json file

// mongoimport jsonfile.json -d database_name -c collection_name

/* logical operators examples*/

// operstors syntax 
// => db.collectionName.find({'filedname':{$operator:value}})

// $gt (greter than operator)
// ex :- db.home.find({'price':{$gt:200}}) 

// $gte (greter than equal to)
// ex :- db.home.find({'price':{$gte:40}})

// $lt (Less than operator)
// ex :- db.home.find({'price':{$lt:100}})

// #lte (Less than equal to)
// ex :- db.home.find({'price':{$lte:100}})

// $eq (equal operstor)
// ex :- db.home.find({'price':{$eq:110}})

// $in & nin(not in)
// ex :- db.home.find({'price':{$in: [110,240]}})
// ex :- db.home.find({'price':{$nin: [110,240]}})


/* Cursor method */

/* 1. count()
   2. limit()
   3. skip()
   4. sort()
*/

// examples
1.
       db.home.find({'price':{$gt:110}}).count()
2. 
      db.home.find().limit(4)
3.
      db.home.find().limit(4).skip(2)
4. 
      db.home.find().limit(4).sort(2)

