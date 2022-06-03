import { Link } from 'react-router-dom'

function Footer(props) {
    // inline style for the nav tag
    const navStyle = {
      display: "flex",
      justifyContent: "space-around",
      border: "3px solid black",
      padding: "8px",
      width: "90%",
      margin: "auto",
    }

    return (
      <footer>
          <br/>
        <nav style={navStyle}>
          
          <a href='https://www.linkedin.com/in/germanokuerten/'>LinkedIn</a>
          <a href='https://github.com/germanokuerten'>GitHub</a>
        

        </nav>
      </footer>
    )
}
  
  export default Footer;
  