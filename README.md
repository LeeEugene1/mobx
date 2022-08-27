## installment

npx create-react-app todo-app --template typescript

cd todo-app
npm install -s mobx mobx-react-lite
npm install framer-motion
npm install react-icons
npm start

# Todo1
- createContext, useContext from "react";
- import { useLocalStore, Observer } from 'mobx-react-lite'
- import { runInAction } from 'mobx'

## ref
https://blog.openreplay.com/state-management-in-react-with-mobx

# Todo2
mobx-react
- useLocalStore
- useObserver

- runInAction : to change value of Store's obj
```javascript
//API fetch...
runInAction(() => {
    store.kakaoBlockNumber = kakaoBlockNumber
    store.blockNumber = remoteBlockNum
})
```

## ref
https://mobx-react.js.org/state-local
https://mobx.js.org/actions.html
