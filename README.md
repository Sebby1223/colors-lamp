# COLORS Application

## Description
A web application designed to demonstrate a LAMP stack architecture. It provides a frontend interface that communicates with a backend PHP API to retrieve and display colors.

## Technologies Used
* Linux (DigitalOcean Droplet)
* Apache Web Server
* MySQL Database
* PHP
* HTML/CSS/JavaScript

## High-Level Setup Instructions
1. Clone this repository to a server with Apache, MySQL, and PHP installed.
2. Place the files in the server's web root (e.g., `/var/www/html/`).
3. Create a `db_config.php` file in the `api/` directory with your database credentials (this is ignored by Git for security).

## How to Run
Navigate to `http://<your-server-ip>/colors-lamp/public/index.html` in a web browser and interact with the page to trigger the API calls.

## Assumptions and Limitations
* Requires a pre-configured LAMP stack and MySQL database schema.
* Database passwords are not included in this repository.
