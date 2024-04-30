<div align="center">
    <h1><b>Library Management Assignment</b></h1>
</div>

_A RESTful API built using Express.js framework._

### Link to Documentation: [here](https://documenter.getpostman.com/view/28833074/2sA3BuW95e)

### Installation

#### Requirements:

-   You must have mysql installed in your mechine

#### `Step 1` - clone the repo

```bash
$ git clone https://github.com/mohammadKhazaee/Library-Management-Assignment
```

#### `Step 2` - cd in the repo

```bash
$ cd Library-Management-Assignment
```

#### `Step 3` - install dependencies

```bash
$ npm install
```

#### `Step 4` - create database connection and schema

Create a mysql database connection with following properties

-   Hostname: localhost
-   Port: 3306
-   Username: root
-   leave Password empty

Create a schema in the connection named "library_db"

#### `Step 5 (Optional)` - create .env file

You can customize databse connection propeties and schema name by creating a .env file in the root directory and set these values proportional to your different values

-   DB_NAME=library_db
-   DB_USER=root
-   DB_PASSWORD
-   DB_HOST=localhost
-   DB_PORT=3306

values here are default values

#### `Step 6` - run application

```bash
$ tsc
```

#### `Step 7` - run application

```bash
$ npm start
```

Application should be available on [http://localhost:3000](http://localhost:3000)

#### License

MIT © [mohammadKhazaee](https://github.com/mohammadKhazaee)

<div align="center">
  <sub>If you found a bug or some improvments, feel free to raise an issue and send a PR!</sub>
</div>
