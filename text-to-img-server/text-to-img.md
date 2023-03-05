# Server Setup

First, make sure to sign up for an OpenAI account and create an API key. Then store the API key in a file named .env. If it’s included in your .gitignore, this file will be ignored by Git so that you don’t accidentally share your API key with the world.

```js
touch server.js

npm i dotenv express cors openai
node server.js
```
