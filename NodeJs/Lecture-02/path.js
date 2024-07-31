const path = require('node:path')

/* get BaseName */

// console.log(path.basename('F:/Dev Bharadva/Backend-Nodejs-/NodeJs/Lecture-02/path.js'));

/* directory name */

// console.log(path.dirname('F:/Dev Bharadva/Backend-Nodejs-/NodeJs/Lecture-02/path.js'));

/* get delimiter */

// console.log(process.env.path.split('F:/Dev Bharadva/Backend-Nodejs-/NodeJs/Lecture-02/path.js'.delimiter));

/* Normalize path */

// console.log(path.normalize("F:/Dev Bharadva/Backend-Nodejs-/NodeJs/Lecture-02"));

/* split path */

// console.log(path.sep);

/* isAbsolute path */

// console.log(path.isAbsolute('path.js'));

/* join path */

// console.log(path.join('F:','Dev Bharadva' ,'Backend-Nodejs-NodeJs' ,'Lecture-02'));

/* parse the path */

// console.log(path.parse('/F:/Dev Bharadva/Backend-Nodejs-/NodeJs/Lecture-02/path.js'));

/* format the path */

// console.log(path.format({
//     root:'/',
//     name:'path',
//     ext:'js',
// }));

// console.log(path.format({
//     root:'/',
//     base:'path',
//     ext:'ignored',
// }));