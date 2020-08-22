import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
var person ={
  name : "Azizur" ,
  last : "Rahman"

}
const makup={
  color:'red',
  fontFamily:'cooper',
  fontSize:'2em'
}

function App() {
  const Friend =['Azizur','Hasin','Zahid','Tipu','shishir','fahim']


 const Items= [{ name : 'T-shirt', price:'230tk'},
              
               { name :"Pant" , price:'1620tk'},
              
             
               { name :'Denim', price:'2130tk'}
              
              ]
  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LikeCount></LikeCount>
        <h1 style={makup}>real hero :{person.name +" "+ person.last +","}   </h1>
        <Easy name={Friend[0]}last="Rahman"height="5.7`" Job="Online"></Easy>
        <Easy name="Tipu"last="Sultan"height="5.4`" Job="Germents"></Easy>
        <Easy name="Zahid"last="Hasan"height="5.6`" Job="Hospital"></Easy>
        <Easy name={Friend[1]}last="Rayhan"height="5.2`" Job="Jobless"></Easy>
       <div>
        {
          Friend.map(frnd => <li>{frnd}</li>)
        }
       </div>
      <ul>
        {
          Items.map(pd => <Product Item={pd}></Product>)
        }
      </ul>
        <Users>

        </Users>
       
        
      </header>
    </div>
    
  ); 
}

function Easy(props){
  const style ={
    backgroundColor:"light-orange",
    color:"tomato",
    fontSize:"1em",
    border:"2px dotted blue",
    padding:"5px",
    width:"500px"
  }
  return <div style={{border:'5px solid grey', margin:'10px 5px' , padding:'10px'}}>
    <h1 style={style}>Name: {props.name} {props.last} </h1>
    <h1 >Height  : {props.height}</h1>
    <h3 style={{color:'cyan',margin:'20px 0px'}}>Job: {props.Job}</h3>


  </div> 
}
function Product(props){
  const cartStyle = {
    width:"200px",
    height:"auto",
    backgroundColor:'lightGrey',
    justifyContent:'center',
    border:"2px solid grey",
    borderRadius:"5px",
    margin:"40px 5px",
    padding:"20px",
    color:"black",
    float:'left'

  }
  return (<div style={cartStyle}>
<h1> Product: {props.Item.name}</h1> 
 <h2>price : {props.Item.price}</h2>
<button  style={{backgroundColor:'orange',borderRadius:'3px'}}>Buy Now</button>
</div>);
}

function LikeCount(){
  const [count , setCount] = useState(0);
  const like =() =>{
    const newCount = count + 1
    setCount(newCount)
  }
  const disLike=()=>{
    const disLikeAmount = count - 1
    setCount(disLikeAmount)
  }
  return (<div>
    
  <h1>Total Like :{count} </h1>
  {/* <h1>Total Dislike : {count-2}</h1> */}
    <button onClick={like}>Like</button>
    <button onClick={disLike}>Dislike</button>
    
  </div>)

}

function Users(){
 const [users , setUsers ] = useState([]);
 useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
   .then(res => res.json())
   .then(data => setUsers(data))
 },[])

 console.log(users);
 const cartStyle = {
  width:"200px",
  height:"auto",
  backgroundColor:'lightGrey',
  justifyContent:'center',
  border:"2px solid grey",
  borderRadius:"5px",
  margin:"40px 5px",
  padding:"20px",
  color:"black",
  float:'left'

}
  return (
  <div>
    <h1>total : {users.length}</h1>
    <ul >
      {
        users.map(user =><div style={cartStyle}>{user.body}</div>)
      }
    </ul>
  </div>
    )

}
export default App;
