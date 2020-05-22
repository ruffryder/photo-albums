import React, { Component } from "react";
import Header from "./components/Header";
import PhotoAlbumsList from "./components/PhotoalbumsList";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoalbums: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5")
      .then((res) => {
        const photoalbums = res.data;
        this.setState({ photoalbums });
      });
  }
  render() {
    return (
      <div>
        <Header />
        <PhotoAlbumsList photoalbums={this.state.photoalbums} />
      </div>
    );
  }
}

export default App;
