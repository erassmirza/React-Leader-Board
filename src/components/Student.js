import React, { Component } from 'react';
import './Student.css';

export class Student extends Component {

    constructor() {
        super();
        this.state = {
            score: 0,
            success: false,
            failure: false
        }
    }

    componentDidMount () {
        this.setState (
            {
                score: this.props.score
            }
        ) 
    }

    addScore() {
        this.setState (
            {
                score : this.state.score+1
            },
            () => {
                if (this.state.score >= 350) {
                    this.setState (
                        {
                            success: true
                        }
                    )
                }
                
            }
        )
    }
    subtScore() {
        this.setState (
            {
                score : this.state.score-1
            },
            () => {
                if (this.state.score < 340) {
                    this.setState (
                        {
                            failure: true
                        }
                    )
                }
            }
        )
    }

    render() {

        const isSuccess = this.state.success;
        const isFailure = this.state.failure;
        
        let text;
        if (isSuccess) {
            text = <span>Success</span>
        }
        else if (isFailure) {
            text = <span>Failed</span>
        }
        else {
            text = ''
        }

        return (
            <div className="student">
                <div className="left">
                    <h2 className="studentName">
                        {this.props.name}
                        <button className="addScoreBtn" onClick={ () => this.addScore() }>+</button>
                        <button className="subtScoreBtn" onClick={ () => this.subtScore() }>-</button>
                    </h2>
                    <p className="uniName">{this.props.uni} {text}</p>
                </div>
                <div className="right">
                    <div className="score">{this.state.score}</div>
                </div>
            </div>
        )
    }
}

export default Student;
