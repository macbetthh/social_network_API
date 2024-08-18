# Social Network API

## Description

This is a RESTful API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It is built using Express.js for routing, MongoDB for the database, and Mongoose ODM for interacting with MongoDB.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.


## Usage

1. Run `npm start` to start the server.
2. The API will be available at `http://localhost:3001`.
3. Use Insomnia or Postman to test the API endpoints.

## API Endpoints

### Users
- `GET /api/users`: Get all users.
- `GET /api/users/:userId`: Get a single user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:userId`: Update a user by ID.
- `DELETE /api/users/:userId`: Delete a user by ID.
- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

### Thoughts
- `GET /api/thoughts`: Get all thoughts.
- `GET /api/thoughts/:thoughtId`: Get a single thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:thoughtId`: Update a thought by ID.
- `DELETE /api/thoughts/:thoughtId`: Delete a thought by ID.
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

## License

This project is licensed under the MIT License.
