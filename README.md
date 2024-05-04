
## Requirements

- NodeJS
- Express

### Execute in terminal project

```bash
//run project in dev
npm run dev

//Compile project
npm run buil

//start project Copiled
npm run start
```


# 1. First steps to create the project
## Install requirements

Execute in terminal project

```bash
npm init -y
```

```bash
npm i express
```
Install TypeScript in project
```bash
npm i typescript -D
```
    
Generate TSC TypeScript Configuration
```bash
//npx use local instalation folder
npx tsc --init
```

tsconfig.json uncomment this lines
```bash
"rootDir": "./src"
"outDir": "./dist"
```


## Compile API
```bash
npx tsc
```

## Execute API
```bash
node dist/index.js
```

## Install dependency from Dev
use this command when you are in development environment.
Is similar nodemon
```bash
npm i ts-node-dev -D
```
Edit this commnad line from package.json
```bash
"scripts": {
    "dev": "ts-node-dev --respawn src/index.ts"
  }
```
## Run API in development mode
```bash
npm run dev
```

# 2. Second steps from run project

## Install package necesary from the project
```bash
npm i express morgan cors
```

## add type data from express
```bash
npm i @types/express @types/morgan @types/cors -D
//if the project does not run is necesary install in project npm i express cors morgan and reinstall node_modules
```

## Install TypeORM
```bash
npm install typeorm --save
npm install reflect-metadata --save

//error install package reflect Execute this command line: npm i typeorm --legacy-peer-deps
```




## Documentation

[Documentation TypeORM](https://typeorm.io/)

