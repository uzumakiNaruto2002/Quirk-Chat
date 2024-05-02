# Quirk-Chat⚡
Welcome to Quirk Chat⚡! 
<p align="center"><img src="screenshots/cover-pic.png" alt="app poster" height="400" width="700"></p>

# Demo💻
https://drive.google.com/file/d/1_VGbCYfu5PW4-iwDiO1jGIu5tNdAzY2z/view?usp=sharing

Note that it can time to load the dashboard once you click Log in, please be patient :)

# Features💫
- **Real-time Chatting**: Quirk Chat leverages the power of 'socket.io' to enable real-time communication between users. Messages are instantly delivered to recipients, ensuring a smooth and responsive chatting experience.

- **User Authentication**: The application includes a secure login and signup system. Users can create accounts, log in with their credentials, and access their chat rooms. Authentication is handled using secure encryption techniques.

- **Sign in with Google:** Users can easily sign in via their Google accounts. This was achieved by using Firebase authentication. After logging in with Google, the user must select their username and avatar. The application dynamically checks whether the current username is valid, and the server calls are minimized by incorporating debouncing.

- **User-Friendly Interface:** Quirk Chat offers a responsive, intuitive, and visually appealing interface, making it easy for users to navigate and interact with the application. The design focuses on simplicity and usability, providing a pleasant experience for all users.

- **Persistent Data Storage**: MongoDB is utilized as the database for Quirk Chat, ensuring reliable and efficient storage of user information and chat messages. The use of MongoDB allows for scalability and flexibility, accommodating the growth of the application and its user base.

# Installation⬇️
1. Clone the repository
```bash
git clone https://github.com/uzumakiNaruto2002/Quirk-Chat.git
```
2. Install dependencies
```bash
cd public
npm install
```
3. Set up the environment variables:
  - Create a .env file in the root directory.
  - Specify the required environment variables in the .env file. For example:
  ```bash
MONGODB_URI=your-mongodb-connection-string
PORT=port on which you wish to run your server
REACT_APP_LOCALHOST_KEY="chat-app-current-user" 
ORIGIN=domain-name-string ("http://localhost:3000" if not hosted)
```
4. Start the development server
```bash
npm start
```
5. Open your browser and visit http://localhost:3000 to access Quirk Chat.

# Technologies Used🛠️
- React A popular JavaScript library for building user interfaces. React provides an efficient and reusable component-based architecture for Quirk Chat's front end.

- Node.js: A server-side JavaScript runtime environment. Node.js powers the backend of Quirk Chat, allowing for server-side logic and handling of real-time communication.

- Socket.io: A library that enables real-time, bidirectional communication between web clients and servers. Socket.io forms the core of Quirk Chat's real-time chat functionality.

- MongoDB: A NoSQL database that offers scalability and flexibility for storing and retrieving user information and chat messages. MongoDB integrates seamlessly with Quirk Chat's Node.js backend.

