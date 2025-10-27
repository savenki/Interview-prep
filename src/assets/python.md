## 🧠 Python Frameworks: Questions & Answers

### 🔹 1. Django (Full-stack Web Framework)
- **Q: What is Django?**
  - A high-level Python web framework that encourages rapid development and clean design.
- **Q: What is MTV architecture in Django?**
  - Model-Template-View: Django’s version of MVC.
- **Q: How does Django handle database migrations?**
  - Using `makemigrations` and `migrate` commands.
- **Q: What is Django ORM?**
  - An abstraction layer that lets you interact with the database using Python objects.
- **Q: How do you secure a Django app?**
  - Use CSRF protection, input validation, HTTPS, and Django’s built-in security middleware.

### 🔹 2. Flask (Micro Web Framework)
- **Q: What is Flask?**
  - A lightweight WSGI web application framework.
- **Q: How does Flask handle routing?**
  - Using decorators like `@app.route('/path')`.
- **Q: How do you manage sessions in Flask?**
  - With `session` object from `flask` module.
- **Q: Can Flask be used with databases?**
  - Yes, using extensions like SQLAlchemy or Flask-PyMongo.

### 🔹 3. FastAPI (Modern API Framework)
- **Q: What is FastAPI?**
  - A fast web framework for building APIs with Python 3.7+ using type hints.
- **Q: How does FastAPI generate documentation?**
  - Automatically via OpenAPI and Swagger UI.
- **Q: What are Pydantic models in FastAPI?**
  - Used for data validation and serialization.
- **Q: How does FastAPI support async programming?**
  - With `async def` endpoints and `await` syntax.

### 🔹 4. Pyramid (Flexible Web Framework)
- **Q: What is Pyramid?**
  - A flexible framework suitable for both small and large applications.
- **Q: How does Pyramid differ from Django and Flask?**
  - It offers more control over components and is less opinionated.
- **Q: What is traversal in Pyramid?**
  - A URL dispatch system based on resource trees.

---

## 🛠️ Demo Project: Flask-Based To-Do App

A simple CRUD app to demonstrate framework usage.

### 🔹 Step-by-Step Guide

1. **Setup Environment**
   - Install Flask: `pip install flask`
   - Create project folder: `todo_app/`

2. **Create App Structure**
   ```
   todo_app/
   ├── app.py
   ├── templates/
   │   └── index.html
   └── static/
   ```

3. **Build Flask App (`app.py`)**
   ```python
   from flask import Flask, render_template, request, redirect
   app = Flask(__name__)
   tasks = []

   @app.route('/')
   def index():
       return render_template('index.html', tasks=tasks)

   @app.route('/add', methods=['POST'])
   def add():
       task = request.form.get('task')
       tasks.append(task)
       return redirect('/')
   ```

4. **Create HTML Template (`templates/index.html`)**
   ```html
   <form action="/add" method="post">
       <input type="text" name="task" placeholder="Enter task">
       <button type="submit">Add</button>
   </form>
   <ul>
       {% for task in tasks %}
           <li>{{ task }}</li>
       {% endfor %}
   </ul>
   ```

5. **Run the App**
   - `python app.py`
   - Visit `http://localhost:5000`

6. **Enhancements**
   - Add delete functionality
   - Use SQLite with SQLAlchemy
   - Deploy on Heroku or Render

---

## 💻 Programming Challenges by Framework

### ✅ Django Challenge: Blog App
**Goal:** Build a blog with post creation, editing, and listing.

**Steps:**
1. `django-admin startproject blog_project`
2. Create app: `python manage.py startapp blog`
3. Define models: `Post` with title, content, timestamp
4. Use Django admin to manage posts
5. Create views and templates for listing and editing posts
6. Add URL routing

### ✅ Flask Challenge: To-Do List App
**Goal:** Create a CRUD app for managing tasks.

**Steps:**
1. Setup Flask app
2. Create routes: `/`, `/add`, `/delete/<id>`
3. Use in-memory list or SQLite with SQLAlchemy
4. Render tasks with Jinja2 templates

### ✅ FastAPI Challenge: REST API for Books
**Goal:** Build an API to manage books with CRUD operations.

**Steps:**
1. Define `Book` model using Pydantic
2. Create endpoints: `GET /books`, `POST /books`, `PUT /books/{id}`, `DELETE /books/{id}`
3. Use in-memory list or SQLite with SQLModel
4. Test with Swagger UI

### ✅ Pyramid Challenge: Notes App
**Goal:** Create a simple app to store and retrieve notes.

**Steps:**
1. Use `cookiecutter` to scaffold Pyramid project
2. Define `Note` model
3. Create views for listing and adding notes
4. Use SQLAlchemy for persistence

---

## 🧩 Bonus Interview Tips
- Be ready to discuss:
  - REST vs GraphQL
  - Middleware and request lifecycle
  - Deployment (Heroku, Docker, AWS)
  - Testing with `pytest`, `unittest`, or `tox`
- Mention security practices and performance optimization

---
**Sources**:
- (GeeksForGeeks_Interview_questions)[https://www.geeksforgeeks.org/python/python-interview-questions/]

