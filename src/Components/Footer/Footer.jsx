import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="container overflow-hidden">
          <div className="row g-5 py-5">
            <div className="col-md-8">
              <div className="forecast-search position-relative">
                <form
                  action="https://formspree.io/f/xnqwwkdp"
                  method="post"
                >
                  <input
                    autoComplete="off"
                    className="w-100"
                    type="email"
                    placeholder="Email to subscribe..."
                    name="mail"
                  />
                  <button
                    className="text-white btn__primary position-absolute"
                    type="submit"
                  >
                    subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 offset-1">
              <div className="social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <p className="mt-4 text-white">
              Copyright 2023. All rights
              reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
