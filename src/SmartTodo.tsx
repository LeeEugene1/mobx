import React from 'react'
import {useLocalStore, useObserver, Observer} from 'mobx-react'

function SmartTodo() {
  const store = useLocalStore(()=>({
    title:'Click to toggle',
    done:false,
    toggle(){
      store.done = !store.done
    },
    get emoji(){
      return store.done ? '😜' : '🏃'
    }
  }))
  // return useObserver(()=>(
  //   <h2 onClick={store.toggle}>
  //     {store.title}{store.emoji}
  //   </h2>
  // ))
  return (<>
    <Observer>
      {
        () => {
          return <>
            <h2 onClick={store.toggle}>
              {store.title}{store.emoji}
            </h2>
          </>
        }
      }
    </Observer>
  </>
  )
}

export default SmartTodo