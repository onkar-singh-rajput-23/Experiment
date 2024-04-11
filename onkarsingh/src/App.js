// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import BasicExample from "./component/navbar/nav";
import React from "react";
import Footer from "./component/footer/footer";
import About from "./component/about/about";
// import Blogc from "./component/blog/blog";
import Ed from "./component/education/ed";
import Sk from "./component/skills/sk";
import Aoi from "./component/AOI/ao";
import Projects from "./component/projects/pr";
import Experience from "./component/experience/ex";

function App() {
  return (
    <div>
      <BasicExample />
      <About />
      {/* <Blogc /> */}
      <Ed />
      <Sk />
      <Aoi />
      <Projects />

      <Experience />

      <Footer />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>EmBiology</h1>
    //     <p>Explore biological relationships and pathways</p>
    //   </header>
    //   <main>
    //     <div className="search-box">
    //       <input type="text" placeholder="Search for genes, proteins, diseases, etc." />
    //     </div>
    //     <div className="results">
    //       <h2>Search Results</h2>
    //       {/* Results will be populated here based on user search */}
    //     </div>
    //   </main>
    //   <footer className="App-footer">
    //     <p>A resource from Elsevier</p>
    //   </footer>
    // </div>
  );
}

export default App;
