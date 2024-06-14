import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { Tab, Table, Tabs } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';
import profilepic from '../assets/profilepic.png'



const Preview = () => {
  const {id} = useParams()
  const [resturant,setResturant] = useState({})
  useEffect(()=>{
    if(localStorage.getItem('resturantData')){
      const resturantData = JSON.parse(localStorage.getItem("resturantData"))
      setResturant(resturantData.find(item=>item.id==id))
    }
  },[id])
  console.log(id);


  return (
    <>
    <Header/>
        <div style={{marginTop:"150px",height:'100vh'}} className="container">
        
        <div  className=" d-flex justify-content-center align-items-center w-100 flex-wrap">
          
          <div className="row  mb-5 w-100">
            <div style={{backgroundColor:'orange'}} className="col-lg-5 p-3 photograph"> <img className='photograph' width={'100%'} height={'100%'} src={resturant?.photograph} alt="" />
            </div>
            <div className="col-lg-1 "></div>
            <div className="col-lg-6 photograph">
            <div style={{fontFamily:"serif",color:'orange'}} className=' mb-5'>
              <h5>id: {resturant?.id}</h5>
              <h2>{resturant?.name}</h2>
              <h5>Neighborhood: {resturant?.neighborhood}</h5>
              <h5>Cuisine_type: {resturant?.cuisine_type}</h5>
            </div>
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
                <Tab eventKey="reviews" title="Reviews" className='custom-scrollbar' style={{ maxHeight: '70vh', overflowY:'auto', padding: '10px' }}>
                  {resturant?.reviews?.map((review,index)=>(
                    <div key={index}  >
                      <div className='d-flex pb-2 pt-4 flex-wrap'>
                        <div><img width={'80px'} height={'80px'} src={profilepic} alt="" /></div>
                        <div className='ms-5'>
                          <h5 style={{color:'orange'}}>{review?.name}</h5>
                          <h6>{review?.date}</h6>
                          <div>
                          <ReactStars
                              count={5}
                              value={review?.rating}
                              edit={false}
                              size={24}
                              activeColor="orange"
                              isHalf
                            />
                          </div>
                        </div>
                      </div>
                      <p style={{textAlign:'justify'}} className='pb-5  pe-2'>{review?.comments}</p>
                    </div>
                  ))}
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                  <h5 style={{color:'orange'}}>Address</h5>{resturant?.address}
                </Tab>
                {/* integrating map */}
                <Tab eventKey="maps" title="Map" >
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10!2d0.0!3d0.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDU5JzA4LjAiTiAwMMKwMjUnMzQuMyJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                    allowFullScreen>
                  </iframe>
                </Tab>
              
              </Tabs>
            </div>
          </div>
        </div>
 </div>
    </>
  )
}

export default Preview