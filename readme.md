### BEFORE START READ:

docs/ADRs

### THEN

- open the file index.js and see that before starting the http server we do some initial operations, if needed; then we call a function to start the fastify server
- open server/index.js - Here is where the server is started

NOTES: routes are in the folder routes. It's divided in files by semantic. If the files grow divide it another file.



If you need custom manipulation of the request or response, use hooks.
See the route 'example2' as an example of a midlleware before the handler (like the middleware in lumen/laravel)
See the route 'example3' as an example of both midleeware before handler and middleware after handler ( on hook 'preSerialization'). NOTE: we use 'preSerialization' instead of 'onSend' because on 'preSerialization' you have the object instead of the json string.


## Resources
see Fastify lifecycle for reference: https://fastify.dev/docs/latest/Reference/Lifecycle/

see routes options for referece: https://fastify.dev/docs/latest/Reference/Routes

see hooks documentation for reference: https://fastify.dev/docs/latest/Reference/Hooks


## how to start the application

After created and customized '.env' file

In development, choose one of the three as you prefer:
#### using pm2

```
npm run start
```

#### using nodemon

```
npm run dev:http-server
```

#### directly from command line (or on windows)

```
node index.js
```