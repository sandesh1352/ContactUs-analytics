import React, { useState } from "react";
import Contact from "./Contact";
import Analytics from "./Analytics";

function Home(props) {
  const [views, setViews] = useState(false);
  
  const Logout= () => {
      localStorage.clear()
      window.location.href = '/';
  }

  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand" href="#">
          SandyMan
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            
            <button
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                paddingLeft: "30px",
                PaddingRight: "30px",
              }}
              className="btn btn-dark btn-md"
              onClick={() => {
                setViews(!views);
              }}
            >
              Contact
            </button>
            
            
            <button
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                paddingLeft: "30px",
                PaddingRight: "30px",
                cursor:"pointer",
                // borderRadius:"55%",
              }}
              className="btn btn-dark btn-md"
              onClick={() => {
                setViews(!views);
              }}
            >
              Analytics
            </button>
           

            <button
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                paddingLeft: "30px",
                PaddingRight: "30px",
              }}
              className="btn btn-dark btn-md"
              onClick={() => {Logout()}}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      
      {views ? (
    <div>
      <Analytics />
    </div>
  ) : (
    <div>
      <Contact />
    </div>
  )}

    </div>
  );
  
}
export default Home;
