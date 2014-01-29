# Messages

Example of a modern web application with an Ember.js frontend, a node.js + MongoDB backend that is git deployable to Windows Azure Websites.

## How to Use

To run locally:

1. `git clone http://github.com/timfpark/messages messages`
2. npm install
3. Make sure you have MongoDB installed.
4. node server.js

To run in Windows Azure:

1. Create a fresh Windows Azure Website
2. Setup a git repo for that website in the dashboard for it.
3. In the Azure portal, create a free MongoLab MongoDB instance.
4. In the Azure portal, go to the configure tab for your website and add an environmental variable MONGODB_CONNECTION_STRING that points to your mongodb instance.
5. Configure a remote for that git repo:  `git remote add azure <azure git repo endpoint>`
6. Push the messages app to that repo: `git push azure master`