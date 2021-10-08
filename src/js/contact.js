import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <div class="container-fluid body_abc">
        <div class="row">
          <div class="col-sm">
            <section className="section col-6">
              <h2>CONTACT US</h2>
              <h3>Address</h3>
              <p>Swing by for a cup of coffee, or whatever.</p>
              <i class="fas fa-map-marker-alt"></i>Chicago, US <br />
              <i class="fas fa-phone"></i>+00 1515151515
              <br />
              <i class="fas fa-envelope"></i>test@test.com
              <br />
            </section>
          </div>
          <div class="col-sm">
            <form style={{border:"2px solid black", marginTop:20 ,boxShadow: "4px 12px 64px -21px rgba(0,0,0,0.75)"}}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I like It
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
