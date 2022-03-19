import React from "react"
import Header from "./Header";
// const Home=()=>{
//     return(
//         <div className="card" style="width: 18rem;">
//         <img src="#" className="card-img-top" alt="new image"></img>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     );

// };
const Home = () => {
  return (
    <>
    <Header />
    <br/>
<div className="card-deck">
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</>
  );
}

export default Home;

