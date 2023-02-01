import fantasy from '../data/books/fantasy.json'
import Single from './Single'
import { Row, Container , Form, Col} from 'react-bootstrap'
import { Component } from 'react'








class BookList extends Component{
    state={
        search:'',
        
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
                console.log(this.state.search)
                
              }}/>
            
            </Form.Group>
          
              
          </Form>
                    </Col>
                </Row>
                 
                    <Row className="mt-4 ">

          

   


       {
       
            // fantasy.map((book)=>{
            //     return(
            //         <Single bookk={book} key={book.asin} />
            //     )
            // })


            fantasy.filter((b)=>
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

