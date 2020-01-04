# ypsilon-store
**Simple and flexible state management with javascript.** 

[![Dependabot badge](https://flat.badgen.net/dependabot/ypsilon-p/ypsilon-store?icon=dependabot)](https://dependabot.com/)
[![travisci badge](https://api.travis-ci.org/ypsilon-p/ypsilon-store.svg?branch=master)](https://travis-ci.org/)



Version 0.0.1 ;-) 
This repository is my first git project and more a playground. If you have to much time and find some errors or a better practice to implement some functionality please write a issue. I hope to learn something with this repository.
It comes with it own store and component class. You can use it without the component class, but then you must self implement the store functionality into your component class.


## Commands
#### Create Prod Version
```
npm run build
```

#### Start Dev Server
```
npm start
```

## The store

It supports the following data types:
- Object
- Arrray
- bool
- number
- string

The store is only to save and return data. Every store has it own mutations. If your application run first without data
which needed to store, you can initialize the store without defining mutations and listener. 
