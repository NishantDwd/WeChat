# 💬 WeChat — Real-time MERN Stack Chat Application

Welcome to **WeChat**, a real-time chat application built with the **MERN stack** , **Socket.IO** for instant messaging, and modern responsive UI using **Tailwind CSS v4**.

## 🚀 Features

- 🔐 **Authentication**
  - User signup and login
  - JWT-based secure auth
- 💬 **Real-Time Chat**
  - Send/receive messages instantly using Socket.IO
- 👥 **User List & Conversations**
  - Chat with anyone in your contact list
  - Auto-scroll to latest messages
- 📱 **Mobile Friendly**
  - Fully responsive and optimized for small screens

## 🛠️ Tech Stack

| Tech             | Usage                       |
|------------------|-----------------------------|
| **MongoDB**      | Database                    |
| **Express.js**   | Backend Framework           |
| **React.js**     | Frontend UI                 |
| **Node.js**      | Server runtime              |
| **Socket.IO**    | Real-time communication     |     // Currently working on this otherwise working fine
| **Tailwind CSS** | Styling (v4)                |
| **JWT**          | Secure user auth            |

## 🔧 Setup Instructions


```bash

### 1. Clone the repository
git clone https://github.com/yourusername/wechat.git
cd wechat

In the root folder -
npm run build
npm start
http://localhost:5000/

**Backend API**

1. POST /api/auth/login
2. POST /api/auth/register
3. GET /api/messages/:userId
4. POST /api/messages/send

.

👨‍💻 Developer
Made with ❤️ by Nishant





