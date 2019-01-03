# Ski Mountain API

Example full stack Node.js API built on Express web application framework

![alt text](./public/images/mountains.jpg)

## How to use
#### Install npm dependencies
```bash
npm install
```

#### Start app
```bash
npm start
```

#### Go to [localhost:8080](http://localhost:8080)


## Development CLI
#### Start app
```bash
npm start
```

#### Start app in development mode
```bash
nodemon
```


## Database
* PostgreSQL
* knex.js

##### Create schema
```bash
knex migrate:make mountain
```

##### Create seed data
```bash
knex seed:make mountain
```

##### Run schema migration
```bash
knex migrate:latest
```

##### Rollback schema migration
```bash
knex migrate:rollback
```

##### Seed database
```bash
knex seed:run
```

