import React, { Component } from 'react';
import './Student.css';

export class Student extends Component {

    constructor() {
        super();
        this.state = {
            score: 0,
            success: false
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

    render() {

        const isSuccess = this.state.success;
        let text;
        if (isSuccess) {
            text = <span>Success</span>
        } else {
            text = '';
        }

        return (
            <div className="student">
                <div className="left">
                    <h2 className="studentName">
                        {this.props.name}
                        <button className="addScoreBtn" onClick={ () => this.addScore() }>+</button>
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
