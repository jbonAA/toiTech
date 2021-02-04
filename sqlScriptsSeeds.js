Scripts used to create database and design table;

- 1. psql
- 2. create database toitech;

- \c toitech
- You are now connected to database "toitech" as user "jessbon".

- 3. CREATE TABLE products (
    ID SERIAL PRIMARY KEY, 
    title VARCHAR(50) NOT NULL, 
    price NUMERIC(5, 2) NOT NULL, 
    description TEXT NOT NULL, 
    image TEXT NOT NULL, 
    likes INTEGER NOT NULL
);

-\dt
List of relations
Schema | Name | Type | Owner
--------+ ----------+ ------- +---------
    public | products | table | jessbon
        (1 row)

- node index.js : ensure app is running App is running on port 3000

-import addproduct node seeds.js


