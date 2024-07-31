/* Aggreagtion LookUp */

// use schools

db.students.insertMany([
    {
        "studentId": "std001",
        "stuName": "Magan",
        "course": "Full-stack",
        "faculty": "tea002"
    },
    {
        "studentId": "std002",
        "stuName": "Chhagan",
        "course": "python-stack",
        "faculty": "tea003"
    },
    {
        "studentId": "std003",
        "stuName": "Gagan",
        "course": "Android Development",
        "faculty": "tea001"
    },
    {
        "studentId": "std004",
        "stuName": "Raman",
        "course": "iOS Development",
        "faculty": "tea002"
    },
    {
        "studentId": "std005",
        "stuName": "Chaman",
        "course": "UI/UX Designer",
        "faculty": "tea001"
    },
    ])

db.teachers.insertMany([
    {
        "teacherId": "tea001",
        "teacherName": "Dev",
        "hobbies": ["marketing", 'developement']
    },
    {
        "teacherId": "tea002",
        "teacherName": "Prince",
        "hobbies": ["management", 'time pass']
    },
    {
        "teacherId": "tea003",
        "teacherName": "Harshit",
        "hobbies": ["naki thay evu nthi", 'vichari ne lakhsu']
    }
    ])          

db.teachers.find({})
db.students.find({})

db.students.aggregate([
    {
        $lookup:{
            from:"teachers",
            localField:"faculty",
            foreignField:"teacherId",
            as:"faculty"
        }
    }
])

//   {
        //       $unwind: "$hobbies"
        //   }

db.students.aggregate([
  {
    $lookup: {  
      from: "teachers",
      localField: "faculty",
      foreignField: "teacherId",
      as: "faculty",
      pipeline: [
        {
          $project: {
            teacherId: 0,
          },
        },
        {
            $unwind: "$teacherName"
       }
      ],
    },
  },
  {
        $unwind:"$faculty"
  },
  {
    $project: {
      stuName: 1,
      teacherName: "$faculty.teacherName",
    },
  },
])

// db.books.aggregate([
//     {
//         $group: { _id: "null",
//             total: {
//                 $sum:1
//             },
//             details: {
//                 $push:{
//                     author: "$author",
//                     title: "$title"
//                 }
//             }
//         }
//     }
//     ])