## Django-React License Management App

>A simple ORM webapp that can search and manage the clients and its license status

>Used django for back-end, sqlite3 for database, react.js for front-end,
>redux for react.js status management, react-bootstrap for user-interface, ...ect

#### ``Work In Progress``

![](res/img.png)

## How do i run this app?

First, you need to clone this repository on your computer.

```
git clone https://github.com/Kooni-Boop/Django-React_License_Management_App
```

Then, you need to run both back-end(django) and front-end(react.js) servers.
<br>If you already have Docker installed, you can simply type following command in root folder to do it all at once.

```
docker-compose up
```

Otherwise, type following command in ./django_project folder.

```
python3 -m pip install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
//On windows, you should type 'py' instead of 'python3'
```

And then move to ./web folder and run following commands to run front-end server.

```
npm i //this may take some time.
npm run start
```

If you've done starting servers without seeing any red messages, then your browser should have made a new tab with the app you just started.<br>
otherwise, type these on your browser.

```
localhost:3000
```

