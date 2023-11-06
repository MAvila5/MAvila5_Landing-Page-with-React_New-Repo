import React from 'react';

const Cards = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://picsum.photos/100/75" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://picsum.photos/100/75" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://picsum.photos/100/75" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://picsum.photos/100/75" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;