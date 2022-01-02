import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import Google from "../img/google.png";
import Github from "../img/github.png";
import "../styles.css"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className="container col-5 text-center background-login mt-4"
        >
          <h1>
            Login to
            <Link to="/"> Chatty</Link>
          </h1>
          <p>Fill in the form below to login to your account.</p>
          <div className="mb-3">
            <input
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
              class="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
              class="form-control"
            />
          </div>
          <div className="mb-3">
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button type="submit" className="btn btn-outline-primary">
              Login
            </button>
          </div>

          <div className="mb-2">
            <button onClick={this.googleSignIn} type="button" className="btn btn-outline-success">
              <img src={Google} width={30} /> Login with Google
            </button>
          </div>

          <div>
            <button type="button" onClick={this.githubSignIn} className="btn btn-outline-secondary">
              <img src={Github} width={30} /> Login with GitHub
            </button>
          </div>

          <hr />
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    );
  }
}
