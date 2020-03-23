import React, { Component } from 'react'
export default function withErrorHand(OrigComp, axios) {

 
    return (class extends Component {
        state = {
            error: null,
            // loading: false
        }
        // shouldComponentUpdate(nextProps, nextState, nextContext) {
        //     return nextState.error != this.state.error || nextState.loading != this.state.loading
        // }

        componentDidCatch(error){
            console.log("1", error);
            this.setState({
                error: error,
                // loading: false
            })
        }

        constructor(){
            super()
            this.respInter = axios.interceptors.response.use(resp=> {
                console.log("hummmm", resp);
                this.setState({
                    // loading: false,
                })                
                return resp;
            }, (err) => {
                console.log(err);
                console.log(err.response);
                // console.log("2", err.response.data.errors);
                let msg = "";
                if(err.response && err.response.data && err.response.data.errors){
                    Object.keys(err.response.data.errors).forEach( k1 => {
                        msg += err.response.data.errors[k1].message + "\n";
                    })    
                }
                this.setState({
                    error: err.message + "\n"  + msg
                })                
            })            
            this.reqInter = axios.interceptors.request.use(config => {
                const token = localStorage.getItem("token");
                console.log(token)                
                config.headers["Authorization"] = "Bearer " + token;
                this.setState({
                    // loading: true,
                })                
                return config;
            })

        }

        
        componentWillUnmount() {
            axios.interceptors.response.eject(this.respInter)
            axios.interceptors.response.eject(this.reqInter)
        }
        

        render() {
            if(this.state.error){
                return <h1 style={{color:'red'}}>{this.state.error}</h1>
            }
            else  if(this.state.loading){
                return <h1 style={{color:'blue'}}>Loading.....</h1>
            } else {
                return (
                    <OrigComp {...this.props} />
                )    
            }
        }
    }
    )
}
