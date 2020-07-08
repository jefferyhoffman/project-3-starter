iimport React, { Component } from "react";
import "./Answers.css";
class Answers extends Component {
  state = {
    score: 10
  };
  render() {
    return (
      <div className="column is-4">
        <div class="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box answerBox">
              <div class="card">
                <div class="card-content">
                  <p className="title">Character Facts</p>
                  <ul>
                    <li>1. Character Wears Glasses</li>
                    <li>2. Character has blue eyes</li>
                    <li>3. Character is obessed with phone</li>
                    <li>4. Character made it big on TikTok</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
export default Answers;
