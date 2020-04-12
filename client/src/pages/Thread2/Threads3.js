import React, { Component, useState, use, useEffect } from "react";
import API from "../../lib/API";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import "../Threads/Threads.css";
import TokenStore from "../../lib/TokenStore";

class miniAuth extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState((prevState) => ({
        auth: { ...prevState.auth, user, authToken },
      }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState((prevState) => ({
        auth: { ...prevState.auth, user: undefined, authToken: undefined },
      }));
    };

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout,
      },
    };
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then((response) => response.data)
      .then((user) =>
        this.setState((prevState) => ({ auth: { ...prevState.auth, user } }))
      )
      .catch((err) => console.log(err))
      .then((response) => console.log(response.data))
    // API.Users.getMe(authToken).then((response) => {
    //   API.Threads.createThread({
    //     title: "Testingplease",
    //     body: "workworkkwrokwrok",
    //     UserId: response.data.id,
    //   });
    //   // console.log(response.data.id)
    // });
  }

  render() {
        return (
          <AuthContext.Provider value={this.state.auth}>
           
          </AuthContext.Provider>
        );
      }
    }


function Threads() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    API.Threads.getThreads()
      .then((res) => {
        console.log("res", res);
        setThreads(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="threads-heading">Threads</div>
      <div className="threads-panel">
        <div>
          {threads.map((item, index) => (
            // <div className="thread" key={index}>{item.title}</div>
            // <Link to={"/thread/" + threads.id + "/" } key={item.id} className="thread">{threads.title}</Link>
            <div className="thread" key={item.id}>
              <a href={"/thread/" + item.id}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Threads;
