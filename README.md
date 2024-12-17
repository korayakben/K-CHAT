# K Chat Application

This is a chat application that allows users to register, authenticate, and communicate with others through messaging. Users can manage their personal information, send and accept friend requests, and customize their settings.

---

## Features

### Registration and Login

- **Registration:** Users can register with their full name, username, email, country, and phone number. The system validates the uniqueness of the username and email.
- **Login:** Users can log in using their credentials. If incorrect information is entered, a specific error message is shown.

### User Management

- **Profile Viewing:** Users can view their personal information in the "Personal Information" section.
- **Profile Updates:** Users can update their username, email, and password through the settings.
- **Account Deletion:** Users can delete their account if they no longer wish to use the application.

### Friend System

- **User Search:** Users can search for other registered users.
- **Friend Requests:** Users can send and accept friend requests.
  - Accepting a friend request increases the user's contact count.
  - Users can unfriend or cancel friend requests.
- **Mutual Friends:** Users can view mutual friends between two accounts.

### Messaging

- **Send Messages:** Users can send messages to their friends.
- **Retrieve Messages:** Users can view conversation history between them and their friends.

### Notification System with Socket Programming

- Real-time notifications are implemented using **Socket.IO** to ensure that users receive instant updates for various actions:
  - **Friendship Requests:** Notifications are sent when a user sends a friend request.
  - **Acceptance Notifications:** When a friend request is accepted, both users are notified.
  - **Message Notifications:** Notifications are triggered when a user sends a message to their friend.
  - **Mutual Friends Updates:** Users are notified when mutual friends are updated.
- **Duplicate Prevention:** Notifications are checked for duplication before being stored in the database.
- **Notification Fetching:** Users can retrieve all their notifications via the "bringNotifications" socket event.

**Key Socket Events:**

- **`sendFriendship`**: Sends a friend request notification to the target user.
- **`bringNotifications`**: Retrieves all notifications for a user.
- **`bringFriendBtnState`**: Fetches the state of the friend button for a specific user.
- **`acceptanceNotification`**: Notifies users when a friend request is accepted.
- **`messageNotification`**: Sends a notification to the recipient when a message is received.
- **`mutualFriends`**: Shares mutual friend updates with relevant users.
- **`sendChatMessage`**: Broadcasts chat messages in real-time to the intended recipient.
- **`getStory` and `getStoryProfile`**: Handles the transfer of user stories in real-time.

---

## API Endpoints

### GET Routes

- **`/users`**: Retrieves all registered users.
- **`/email`**: Retrieves all registered emails.
- **`/username`**: Retrieves all registered usernames.
- **`/passwordCheck`**: Checks if the entered password is correct.

### POST Routes

- **`/register`**: Registers a new user.
- **`/login`**: Authenticates a user.
- **`/inquiryRequest`**: Sends inquiries to the server.
- **`/userByEmail`**: Retrieves a user by their email.
- **`/userByUsername`**: Retrieves a user by their username.
- **`/emailCheck`**: Checks if an email is already registered.
- **`/usernameCheck`**: Checks if a username is already registered.
- **`/notifications`**: Retrieves all notifications for a user.
- **`/addfriend`**: Sends a friend request.
- **`/friendButtonState`**: Retrieves the state of the friend button.
- **`/acceptFriend`**: Accepts a friend request.
- **`/areFriends`**: Checks if two users are friends.
- **`/bringFriends`**: Retrieves a user's friends.
- **`/mutualFriends`**: Retrieves mutual friends between two users.
- **`/storeMessage`**: Stores a message in the database.
- **`/bringMessages`**: Retrieves messages between two users.
- **`/hashIt`**: Hashes a user's password.
- **`/authenticator`**: Authenticates a user.
- **`/requestBreaker`**: Cancels a friend request.
- **`/unfriend`**: Removes a friend from the user's list.

### PUT Routes

- **`/updateEmail`**: Updates a user's email.
- **`/updateUsername`**: Updates a user's username.
- **`/updatePassword`**: Updates a user's password.
- **`/updateBtnState`**: Updates the state of the friend button.

### DELETE Routes

- **`/users`**: Deletes a user by their username.
- **`/notifications`**: Deletes a notification by its index.

---

## Setup and Installation

### For Frontend

1. Clone the repository.

   ```bash
   git clone https://github.com/korayakben/K-CHAT.git
   ```

2. Get in the frontend folder.

   ```bash
   cd K-Chat

   ```

3. Get in the frontend folder.

   ```bash
   cd Frontend
   ```

4. Install dependencies.

   ```bash
   npm install
   ```

5. Run the server.
   ```bash
   npm run dev
   ```

### For Backend

1. Clone the repository.

   ```bash
   git clone https://github.com/korayakben/K-CHAT.git
   ```

2. Get in the backend folder.

   ```bash
   cd K-Chat
   ```

3. Get in the backend folder.
   ```bash
   cd Backend
   ```
4. Install dependencies.

   ```bash
   npm install
   ```

5. Run the server.
   ```bash
   node app.js
   ```

---

## Database Setup

In order for K-Chat to work properly, a database setup is required. This project is developing in **PostgreSQL**. In order for PostgreSQL to work properly, you need to run the **database_setup.sql** file.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces (client).
- **Node.js**: JavaScript runtime environment for the server-side application.
- **Express.js**: A minimal web framework used for building the API.
- **PostgreSQL**: A relational database used for storing data.
- **Sequelize**: A promise-based Node.js ORM used for interacting with the PostgreSQL database.
- **UUID**: A library used to generate unique identifiers.
- **Axios**: A promise-based HTTP client for making API requests.
- **Context API**: A feature in React for managing global state and data across components.
- **Material UI**: A React UI framework for creating modern and responsive designs.
- **Bootstrap**: A front-end framework for building responsive, mobile-first websites.
- **JS-Cookie**: A library for handling cookies in JavaScript, used for managing user sessions.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing, allowing your backend to handle requests from different domains.
