# **User API**  
A **RESTful API** built with **NestJS** and **TypeORM**, designed to manage user information, including **contact details, addresses, and academic history**.  

## **Features**  
✅ User **registration** with **profile details**  
✅ **Contact, address, and academic** data management  
✅ **CRUD operations** for users  
✅ **Relational database** integration with **TypeORM**  

## **Technologies Used**  
- **NestJS** (Backend Framework)  
- **TypeORM** (ORM for database management)  
- **PostgreSQL** (Relational Database)  
 

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
DATABASE_URL=your_database_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=3000
```

### **4. Run Migrations**  
```sh
npm run migration:run
```

### **5. Start the Server**  
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

