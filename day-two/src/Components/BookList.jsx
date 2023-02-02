import fantasy from '../data/books/fantasy.json'
import history from '../data/books/history.json'
import horror from '../data/books/horror.json'
import romance from '../data/books/romance.json'
import scifi from '../data/books/scifi.json'

import Single from './Single'
import { Row, Container , Form, Col, Button} from 'react-bootstrap'
import { Component } from 'react'


class BookList extends Component{
    state={
        search:'',
        genre:"Fantasy",
        renderbook:fantasy,
        
    }
    render(){
        
        

        return(
          
            <Container className=" mb-5 mt-5">
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                    <Form>
            <Form.Group >
              
              <Form.Control type="text" placeholder="Search" value={this.state.search} onChange={(e)=>{
                this.setState({search:e.target.value})
          
                
              }}/>
            
            </Form.Group>
          
              
          </Form>
                    </Col>
                </Row>
                <Container className="d-flex justify-content-around mb-4">
                 
                <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"Fantasy",
                           renderbook:fantasy
                        })
                     }}>Fantasy</Button>

                      <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"History",
                           renderbook:history
                        })
                     }}>History</Button>

                      <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"Horror",
                           renderbook:horror
                        })
                     }}>Horror</Button>

                      <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"Romance",
                           renderbook:romance
                        })
                     }}>Romance</Button>
                      <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"Sci-Fi",
                           renderbook:scifi
                        })
                     }}>Sci-Fi</Button>


</Container>
<h3>{this.state.genre}</h3>
                    <Row className="mt-4 ">
       {
       
            this.state.renderbook.filter((b)=>
                    b.title.toLowerCase().includes(this.state.search)
            )
            .map((b)=>
            <Single bookk={b} key={b.asin} />
            )
            }

                         </Row>
                    </Container>
        )
    }
    

}
export default BookList

