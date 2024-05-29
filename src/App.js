import './App.css';
import home from './img/home.png';
import phone from './img/phone.png';
import wifi from './img/wifi.png';
import loc from './img/location.png';

function handleClick(e){
  let arr = e.target.parentNode.childNodes;
  for(let node of arr){
    if(node!=e.target){
      node.classList.remove("active");
    }
  }
  e.target.classList.add("active");
}
function App() {


  return (
    <div className="App">
      <div className='navbar'>
        <div className='active icon' onClick={(e)=>{handleClick(e)}}><div><img src={home}/></div></div>
        <div className='icon' onClick={(e)=>{handleClick(e)}}><div><img src={phone}/></div></div>
        <div className='icon' onClick={(e)=>{handleClick(e)}}><div><img src={wifi}/></div></div>
        <div className='icon' onClick={(e)=>{handleClick(e)}}><div><img src={loc}/></div></div>
      </div>
    </div>
  );
}

export default App;
