import React, { useEffect,useState  }  from "react";
import { Link } from "react-router-dom";

const buttonStyle = {
  backgroundColor: "grey",
  width: "50%",
  marginLeft:"40%"
}

const List = ({style}) => {
  return <ul
    style={style}>
    <Link to="/components/Gratitude"><li>Gratitude Log</li></Link>
    <Link to="/components/Rant"><li>Rant</li></Link>
    <Link to="/components/Affirmations"><li>Affirmations</li></Link>
    <Link to="/components/DoneList"><li>Done List</li></Link>
    <Link to="/components/Resources"><li>Resources</li></Link> 
      </ul>
}

const MobileList = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setActive(!active)
        }}
      style={buttonStyle}>
      {active ? "Close" : "Show"}   Menu
        </button>
      {active && <List
       style={{
        display: "flex",
          justifyContent: "center",
          flexDirection:"column",
        listStyle: "none",
        paddingBottom:'10px',
      width:"100%",
      marginLeft:"100%",
    }}/>}
  </>

  )
}

function NavBar(props) {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width:768px)').matches);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.matchMedia('(max-width:768px)').matches)
    })
  })
  return (
    <nav
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        alignItems:'center',
      }}>
      <Link to="/"><h1>Homepage</h1></Link>
      
      {isMobile ? <MobileList /> : <List 
      style={{
        display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          paddingRight:"10px",
    }}
     /> }
     
   </nav>
  );
}

export default NavBar;
