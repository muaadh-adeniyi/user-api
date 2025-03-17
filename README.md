# **User API**  
A **RESTful API** built with **NestJS** and **TypeORM**, designed to manage user information, including **contact details, addresses, and academic history**.  

## Prerequisites

* Node.js and npm installed
* PostgreSQL installed and running .

## **Features**  
✅ User **registration** with **profile details**  
✅ **Contact, address, and academic** data management  
✅ **CRUD operations** for users  
✅ **Relational database** integration with **TypeORM**  

## **Technologies Used**  
- **NestJS** (Backend Framework)  
- **TypeORM** (ORM for database management)  
- **PostgreSQL** (Relational Database)
- **Typescript** 
 

## **Setup Instructions**  

### **1. Clone the Repository**  
```sh
git clone https://github.com/muaadh-adeniyi/user-api.git
cd user-api
```

### **2. Install Dependencies**  
```sh
npm install
```

### **3. Set Up Environment Variables**  
Create a `.env` file and add:  
```env
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
```

### **4. Start the Server**  
```sh
npm run start:dev
```
The API will be available at **`http://localhost:4000`** 🚀  

## **API Endpoints**  

| Method | Endpoint          | Description                 |
|--------|------------------|-----------------------------|
| POST   | `/users`         | Create a new user           |
| GET    | `/users`         | Retrieve all users         |
| GET    | `/users/:id`     | Get a specific user        |
| PUT    | `/users/:id`     | Update a user              |
| DELETE | `/users/:id`     | Delete a user              |


## **License**  
This project is licensed under the **MIT License**.  

