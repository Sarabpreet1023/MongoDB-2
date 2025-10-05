

Nimbus - Student Management System (MVC Architecture)
This project demonstrates how to build a complete RESTful API for a Student Management System using Node.js, Express, and MongoDB, structured with the Model-View-Controller (MVC) architectural pattern.

🎯 Objective
Learn how to design and build a Node.js application using the MVC architecture to manage student data. This project focuses on separating concerns, structuring back-end logic clearly, and interacting with a MongoDB database using Mongoose.

🏛️ Core Concept: The MVC Architecture
The MVC pattern separates an application's logic into three distinct parts:

Model: Manages the application's data and business logic. It is the only part that interacts directly with the database. (e.g., student.model.js)

View: The user interface. For our REST API, the "view" is the JSON data we send as a response.

Controller: Acts as the brain of the application. It receives requests from the client, processes them by calling methods on the Model, and sends a response back. (e.g., student.controller.js)
