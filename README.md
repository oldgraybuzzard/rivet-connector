# Rivet Connector

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
  
## Description
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express, Node, MongoDB and Mongoose to allow users, thoughts, friend lists and thought reactions to be created, updated and deleted.

Live Riveted! 


## Table of Contents
* [Dependencies](#dependencies)
* [Links](#links)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Endpoints](#endpoints)
* [Endpoints](#endpoints)
* [Features](#features)
* [Contributors](#contributors)

## Dependencies 💻
Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the [MongoDB Website](https://docs.mongodb.com/manual/installation/))

To install dependencies, run these commands:
```
Node.JS, NPM, Express, Mongoose
```

## Links
[Github Link](https://github.com/oldgraybuzzard/aluminum_rivet_life.git)

## Usage 🏆
### Video Walkthrough

### Screenshots:
* [Get Users](readme_assets/getUsers.PNG)
* [Post Users](readme_assets/postUsers.PNG)
* [Get Thoughts](readme_assets/getThoughts.PNG)
* [Post Thoughts](readme_assets/postthoughts.PNG)
* [Put Reaction](readme_assets/putReaction.PNG)

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

## Features
None 

## Contributors 😃
[oldgraybuzzard](https://github.com/oldgraybuzzard)
* Contact me at k_felder@me.com