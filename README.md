# Content Uploader 

## Getting Started

```npm
git clone https://github.com/princeparas16/contentUploaderWithProgressBar.git

cd contentUploaderWithProgressBar
```

We have 2 code base in this repository, 1 Rendering and 1 backend.

Now let's run the backend code first:

```npm
cd server

npm install
node server.js // Now the server will be running on your local
```

Now let's run the Rendering code:

```npm
cd client

npm install
npm start // Now the application will be running on your local
```
Now Try application to upload Single or multiple.

## Features Implemented

1. Rest Api to fetch single file or multiple files.
2. Added Progress bar to show the upload progress when single or miltiple file will upload.
3. ExpressJS - a NodeJS server to mock our API server.
4. Multer - a Node.js middleware for handling multipart/form-data.
5. Axios - promised based http request for client & server.
6. Redux-thunk - to be able to do asynchronous logic on redux.
7. Redux - state management that being used for ReactJS.
