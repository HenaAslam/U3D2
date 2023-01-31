import { Component } from "react"
import { Container, Row, Col , Card, Badge } from "react-bootstrap"
import items from '../data/books/horror.json'



 



class AllTheBooks extends Component{
    state={
        selectedBook:null,
    }
    render(){
        return(
            <Container >
            <Row className="justify-content-center">
                
                    {
                        items.map((book)=>{
                            return(
                                <Col xs={4} sm={2} lg={1} key={book.asin} className="d-flex align-items-stretch mx-n3" onClick={()=>{
                                    this.setState({selectedBook:book,})
                                }}>
                                <Card>
                                    <Card.Img variant="top" src={book.img} className="image" />
                                </Card>
                                </Col>
                            )
                        })
                    }
                    
               
            </Row>
            <Container className="d-flex justify-content-center">
            <Row className="mt-4 justify-content-center single-card">
            <Col className="text-center " >
                <Card>
                    <Card.Img variant="top" src={this.state.selectedBook?.img} className="single-book"/>
                         <Card.Body>
                                    <Card.Title>{this.state.selectedBook ? this.state.selectedBook.title : ""}</Card.Title>
                                    <Card.Text>
                                    <Badge variant="danger">{this.state.selectedBook?.price}</Badge>{' '}
                                </Card.Text>
   
                        </Card.Body>
                </Card>

            </Col>
            </Row>
            </Container>
        </Container>
        )
    }
    
   
}
export default AllTheBooks