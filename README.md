# Mercado-Libre-Fullstack

> Version 1.0.0.

Description:

A monorepo for mercado libre challenge projects:

![diagram](https://wbonett-test.000webhostapp.com/diagrama.jpg)

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
yarn run test
```

Expect: 

![test](https://wbonett-test.000webhostapp.com/test.png)

