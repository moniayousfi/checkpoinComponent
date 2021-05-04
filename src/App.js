import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js'
import FullName from './Component/Profile/FullName.js'
import Address from './Component/Profile/Address.js'
function App() {
  return (
    <div className="container">
    <div className="card">
      <ProfilePhoto/>
      <p class="card__name"><FullName/></p>
      

       <Address/>
  
    
      <ul className="social-icons">
        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
        <li><a href="#"><i className="fa fa-codepen"></i></a></li>
      </ul>
     
  </div>
   
    
     </div>
      
  
  
  );
}

export default App;
