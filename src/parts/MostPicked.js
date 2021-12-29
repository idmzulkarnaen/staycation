import React from "react";

export default function MostPicked(props) {
  return (
    <section className="container">
      <h3 className="mb-3">Mostpicked</h3>
      <div className="row">
        <div className="col-4">
          <div className="card h-100"></div>
        </div>
        <div className="col-8">
          <div className="row mb-3">
            <div className="col-6">
                <div className="card">Card 1</div>
            </div>
            <div className="col-6">
                <div className="card">Card 2</div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
                <div className="card">Card 3</div>
            </div>
            <div className="col-6">
                <div className="card">Card 4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
