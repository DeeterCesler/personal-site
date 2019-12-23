import React, {Component} from "react";
import Allblogs from "./Allblogs";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS || "https://followup-v1.herokuapp.com/";

class AllblogsContainer extends Component {
    constructor(props){
        super();
        this.state = {
            loaded: false,
            info: ""
        }
    }
    
    getAllblogs = async () => {
        console.log("tryna pull blogs")
        try{
            const pull = await fetch("http://localhost:3000/" + "blog/email");
            const parsedPull = await pull.json();
            console.log(parsedPull)
            this.setState({
                info: parsedPull.data,
                loaded: true,
            });
            return parsedPull
        } catch(err){
            console.log("whoops lol")
            console.log("error:", err);
        }
    }

    componentDidMount = async () => {
        this.getAllblogs();
    }
    
    render(){
        return (
            <div className="background">
                {this.state.loaded? console.log("blogs: ", this.state.info): <p>not loaded</p>}
                <div className="spacer"/>
                <div className="container blogs-container">
                    <div className="tiny-spacer"></div>
                    <div className="large-view">
                    <div className="row ">
                        <div className="col-lg"><strong>Name:</strong></div>
                        <div className="col-sm"><strong>Topic discussed:</strong></div>
                        <div className="col-lg"><strong>Read</strong></div>
                    </div>
                    </div>
                    {
                        this.state.loaded
                        ? 
                        this.state.info.map((data)=>{
                            return <Allblogs data={data} key={data._id} loggedIn={this.props.loggedIn}/> 
                        })
                        : 
                        <div>
                            <p>not loaded</p>
                        </div>
                    }
                    <div className="tiny-spacer"></div>
                </div>
                
                {/* <div className="container small-view">
                    {
                        this.state.loaded
                        ?
                        this.state.info.map((data)=>{
                            return <Allblogs data={data} key={data._id} loggedIn={this.props.loggedIn}/> 
                        })
                        : 
                        <div>
                            <p>not loaded</p>
                        </div>
                    }
                </div> */}
            </div>
        )
    }
}

export default AllblogsContainer;