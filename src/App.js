import React, {Component} from 'react';
import Header from './components/Header';
import Body from "./components/Body";
import Api from "./components/Api";
import Database from './components/Database';
import './App.css';
class App extends Component {
 constructor(props){
  super(props);
  this.state = {
    posts:[]
  }
 }
 componentDidMount(){
  // api call
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a7401452e2mshac5e3573232a1afp1c7d42jsn283008a4ed99',
      'X-RapidAPI-Host': 'ranked-crime-cities.p.rapidapi.com'
    }
  };
  fetch('https://ranked-crime-cities.p.rapidapi.com/Kc4Qth/ranked_crime_cities', options).then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
 }
 render(){
  const {posts} = this.state;
  // console.log({posts});
  // map method
  // const mapping = posts.data.map(post => console.log(post) );
  if (!posts && !posts.data && posts.data.length <= 0) {
    return null
  }
  return (
    <div className="App">
<Header/>
<Body/>
<Api/>
<Database/>
{/* Api from cities is not popultaing from world crimes */}
        {/* if post is undefined stop evaluating  */}
        {posts?.data?.map(post => <div key={post.id}>
            <p>{console.log(post.Name)}</p>
          {/* <img src={post.image} alt={post.source}></img><p>{post.title}</p> */}
          </div>)
}
    </div>
  )
}
}
export default App;







