const Nav = () => {


    return <div className="header">
    <div>
      <img src="brand_logo.png" alt="nike_logo" className="img" />
    </div>
    <div className="menu"> 
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Location</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#services">About</a></li>
      </ul>
      </div>  
      <div>
      <button className="btn1"> Login</button>
      </div>
  </div>
}

export default Nav