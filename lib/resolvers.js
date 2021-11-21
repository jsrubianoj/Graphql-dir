"use strict"




const Courses=[
    {
        _id: "1",
        title: "The Complete Node.js Developer Course",
        teacher: "Andrew Mead",
        description: "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
        topic: "Node.js"
    },
    {
        _id: "2",
        title: "Node.js, Express & MongoDB Dev to Deployment",
        teacher: "Brad Traversy",
        description: "Learn by example building & deploying real-world Node.js applications from absolute scratch",
        topic: "Node.js"
    },
    {   
        _id: "3",
        title: "JavaScript: Understanding The Weird Parts",
        teacher: "Anthony Alicea",
        description: "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
        topic: "JavaScript"
    },
    {
        _id: "4",
        title: "The Complete JavaScript Course 2020: Build Real Projects!",
        teacher: "Jonas Schmedtmann",
        description: "Complete JavaScript Course 2020: Build Real Projects!",
        topic: "JavaScript"
    }    
]
module.exports = {
    Query: {
    getCourses: ()=>{
        return Courses
    },
    getCourse: (root, args)=>{
        const course = Courses.filter(course=>course._id === args.id)
        return course.pop()
    }
}}