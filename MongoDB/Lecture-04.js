/* Aggregation In MongoDb */

/* What is Aggregation? */
// => Defination: Aggregation is the process of performing transformations on documents and  combining themto produce computed results

/* Aggresgation  Syntax and theory */
// => Aggregation in MongoDB is a way to process data records and return computed results 
// => it invloves operstion like filtering, grouping and shorting data.

/* Aggregation Pipeline */

// => An aggregation pipeline is a sequence of stage that process documents
// => Aggregation consist of multiple pipeline stages, each performing a specific operation input data

/* $match in aggregation */

// syntax:- {$match:{<query>}}

// use company
// show collections

// db.stock.find()

/* $project with match */

// db.stock.aggregate([
//     {
//         $match: {
//                 author:"Unknown"
//         }
//     }])

// db.home.aggregate([
   
//     {
//         $project:{
//             _id:0,
//             author:1,
//             language:1
            
//         }
//         },
//          {
//             $limit:10
//      },
        
//     ])

db.home.aggregate([ 
    {
        $project:{
            _id:0,
            author:1,
            language:1
        }
    }
])
    
    

// examples:-

db.home.aggregate([{ price: {$gt: 500} }])

// $match with $limit & $skip
db.home.aggregate([{$match: { pages: {$gt: 500} }}])

db.home.aggregate([
    
    {
        $match:{
            pages:{
                $gt:500
            }
        }
    },
    {
        $limit:10
    }
    ])
    
    db.home.aggregate([
        
        {
            $match:{
                pages:{
                    $gt:500
                }
            }
        },
        {
            $skip:2
        }
        ])

// $group  with $match and $sort
// $sort method like a asc(1) and desc(-1) 
db.home.aggregate([ 
    {
         $group:{
            _id:'$country',
            totalCountry: {$sum: 1}
         }
    }
])

db.home.aggregate([ 
    {
        $match:{
            pages:{$gt: 700}
        }
    },
    {
         $geoup:{
            _id:'$country',
            totalCountry: {$sum: 1}
         }
    }
])

db.home.aggregate([ 
    {
        $match:{
            pages:{$gt: 700}
        }
    },
    {
         $geoup:{
            _id:'$country',
            totalCountry: {$sum: 1}
         }
    },
    {
        $sort:{totalprice:1}
    }
])


