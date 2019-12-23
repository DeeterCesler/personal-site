import React, {Component} from "react";
import Allblogs from "./Allblogs";

const backendURL = process.env.REACT_APP_BACKEND_SERVER_ADDRESS || "https://followup-v1.herokuapp.com/";

class AllblogsContainer extends Component {
    constructor(props){
        super();
        this.state = {
            loaded: false,
            email: "deeter.cesler@gmail.com"
        }
    }
    
    getAllblogs = async () => {
        console.log("tryna pull blogs")
        try{
            const pull = await fetch(backendURL + "blog/" + this.state.email,{
                headers: {
                    "authorization": localStorage.getItem("token")
                }
            });
            const parsedPull = await pull.json();
            let names = parsedPull.data.filter(item => item.blogName);
            this.setState({ // need to refactor this out since this component is now functional
                info: parsedPull.data,
                loaded: true,
                completeData: names
            });
            return parsedPull
        } catch(err){
            console.log("whoops lol")
            console.log("error:", err);
        }
    }

    componentDidMount = async () => {
        if(this.state.email !== undefined){
            this.getAllblogs();
        }
    }
    
    render(){
        return (
            <div className="background">
                {this.state.loaded? console.log("blogs: ", this.state.info): <p>not loaded</p>}
                <div className="spacer"/>
                <div className="container blogs-container large-view">
                    <div className="tiny-spacer"></div>
                    <div className="row">
                        <div className="col-lg"><strong>Name:</strong></div>
                        <div className="col-sm"><strong>Topic discussed:</strong></div>
                        <div className="col-lg"><strong>Read</strong></div>
                    </div>
                    {
                        this.state.loaded
                        ? 
                        this.state.completeData.map((data)=>{
                            return <Allblogs data={data} key={data._id} loggedIn={this.props.loggedIn}/> 
                        })
                        : 
                        <div>
                            <p>not loaded</p>
                        </div>
                    }
                </div>
                <div className="container small-view">
                    {
                        this.state.loaded
                        ?
                        this.state.completeData.map((data)=>{
                            return <Allblogs data={data} key={data._id} loggedIn={this.props.loggedIn}/> 
                        })
                        : 
                        <div>
                            <p>not loaded</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default AllblogsContainer;