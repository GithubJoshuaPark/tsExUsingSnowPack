### Creating HTML using typescript,  snowpack
---
[ref Creating HTML using typescript](https://www.youtube.com/watch?v=6gB6HGxwjU0)
[ref snowpack](https://www.npmjs.com/package/snowpack)

> nvm list 
> nvm use v16.14.2
> tsc --version
> (Version 4.4.4)
> (if don't have typescript, npm i -g typescript)

```javascript
$npm init // make package.json
$npm i snowpack --save-dev  // install npm packages making node_modules and update package.json
$npx snowpack init // make snowpack.config.js
$npm i @snowpack/plugin-typescript typescript  // install 
```

> set plugin property in the snowpack.config.js
```javascript
plugins: [
    '@snowpack/plugin-typescript',
  ]
```
---
> make tsconfig.json 
```javascript
$px tsc --init
```

-- 
> add start snowpack script in package.json 
```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "snowpack dev",
    "build": "snowpack build"
  },
```

---
> make index.html as the start html file
> and link bootstrap css in it
[ref Bootstrap 5.1](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

---
> run
```javascript
$npm run start
```