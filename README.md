## Why would you consider a Scripting Language as JavaScript as your Backend Platform?

Javascript is currently one of the most updated and expressive scripting languages. there is constancent development and 
improvments, and this is crucial for development and security which is very important for backends, aswell as frontends.
By having a very espresive language, it makes for a low amount of code needed, which is good for fast development.

## Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat

By having the same language in the frontend aswell as the backend, gives you the oppotunity to become much faster in developing.
Not having to know a lot of different languages does limit what you can do, but making new things are a faster porcess,
as you only need to find the node module, that you need for the task.
As an example, deployment can be made very easy by using nodemon.

## Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:

* __Ensure that you Node-process restarts after a (potential) exception that closed the application.__

  This problem can be solved by using a process manager. When using a process manager, the process manager manages the starting of the application. You no longer start the application yourself, but instead instruct a process manager to do it for you. These process managers can be configured to automatically restart the application on crashes.
  
* __Ensure that your Node-process restarts after a server (Ubuntu) restart.__

  Ultimately process managers cannot start the express server after a reboot. you need to make the OS restart the server, by using cron.
  create a cronjob that is executed on restart by using the "@reboot" directive. Creating a new cronjob can be accomplished by running the   crontab -e command and inserting a new directive.

    @reboot /path/to/node /path/to/server.js

    You can also add the command to the /etc/rc.local file.

    When using a process manager it is of course inportant that the process manager is the one to start the application. Assuming that `pm2` is installed globally using `npm`: 

    @reboot pm2 start /path/to/server.js

* __Ensure that you can run “many” node-applications on a single droplet on the same port.__

  When deploying web apps, you would most of the time want them running on port 80.
This would be done using nginx, a reverse proxy.
to do this, configure the applications to run on unique ports.
then you make nginx foward requests to these application based on the incoming urls.

 ```nginx
    location /a/ {
        proxy_pass https://127.0.0.1:3333/;
    }
 ```
and repeat this with all applications.

## Explain the difference between “Debug outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code.

  There is a big difference in making a console.log and debug outputs. console.log is not supposed to be used for printing when something goes wrong or cheching if something is working. In the ideal world, all of the things we might print out to the console is information about usage and the state of the application. if you print all sorts of things to the console.log, you can have so much "garbage" that the log is impossible to put to good use (data and usage analyzation)
  
  So instead of using console.log to debug, making debug outputs that only work in a dec enviroment ensures that these outputs only are made when developing the application.
  
## Demonstrate a system using application logging and “coloured” debug statements.
  
  this is a example of making a development environment where we use debug statements. this is from jokes_rest.
  
  "scripts": {
    "start": "node ./bin/www",
    "dev": "DEBUG=expressrest:* & nodemon -e js,ejs ./bin/www"
  }
  
## Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages.

  Testing a REST API is much easlier in JavaScript than in many other languages like Java.
  When using languages like Java, web services often need to be deployed to a dedicated server.
  Using JavaScript we can programmatically start our express server using the listen method.
  We can then use the node-fetch to make requests to the REST API.
  
  
  
  
  
