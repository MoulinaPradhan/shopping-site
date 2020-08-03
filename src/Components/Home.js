import React from "react";
import { Slides, Card } from "./";
import * as firebase from "firebase";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      front: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.db
      .collection("front")

      .onSnapshot((snapshot) => {
        const front = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ front: front, loading: false });
      });
  }

  render() {
    const { front, loading } = this.state;
    return (
      <div classname="Home">
        {loading && (
          <div id="loading">
            <p id="loading-icon">
              E-m
              <img
                id="at-symbol"
                src="https://image.flaticon.com/icons/svg/2658/2658131.svg"
              />
              rt
            </p>
          </div>
        )}
        <Slides />
        <Card front={front} />
      </div>
    );
  }
}

export default Home;
