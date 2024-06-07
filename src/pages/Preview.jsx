import React from 'react'
import Header from '../components/Header'

const Preview = () => {
  return (
    <>
    <Header/>
    <div style={{marginTop:"150px",height:'40vh'}} className="container d-flex justify-content-center align-items-center w-100">
      <div className="row align-items-center mb-5 w-100">
        <div className="col-lg-5"> <img width={'100%'} src="" alt="" /></div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6"><h3>heading</h3></div>
      </div>
    </div>
    </>
  )
}

export default Preview