import { Container, Row, Col } from "react-bootstrap"

const MyFooter=()=>{
return(

        <Container fluid className="mt-5">
            <Row className='justify-content-center  bg-dark' >
                <Col className='text-center' xs={12}  md={6} >
                    <footer className="page-footer font-small footer">
                        
                        <div className="footer-copyright text-center py-3">
                        <div className="links d-flex justify-content-center" style={{gap:"30px"}}>
                                <a href="google.com">Terms of Use</a>
                                <a href="google.com">Privacy Policy</a>
                            </div>
                              
                        <div className="icons d-flex justify-content-around mt-3">
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-twitter"></i>
                        </div>
                        </div>
                    </footer> 
                </Col>
            </Row>
        </Container>
)
}
export default MyFooter