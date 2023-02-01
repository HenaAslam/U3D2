import { Component } from 'react'
import {Card , Col} from 'react-bootstrap'
class Single extends Component{
    state={
        selected:false,
       
    }
    render(){
        return(
            <Col xs={4} md={2} className="d-flex align-items-stretch mb-1" >
            
      
            <Card onClick={()=>{
                this.setState({selected:!this.state.selected,}
                    
                    )
            }}
            
            style={{ border: this.state.selected ? "3px solid red" : "none" }}
            >
                        <Card.Img variant="top" src={this.props.bookk?.img}/>
                             <Card.Body>
                                        <Card.Title style={{'fontSize': "10px"}}>{this.props.bookk ? this.props.bookk.title : ""}</Card.Title>
    
       
                            </Card.Body>
                    </Card>

            
                    </Col>
                

                  
        )
    }
   
}
export default Single