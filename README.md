# Installation

Start Flask app in a Docker container.
```
docker build -t closet-app:latest .
docker run -d -p 5000:5000 -v $PWD:/app closet-app
```

Start React application.
```
npm start
```
