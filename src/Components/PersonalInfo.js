import React, { Component } from "react";
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';
import Loader from 'react-loader-spinner'
import '../App.css'

class PersonalInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            showSearching: true,
            changeTitle: false
        }
    }

    componentDidMount(){
        let that = this
        setTimeout(function(){ 
            setTimeout(function(){ 
                that.setState({
                    showSearching: false
                })
            }, 2000)
            that.setState({
                changeTitle: true
            })
        }, 2000)
    }

    renderTyped(){
        if(this.state.showSearching){
            return(
                <div className="loader-container">
                    <Fade>
                        <Loader
                            type="Puff"
                            color="#7ec6e280"
                            height={30}
                            width={30}
                            timeout={4000}
                        />
                    </Fade>
                </div>
            )
        }
        else{
            return(
                <div className="info-text-container">
                    <Typed
                        className="info-text"
                        strings={[
                            'NAME: Sinisa Damjanovic\nEMAIL: sikidamjanovic@gmail.com\nSKILL: Full-stack Developer / Designer\nTOOLS: React, Javascript, HTML + CSS\n\nPROJECTS: \n - Cowrite.io [<a href="https://github.com/sikidamjanovic/cowrite">Repo</a>][<a href="https://www.cowrite.io">Demo</a>]\n - Kino Movie [<a href="">Repo</a>][<a href="">Demo</a>]\n - Reactriv [<a href="">Repo</a>][<a href="">Demo</a>]\n\n[<a id="bottom-link" href="https://github.com/sikidamjanovic" target="_blank">Github</a>] [<a id="bottom-link" href="https://www.linkedin.com/in/sinisa-damjanovic-673053bb/" target="_blank">LinkedIn</a>] [<a id="bottom-link" href="">Resume</a>]'
                        ]}
                        typeSpeed={5}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="info">

                <Fade>
                    {!this.state.changeTitle ?
                        <div>
                            <h1 className="info-title">SEARCHING...</h1>
                        </div> :
                        <Fade>
                            <div>
                                <h1 className="info-title">1 DEVELOPER(S) FOUND</h1> 
                            </div>
                        </Fade>
                    }
                </Fade>

                <div className="info-container">
                    <div className="info-corners-top">
                        <div className="info-corners-bottom"></div>
                    </div>
                    {this.renderTyped()}
                </div>
            </div>
        )
  }
}

export default PersonalInfo

// 'NAME: Sinisa Damjanovic\nSKILLS: React, Javascript, HTML + CSS\nOCCUPATION: Looking\nLINKS: Github, LinkedIn, Resume'