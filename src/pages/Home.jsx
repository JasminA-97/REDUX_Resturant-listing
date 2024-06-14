import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Card, Col, Pagination, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturantData } from '../redux/resturantSlice'

const Home = () => {
 const dispatch = useDispatch();
 const {resturantData,loading,error} = useSelector(state=>state.resturantReducer);
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 3; // Adjust the number of items per page as needed

 useEffect(()=>{
  dispatch(fetchResturantData())
 },[])

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = resturantData.slice(indexOfFirstItem,indexOfLastItem);
  
 // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='bg-white'>
      <Header insideHome={true}/>
      <div className="container p-5 " style={{marginTop:'70px'}}>
        {
          loading?
            <div style={{marginTop:'150px',marginBottom:'150px'}} className="text-center">
             <Spinner animation="border" variant="primary" /> Loading...
            </div>
          :
          <Row className='my-3'>
            {
              currentItems.length>0?
              currentItems?.map(resturant=>(
                <Col key={resturant?.id} className='mb-5' sm={12} md={6} lg={4} >
                  <Card className='shadow card-container bg-white ms-3 me-3 rounded-4'>
                    <Link to={`/preview/${resturant?.id}`}>
                     <Card.Img height={'450px'} variant="top" src={resturant?.photograph} />
                    <div className="card-overlay">
                      <h2>{resturant?.name}</h2>
                      <h4>{resturant?.cuisine_type}</h4>
                    </div>
                    </Link>
                  </Card>
              </Col>
              ))
              :
              <div className="m-3 text-center text-danger">No restaurants found</div>
            }     
          </Row> 
        }
        <Pagination className='custom-pagination d-flex justify-content-center align-items-center flex-wrap'>
          <Pagination.First  onClick={() => paginate(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(Math.ceil(resturantData.length / itemsPerPage)).keys()].map(number => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(resturantData.length / itemsPerPage)} />
          <Pagination.Last onClick={() => paginate(Math.ceil(resturantData.length / itemsPerPage))} disabled={currentPage === Math.ceil(resturantData.length / itemsPerPage)} />
        </Pagination>
      </div>
    </div>
  )
}

export default Home