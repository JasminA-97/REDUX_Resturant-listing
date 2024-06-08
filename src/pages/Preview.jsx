import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { Tab, Table, Tabs } from 'react-bootstrap'

const Preview = () => {
  const {id} = useParams()
  const [resturant,setResturant] = useState({})
  useEffect(()=>{
    if(localStorage.getItem('resturantData')){
      const resturantData = JSON.parse(localStorage.getItem("resturantData"))
      setResturant(resturantData.find(item=>item.id==id))
    }
  },[])
  console.log(id);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star" style={{ color: 'orange' }}></i>
        ))}
        {[...Array(halfStars)].map((_, i) => (
          <i key={`half-${i}`} className="fas fa-star-half-alt" style={{ color: 'orange' }}></i>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star" style={{ color: 'orange' }}></i>
        ))}
      </>
    );
  };

  
  return (
    <>
    <Header/>
      <div style={{marginTop:"150px",height:'100vh'}} className="container d-flex justify-content-center align-items-center w-100">
        <div className="row  mb-5 w-75">
          <div style={{backgroundColor:'orange'}} className="col-lg-5 p-3 " st> <img width={'100%'} src={resturant?.photograph} alt="" /></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" >
              <Tab eventKey="operatingHours" title="Operating Hours">
                <Table className='table' striped bordered hover>
                  <thead>
                    <tr className='fs-5 custom-row-height'>
                      <th style={{color:'orange'}}>Days</th>
                      <th style={{color:'orange'}}>Operating Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='custom-row-height fs-6'>
                      <td >Monday</td>
                      <td>{resturant?.operating_hours?.Monday}</td>
                    </tr>
                    <tr className='custom-row-height fs-6'>
                      <td>Tuesday</td>
                      <td>{resturant?.operating_hours?.Tuesday}</td>
                    </tr>
                    <tr className='custom-row-height fs-6'>
                      <td>Wednesday</td>
                      <td>{resturant?.operating_hours?.Wednesday}</td>
                    </tr>
                    <tr className='custom-row-height fs-6'>
                      <td>Thursday</td>
                      <td>{resturant?.operating_hours?.Thursday}</td>
                    </tr>
                    <tr className='custom-row-height fs-6'>
                      <td>Friday</td>
                      <td>{resturant?.operating_hours?.Friday}</td>
                    </tr>
                    <tr className='custom-row-height fs-6'>
                      <td>Saturday</td>
                      <td>{resturant?.operating_hours?.Saturday}</td>
                    </tr>
                    <tr className='custom-row-height fs-6'>
                      <td>Sunday</td>
                      <td>{resturant?.operating_hours?.Sunday}</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="reviews" title="Reviews" style={{ maxHeight: '70vh', overflowY:'auto', padding: '10px' }}>
                {resturant?.reviews?.map((review,index)=>(
                  <div key={index}  >
                    <h5 style={{color:'orange'}}><i className="fa-solid fa-user"></i>{review?.name}</h5>
                    <h6>{review?.date}</h6>
                    <p> {renderStars(review?.rating)}</p>
                    <p>{review?.comments}</p>
                  </div>
                ))}
              </Tab>
              <Tab eventKey="contact" title="Contact" >
                <h5 style={{color:'orange'}}>Address</h5>{resturant?.address}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preview