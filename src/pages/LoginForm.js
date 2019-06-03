import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/auth";

class LoginForm extends Component {

    state = {
        user: null
    }

    constructor(props) {
        super(props);

        this.changeUser = this.changeUser.bind(this);
        this.logar = this.logar.bind(this);
    }

    logar(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(setAuthedUser(this.state.user));
    }

    changeUser(e) {
        const { value } = e.target;
        if(value)
            this.setState({ user: value });
        else
            this.setState({ user: null });
    }

    render() {

        const { users } = this.props;
        const keys = Object.keys(users);

        return (
            <div className="form login-form">
                <div className="text-center">
                    <img src="/logo.png" />
                    <h2>Would You Rather?</h2>
                </div>
                <fieldset>
                    <legend>Login</legend>
                    <form onSubmit={this.logar}>
                        <label>
                            Selecione o usuário:
                            <select onChange={this.changeUser}>
                                <option value="">--select--</option>
                                {
                                    keys && keys.map(key => (
                                        <option value={key} key={key}>{users[key].name}</option>
                                    ))
                                }
                            </select>
                        </label>
                        <div className="text-center">
                            <button disabled={!this.state.user} type="submit">Logar</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        );
    }

}

const mapStateToProps = ({ users }) => {
    return ({
        users
    });
}

export default connect(mapStateToProps)(LoginForm);