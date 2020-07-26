# how2do

# Back-end

# Base URL for Deployed API

# Endpoints

| Request | URL                 | Description                               |
| ------- | ------------------- | ----------------------------------------- |
| POST    | api/users/register  | register as a new user                    |
| POST    | api/users/login     | login as an existing user                 |
| GET     | api/posts           | get all lifehacks (needs to be logged in) |
| GET     | api/posts/:id       | get specific lifehack                     |
| GET     | api/posts/:id/rates | get feedback for a lifehack               |
| PUT     | api/posts/:id       | edit specific lifehack                    |
| DELETE  | api/posts/:id       | delete specific lifehack                  |

# Table Requirements

# Users

| Name     | Type    | Required | Unique | Notes                         |
| -------- | ------- | -------- | ------ | ----------------------------- |
| id       | integer | yes      | yes    | users id (auto generated)     |
| username | string  | yes      | yes    | users username (max char 150) |
| email    | string  | yes      | yes    | users email (max char 120)    |
| password | string  | yes      | no     | users password (max char 150) |

# How To Do's

| Name   | Type    | Required | Unique | Notes                        |
| ------ | ------- | -------- | ------ | ---------------------------- |
| id     | integer | yes      | yes    | lifehack id (auto generated) |
| name   | string  | yes      | no     | lifehack name                |
| author | string  | yes      | no     | creator of lifehack          |
| desc   | string  | yes      | no     | description of lifehack      |

# Ratings / Feedbacks

| Name     | Type    | Required | Unique | Notes                        |
| -------- | ------- | -------- | ------ | ---------------------------- |
| id       | integer | yes      | yes    | lifehack id (auto generated) |
| total    | string  | yes      | no     | lifehack ratings total       |
| comment  | string  | yes      | no     | comment for a lifehack       |
| post_id  | string  | yes      | no     | related lifehack             |
| users_id | string  | yes      | no     | related user                 |
