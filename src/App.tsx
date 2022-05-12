import {useState} from "react";
import {Tweet} from "./Components/tweeet";
import './App.css'
import {AppRoutes} from "./Routers";

function App() {
  // const [tweets, setTweets] = useState<string[]>([
  //     'tweet 1',
  //     'tweet 2'
  // ])

  // function createTweet(){
  //   console.log('ola')
  //   setTweets([...tweets, 'oi'])
  // }
  return (
      <AppRoutes/>
      // <div>
      //   {
      //     tweets.map(tweet=>{
      //       return <Tweet text={tweet}/>
      //     })}
      //
      //   <button
      //       onClick={createTweet}
      //       style={{
      //         backgroundColor:"red",
      //         border: 0,
      //         borderColor:'#FFF'
      //       }}>Adicionar tweet</button>
      // </div>
  );
}

export default App

// gerencia de dados (REDUCER + CONTEXT)