# Comic Book API

This is a simple RESTful API for managing comic books. It allows you to create, read, update, and delete comic books from a database.

## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```sh
    cd <project-directory>
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB connection string and port number:
    ```env
    MONGO_URI=<your-mongodb-connection-string>
    PORT=3000
    ```

5. Start the server:
    ```sh
    npm start
    ```

The server will be running on `http://localhost:3000`.

## Endpoints

### Create a Comic Book

- **POST** `/api/v1/comics`
  - Description: Create a new comic book.
  - Request Body:
    ```json
    {
      "bookName": "Comic Title",
      "authorName": "Author Name",
      "yearOfPublication": 2022,
      "price": 555,
      "discount": "20",
      "numberOfPages": 465,
      "condition": "New",
      "description": "This is a comic book."
    }
    ```
  - Response: `Comic Book Created`

### Get All Comic Books

- **GET** `/api/v1/comics`
  - Description: Retrieve all comic books.
  - Response:
    ```json
    [
    {
      "bookName": "Comic Title1",
      "authorName": "Author Name1",
      "yearOfPublication": 2025,
      "price": 555,
      "discount": "20",
      "numberOfPages": 465,
      "condition": "New",
      "description": "This is a comic book1"
    },{
      "bookName": "Comic Title2",
      "authorName": "Author Name",
      "yearOfPublication": 2022,
      "price": 246,
      "discount": "20",
      "numberOfPages": 427,
      "condition": "old",
      "description": "This is a comic book2"
    }
    ]
    ```

### Get a Comic Book by ID

- **GET** `/api/v1/comics/:id`
  - Description: Retrieve a comic book by its ID.
  - Response:
    ```json
    {
      "bookName": "Comic Title",
      "authorName": "Author Name",
      "yearOfPublication": 2022,
      "price": 555,
      "discount": "20",
      "numberOfPages": 465,
      "condition": "New",
      "description": "This is a comic book."
    }
    ```

### Update a Comic Book by ID

- **PUT** `/api/v1/comics/:id`
  - Description: Update a comic book by its ID.
  - Request Body:
    ```json
    {
      "bookName": "Comic Title",
      "authorName": "Author Name",
      "yearOfPublication": 2022,
      "price": 555,
      "discount": "20",
      "numberOfPages": 465,
      "condition": "New",
      "description": "This is a comic book."
    }
    ```
  - Response: `Comic Book Updated`

### Get Comic Books by Author Name

- **GET** `/api/v1/comics/author/authorXYZ`
  - Description: Retrieve all comic books by author name.
  - Response:
    ```json
    [
    {
      "bookName": "Comic Title1",
      "authorName": "authorXYZ",
      "yearOfPublication": 2024,
      "price": 246,
      "discount": "20",
      "numberOfPages": 427,
      "condition": "old",
      "description": "This is a comic book1"
    }
    ]
    ```

### Get Comic Books by Year of Publication

- **GET** `/api/v1/comics/year/2022`
  - Description: Retrieve all comic books by year of publication.
  - Response:
    ```json
    [
    {
      "bookName": "Comic Title1",
      "authorName": "Author Name1",
      "yearOfPublication": 2022,
      "price": 555,
      "discount": "20",
      "numberOfPages": 465,
      "condition": "New",
      "description": "This is a comic book1"
    }
    ]
    ```

### Get Comic Books by Price Range

- **GET** `/api/v1/comics/price/100/600`
  - Description: Retrieve all comic books within a price range.
  - Response:
    ```json
    [
    {
      "bookName": "Comic Title1",
      "authorName": "Author Name1",
      "yearOfPublication": 2022,
      "price": 555,
      "discount": "20",
      "numberOfPages": 465,
      "condition": "New",
      "description": "This is a comic book1"
    }
    ]
    ```

### Delete a Comic Book by ID

- **DELETE** `/api/v1/comics/:id`
  - Description: Delete a comic book by its ID.
  - Response: `Comic Book Deleted`


---

>Test all the endpoints using Postman or any other API testing tool.
