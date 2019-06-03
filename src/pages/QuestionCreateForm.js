import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleCreateQuestion } from '../actions/questions';

class QuestionCreateForm extends Component {

    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { dispatch, history } = this.props

        dispatch(handleCreateQuestion(this.state));
            
        this.setState({
            optionOneText: '',
            optionTwoText: ''
        });

        history.push('/');
    }

    handleInput = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });        
    }

    render() {
        const {optionOneText, optionTwoText} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First option
                    <input value={optionOneText} name="optionOneText" onChange={this.handleInput} />
                </label>
                <label>
                    Second option
                    <input value={optionTwoText} name="optionTwoText" onChange={this.handleInput} />
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

export default connect()(QuestionCreateForm);