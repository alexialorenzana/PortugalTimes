import React from "react";
import {useState} from "react";
import Axios from "axios";

function Database(){
    //setting our initial state, declaring variables
    const [usernameReg, setUsernameReg] = useState('')
    const [emailReg, setemailReg] = useState('')
    const register = () => {
    Axios.post("http://localhost:3001/register", {username: usernameReg, email: emailReg}).then((response) => console.log(response))
    } //from axios.post it goes to our register port, to send that information
return(
        <div>
            <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="newsletter">
        <h6>Subscribe to our Newsletter</h6>
        <p class="text-justify">Get all the top news stories and alert straight to your inbox.</p>
        </div>
        </div> 
<label>Name: </label>
{/* targetting our users input values */}
<input type="text" onChange={
(e)=> {setUsernameReg(e.target.value)
}}></input>
<label> Email: </label>
<input type="text" placeholder="@gmail.com" onChange={
(e)=> {setemailReg(e.target.value)
}}></input>
<br/>
<br/>
<button onClick={register}> Register </button>
</div>


   {/* footer manual html code, with links */}
<div class="categories">
        <h6>Categories</h6>
        <ul class="footer-links-categories">
          <li><a href="https://www.theportugalnews.com/news/politics">Politics</a></li>
          <li><a href="https://www.theportugalnews.com/news/crime">Crime</a></li>
          <li><a href="https://www.theportugalnews.com/news/education">Education</a></li>
          <li><a href="https://www.theportugalnews.com/news/environment">Environment</a></li>
          <li><a href="https://www.theportugalnews.com/news/opinion">Opinion</a></li>
          <li><a href="https://www.theportugalnews.com/news/entertainment">Entertainment</a></li>
        </ul>
      </div>


      <div class="editors">
            <h6>Contact Editors</h6>
            <ul class="footer-links-editors">
              <li><a href="https://www.linkedin.com/in/alexia-lorenzana">Alexia</a></li>
              <li><a href="https://www.linkedin.com/in/alannahgregory">Alannah</a></li>
              <li><a href="https://www.linkedin.com/in/ktaylorii/">Kevin</a></li>
              <li><a href="https://www.linkedin.com/in/eduardo-davila-nava-904841257/">Eduardo</a></li>
              <li><a href="https://www.theportugalnews.com/terms-and-conditions">Privacy Policy</a></li>
            </ul>
          </div>


          <div class="license">
    <div class="row">
      <div class="copyright">
        <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by <a href="#">Portugal Times</a>.</p>
      </div>
<div class="socials">
        <ul class="social-icons">
          <li><a class="facebook" href="#https://www.facebook.com/"><img src="images/facebook.jpg"></img></a></li>
          <li><a class="twitter" href="https://twitter.com/intent/tweet?text=Hello%20world"><img src="images/twitter.jpg"></img></a></li>
          <li><a class="linkedin" href="linkedin.com"><img src="images/linkedin.jpg"></img></a></li>   
        </ul>
      </div>
    </div>
</div>
</footer>
</div>
     );
}
export default Database;   


//




















