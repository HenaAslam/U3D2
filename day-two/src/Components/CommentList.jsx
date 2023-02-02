import { Component } from "react";
import { ListGroup , Spinner, Alert, Button} from "react-bootstrap";

class CommentList extends Component{
    

    state={
        comments : [],
        isLoading:true,
        isError:false,
    }
  
 
// https://striveschool-api.herokuapp.com/api/comments/:elementId

  
    fetchComments=async()=>{
        try{
           
            let response=await fetch (" https://striveschool-api.herokuapp.com/api/comments/"+this.props.id,{headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzUzMzkzOTEsImV4cCI6MTY3NjU0ODk5MX0.E3m_mPnlfAunzuI_mq8omy-G0FIO0pqc-fgXDp1vONY"     }} )
            if(response.ok){
                let data=await response.json()
                this.setState({
                    comments:data,
                    isLoading:false
                })
            }
            else{
                this.setState({isError:true,
                    isLoading:false})
               
            }
           
        }
        catch(error){
            this.setState({isError:true,isLoading:false})
          
            
        }
    }
    componentDidMount(){
        this.fetchComments()
    }
    render(){
        return(
            <>
            {this.state.isLoading &&   ( <div className="d-flex justify-content-center"><Spinner animation="border" variant="secondary"  /></div>)}
            {this.state.isError &&   ( <div className="d-flex justify-content-center mt-1"><Alert variant="danger">Something's Wrong..😒</Alert></div>)}
            <ListGroup>
                {this.state.comments.map((c)=>{
                    return     <ListGroup.Item key={c._id}>{c.comment} | Rating : {c.rate}
                  
                     <Button variant="outline-danger" size="sm"  onClick={(c) => {
                  console.log(c)
                  
                }}>Delete</Button></ListGroup.Item>
                })}
           
          </ListGroup>
            </>
          
        )
    }
}
export default CommentList