# Mercado-Libre-Fullstack

> Version 1.0.0.

Description:

A monorepo for mercado libre challenge projects:

<img width="1667" alt="Screen Shot 2021-09-30 at 22 37 17" src="https://user-images.githubusercontent.com/8261459/135561532-e4612a9a-7efe-409e-be0a-1b1bbc5019f1.png">


Tools:

- [Docker](https://www.docker.com/)
- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sass](https://sass-lang.com/)
- [Jest](https://jestjs.io/)
- [FlexBox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

- And More .....

## How to run this App

1. Firstly, you can install docker in your PC. [GetDocker](https://www.docker.com/get-started)
2. Create a `.env` file with the global settings for client and server application.
3. You need build docker images for client and backend applications.

Client:

```
docker build -t "react-app" ./client/
```

Server:

```
docker build -t "api-server" ./server/
```

4. To run monorepo, you must use the following command

   ```
   docker-compose up
   ```

5. Finally, you see the project running in the following ports:

Client:

```
localhost:3000
```

Server:

```
localhost:5000
```

## How to run unit testing for CLIENT

1. First
```
cd client
```

2. finally 

```
yarn test
```

Expect: 

![test](https://wbonett-test.000webhostapp.com/test.png)


## LIVE PREVIEW

Client: 

https://wbonett-test.000webhostapp.com/

Server:

https://dcb-meli-server.herokuapp.com



