-- Blow away your DB and start fresh - run these commands, 
-- create a user, 
-- then run the inserts, 
-- then import the menu_item csv file

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (200) NOT NULL,
    "email" VARCHAR (200) UNIQUE NOT NULL,
    "password" VARCHAR (200) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false
);


CREATE TABLE "restaurant"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "name" VARCHAR (200) NOT NULL,
    "type" VARCHAR (200),
    "phone" VARCHAR (20),
    "address" VARCHAR,
    "hours" VARCHAR,
    "delivery" BOOLEAN,
    "pickUp" BOOLEAN,
    "link" VARCHAR,
    "description" VARCHAR (8000),
    "picture" VARCHAR,
    "welcomeNote" VARCHAR,
    "city" VARCHAR,
    "state" VARCHAR,
    "zipcode" INTEGER,
    "latitude" NUMERIC,
    "longitude" NUMERIC,
);

CREATE TABLE "menu"
(
    "id" SERIAL PRIMARY KEY,
    "restaurant_id" INT REFERENCES "restaurant",
    "type" VARCHAR (200),
    "note" VARCHAR (1000)
);

CREATE TABLE "menu_section"
(
    "id" SERIAL PRIMARY KEY,
    "menu_id" INT REFERENCES "menu",
    "name" VARCHAR(200)
);

CREATE TABLE "menu_item"
(
    "id" SERIAL PRIMARY KEY,
    "menu_id" INT REFERENCES "menu",
    "name" VARCHAR (200),
    "description" VARCHAR (1000),
    "price" VARCHAR (200),
    "image" VARCHAR
);

CREATE TABLE "ingedient"
(
    "id" SERIAL PRIMARY KEY,
    "menu_item_id" INT REFERENCES "menu_item",
    "name" VARCHAR (200)
);

CREATE TABLE "tags"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (200)
);

CREATE TABLE "restaurant_tags"
(
    "id" SERIAL PRIMARY KEY,
    "restaurant_id" INT REFERENCES "restaurant",
    "tags_id" INT REFERENCES "tags"
);

-- After creating a user, you can run this after adding the user_id to it

INSERT INTO "restaurant" ("user_id", "name", "phone")
VALUES(UserIdHere, 'Lowbrow', '612-222-2222'), (UserIdHere, 'Red Sea', '612-222-2222');

INSERT INTO "menu" ("restaurant_id")
VALUE(1), (2);

-- important menu_item csv file into the menu_item table