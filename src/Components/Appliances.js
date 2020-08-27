import React from "react";
import AppliancesContainer from "./AppliancesContainer";
import * as firebase from "firebase";

import "bootstrap/dist/css/bootstrap.min.css";

class Appliances extends React.Component {
  constructor() {
    super();
    this.state = {
      appliances: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });

    this.db.collection("appliances").onSnapshot((snapshot) => {
      const appliances = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ appliances: appliances, loading: false });
    });
  }
  componentWillUnmount() {
    this.setState({
      loading: false,
    });
  }
  handleAdd = (appliances) => {
    this.db.collection("cart").add(appliances);
  };
  render() {
    const { appliances, loading } = this.state;

    return (
      <div>
        {loading && (
          <div id="spinner">
            <img
              id="at-symbol"
              src="https://image.flaticon.com/icons/svg/2658/2658131.svg"
            />
          </div>
        )}

        <AppliancesContainer
          appliances={appliances}
          addToCart={this.handleAdd}
        />
      </div>
    );
  }
}

export default Appliances;
