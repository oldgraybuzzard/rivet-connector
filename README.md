# Rivet Connector

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
  
## Description
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express, Node, MongoDB and Mongoose to allow users, thoughts, friend lists and thought reactions to be created, updated and deleted.

Live Riveted! 


## Table of Contents
* [Dependencies](#dependencies)
* [Links](#links)
* [Usage](#usage)
* [Contributors](#contributors)
* [Features](#features)
* [Endpoints](#endpoints)


## Dependencies 💻
Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the [MongoDB Website](https://docs.mongodb.com/manual/installation/))

To install dependencies, run these commands:
```
Node.JS, NPM, Express, Mongoose
```

## Links
[Github Link](https://github.com/oldgraybuzzard/aluminum_rivet_life.git)

## Usage 🏆
### Screenshots:



## Contributors 😃
[oldgraybuzzard](https://github.com/oldgraybuzzard)
* Contact me at k_felder@me.com


## Features
None 

## Endpoints 🧪
**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:id`
- Update a user:        `PUT /api/users/:id`
- Delete a user:        `DELETE /api/users/:id`
- Add a friend:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:id`
- Update a thought:     `PUT /api/thoughts/:id`
- Delete a thought:     `DELETE /api/thoughts/:id`

**Reaction**
- Add a reaction:       `PUT /api/thoughts/:id/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:id/reactions`

