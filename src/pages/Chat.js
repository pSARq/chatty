import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import "../styles.css";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: "",
      readError: null,
      writeError: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.setState({ readError: null });
    try {
      db.ref("chats").on("value", (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        this.setState({ chats });
      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    try {
      await db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
      });
      this.setState({ content: "" });
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  render() {
    return (
      <div className="chat position-absolute">
        <div className="container">
          <div className="container container-text-color">
            {this.state.chats.map((chat) => {
              return (
                <p key={chat.timestamp}>
                  <span className="text-messages">{chat.content}</span>
                </p>
              );
            })}
          </div>

          <form className="container-post" onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              value={this.state.content}
              className="text-post"
            />
            {this.state.error ? <p>{this.state.writeError}</p> : null}
            <button type="submit" className="btn-post">
              Send
            </button>
          </form>
          <div className="container text-center logout-color">
            <button
              className="m-2 btn btn-outline-danger"
              type="button"
              onClick={() => auth().signOut()}
            >
              Logout
            </button>
            Login in as: <strong>{this.state.user.email}</strong>
          </div>
        </div>
      </div>
    );
  }
}
