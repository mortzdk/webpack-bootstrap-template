# webpack-bootstrap-template
A simple webpack + bootstrap stub project.
90% of the config from the project is from this [great webpack 4 tutorial](https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e) from Vikas Yadav at Hackernoon.
Added Bootstrap and some configs.

# How to use it: 
Clone, open a terminal at the project root, execute `npm install`, then watch with `npm run start`;
### Scripts:
```
  npm run start 
  // building:
  npm run build:prod
  npm run build:dev
```
<ul>
    <li>Put your images into the assets/img folder</li>
    <li>Put your scss into the scss folder(you can also use css files inside the src folder)</li>
    <li>Put your ES6+ scripts into the app folder then import then into the index.js</li>
    <li>Put your  scripts into the src folder then import them into the index.js</li>
    <li>Define your the page title in the config/webpack.common.config.js script, at the constructor of the HtmlWebpackPlugin</li>
</ul>

