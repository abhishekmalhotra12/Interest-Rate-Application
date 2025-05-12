# 📈 Interest Rate Management System

This project is a full-stack application that allows users to add and view interest rates based on different criteria like date, rate type, and value. It includes a frontend built with Angular and a backend powered by ASP.NET Core Web API with PostgreSQL as the database.

---

## 📂 Project Structure


├── interest-rate-frontend/ # Angular frontend
└── InterestRateAPI/ # ASP.NET Core backend


---

## 🚀 Technologies Used

### 🔧 Backend (ASP.NET Core)
- C# with .NET 7 Web API
- PostgreSQL
- Entity Framework Core
- JWT Authentication (planned)
- RESTful Endpoints

### 🌐 Frontend (Angular)
- Angular 15+
- Angular Material (UI)
- Reactive Forms (planned)
- Filtering, Sorting, Pagination (planned)

---

## 🛠 How to Run the Project

---

### 🚀 Backend Setup (InterestRateAPI)

```bash
cd InterestRateAPI
dotnet restore
dotnet ef database update   # apply migrations
dotnet run
```
### Front End Setup (interest-rate-frontend)
```bash 
cd interest-rate-frontend
npm install
ng serve
