import './header.css'
function Header(){
    let loggedin = false;
    return(
      <div className='navbar'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Careers</li>
              { loggedin ? (<li>Logout</li>): (<li>Login</li>)}
             
            </ul>
      </div>
    )
  }

  export default Header;