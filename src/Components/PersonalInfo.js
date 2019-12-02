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
            }, 1000)
            that.setState({
                changeTitle: true
            })
        }, 1000)
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
                            '<span id="label">NAME:</span> Sinisa Damjanovic\n<span id="label">EMAIL:</span> sikidamjanovic@gmail.com\n<span id="label">LOCATION:</span> Toronto Area\n<span id="label">SKILL:</span> Web Developer / Designer\n<span id="label">TOOLS:</span> React, Javascript, HTML + CSS\n\n<span id="label">PROJECTS:</span> \n - Cowrite.io [<a target="_blank" href="https://github.com/sikidamjanovic/cowrite">Repo</a>][<a target="_blank" href="https://www.cowrite.io">Demo</a>]\n - Kino Movie [<a target="_blank" href="https://github.com/sikidamjanovic/kino">Repo</a>][<a target="_blank" href="https://kino-7425a.firebaseapp.com/">Demo</a>]\n - Reactriv [<a target="_blank" href="https://github.com/sikidamjanovic/reactriv">Repo</a>][<a target="_blank" href="https://reactriv.firebaseapp.com/">Demo</a>]\n\n<span id=label>LINKS: </span>[<a id="bottom-link" href="https://github.com/sikidamjanovic" target="_blank">Github</a>] [<a id="bottom-link" href="https://www.linkedin.com/in/sinisa-damjanovic-673053bb/" target="_blank">LinkedIn</a>] [<a id="bottom-link" href="">Resume</a>] '
                        ]}
                        typeSpeed={1}
                    />
                </div>
            )
        }
    }

    expandStyle(){
        if(this.state.changeTitle){
            return null
        }else{
            return({
                width: '30px'
            })
        }
    }

    render() {
        return (
            <div className="info">

                <Fade>
                    {!this.state.changeTitle ?
                        <div>
                            <h1 className="info-title">SEARCHING DATABASE</h1>
                        </div> :
                        <Fade>
                            <div>
                                <h1 className="info-title">1 DEVELOPER(S) FOUND</h1> 
                            </div>
                        </Fade>
                    }
                </Fade>

                <div style={{ display: 'flex', flexDirection: 'row' }}>

                    <div className="info-container" style={this.expandStyle()}>
                        <div className="info-corners-top">
                            <div className="info-corners-bottom"></div>
                        </div>
                        {this.renderTyped()}
                    </div>

                </div>

            </div>
        )
  }
}

export default PersonalInfo

// 'NAME: Sinisa Damjanovic\nSKILLS: React, Javascript, HTML + CSS\nOCCUPATION: Looking\nLINKS: Github, LinkedIn, Resume'