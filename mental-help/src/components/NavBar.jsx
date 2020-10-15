import React, { useEffect,useState  }  from "react";
import { Link } from "react-router-dom";


const buttonStyle = {
  fontFamily: 'Raleway',
  backgroundColor: "white",
  height:'35px',
  width: "50%",
  marginLeft: "40%",
  borderRadius: '10px',
   backgroundImage: 'linear-gradient(to bottom, rgba(165, 140, 126, 1), rgba(165, 140, 126, 1))',
   backgroundRepeat: 'repeat-x',
   borderColor: 'rgba(120, 97, 84, 1) rgba(120, 97, 84, 1) black',
   color: '#ffffff',
   textShadow: '0 -1px 0 rgba(0, 0, 0, 0.25)'
}

const List = ({style}) => {
  return <ul
    style={style}>
    <Link to="/components/Gratitude"
      style={{
        textDecoration: 'none',
        fontSize: '1.3rem',
        color: '#F3F2F5',
        fontFamily: 'Raleway',
        textShadow: '2px 2px 0 black'
      }}><li>Gratitude Log</li></Link>
    <Link to="/components/Rant" style={{textDecoration: 'none',
        fontSize: '1.3rem',
        color: '#F3F2F5',
        fontFamily: 'Raleway',
      textShadow: '2px 2px 0 black'
    }}><li>Rant</li></Link>
    <Link to="/components/Affirmations" style={{textDecoration: 'none',
        fontSize: '1.3rem',
        color: '#F3F2F5',
        fontFamily: 'Raleway',
      textShadow: '2px 2px 0 black'
    }}><li>Affirmations</li></Link>
    <Link to="/components/DoneList" style={{textDecoration: 'none',
        fontSize: '1.3rem',
        color: '#F3F2F5',
        fontFamily: 'Raleway',
      textShadow: '2px 2px 0 black'
    }}><li>Done List</li></Link>
    <Link to="/components/Resources" style={{textDecoration: 'none',
        fontSize: '1.3rem',
        color: '#F3F2F5',
        fontFamily: 'Raleway',
      textShadow: '2px 2px 0 black'
    }}><li>Resources</li></Link> 
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
          width:"60%",
          marginLeft: "130%",
          textDecoration: 'none',
          marginBottom: '100px',
          position: 'relative',
          paddingLeft: '35px',
          backdropFilter: `blur(10px)`,
          backgroundColor: 'rgba(169, 170, 173, 0.10)',
          borderRadius: '10px',
       }}/>}
    </>

  )
}

function NavBar(props) {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width:1024px)').matches);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.matchMedia('(max-width:1024px)').matches)
    })
  })
  return (
    <nav
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        alignItems: 'center',
        backgroundColor: '#8AA89B',
        backgroundImage: `url(${"/texture.png"})`,
        backgroundSize:'20%',
        borderRadius: '20px',
        height: '60px',
        
       
      }}>
      <Link to="/" style={{
        textDecoration: 'none',
        color: '#F3F2F5',
        marginLeft: '5%',
        textShadow: '2px 2px 0 black'
        // paddingTop:'3px'
      }}><h1 style={{marginTop: '15px', fontFamily: 'Raleway'}}>Homepage</h1></Link>
      
      {isMobile ? <MobileList /> : <List 
      style={{
        display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
          paddingRight: "10px",
          marginTop: '0px',
          paddingTop:'10px'
    }}
     /> }
     
   </nav>
  );
}

export default NavBar;
