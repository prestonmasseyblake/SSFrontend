import React from 'react'
import Navbar from "../components/navbar"
const About = () => {
    return (
      <div>
        <Navbar />
        <div className="bg-[#FFF] p-4 m-8">
          <p>About this project</p>
          <h2 className="text-black text-xl mx-4">
            This is a full stack project. Built Using React, Express, and
            MongoDB.
          </h2>
          <hr></hr>
          <p>
            Express is a web application framework for Node.js, a popular
            runtime environment for JavaScript. It is designed to make building
            web applications with Node.js easier by providing a set of features
            and tools for working with the HTTP protocol and creating APIs
            (Application Programming Interfaces). Node.js is a JavaScript
            runtime that allows developers to run JavaScript on the server side,
            which is not possible with traditional JavaScript that runs in a web
            browser. Express simplifies the process of building and managing a
            web server in Node.js. It provides a number of features for routing
            HTTP requests, handling request data and parameters, rendering HTML
            views, and more. It also has a large ecosystem of third-party
            plugins and middleware that can be used to extend its capabilities.
          </p>
          <br></br>
          <p>
            React is a JavaScript library for building user interfaces. It is
            maintained by Facebook and a community of individual developers and
            companies. React allows developers to create reusable UI components
            that can be composed to build complex user interfaces. It uses a
            declarative approach, which makes it easy to reason about and
            understand the code. One of the key features of React is its virtual
            DOM (Document Object Model), which provides a more efficient way to
            update the UI. Instead of updating the UI directly, React updates a
            virtual representation of the UI in memory, and then uses a diffing
            algorithm to determine the minimum number of updates that need to be
            made to the actual UI. This makes React applications fast and
            performant, even for applications with large amounts of data.
          </p>
        </div>
      </div>
    );
}

export default About
