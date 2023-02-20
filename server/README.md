## Installation

Before installing, [download and install Node.js](https://nodejs.org/).
Node.js 14 or higher is required.

```
yarn
```

## Quick Start

```
yarn start
```

or:

```
yarn dev
```

View the website at: http://localhost:8080

## Postman Requests

[Download and install postman](https://www.postman.com/).

GET all Method:

```
http://localhost:8080/api/user
```

GET by ID Method:

```
http://localhost:8080/api/user/${id}
```

POST Method:

```
http://localhost:8080/api/user/adduser
```

body:(JSON)

```
{
    "name":"asif",
    "email": "asif@gmail.com",
    "password": "asif"
}
```

UPDATE(PUT) by ID Method:

```
http://localhost:8080/api/user/update/${id}
```

body:(JSON)

```
{
    "name":"asif",
    "email": "update@gmail.com",
    "password": "asif"
}
```

DELETE by ID Method:

```
http://localhost:8080/api/user/delete/${id}
```
