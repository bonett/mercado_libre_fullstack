# Mercado-Libre-Fullstack

> Version 1.0.0.

Description:

A monorepo for mercado libre challenge projects:

![diagram](https://drive.google.com/file/d/1NxITBAPb1TcdceF7nMFMKyrwwZadU2Ds/view?usp=sharing)


Tools:
[Docker](https://www.docker.com/)

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
