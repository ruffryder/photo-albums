import React, { Component } from "react";
import { fetchAlbumsStartAsync } from "./redux/album/albumActions";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header";
import PhotoAlbumsList from "./components/PhotoalbumsList";
import PhotoItemList from "./components/PhotoItemList";
import FavouritesList from "./components/FavouritesList";
import LoadingSpinner from "./components/LoadingSpinner";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchAlbumsStart } = this.props;
    fetchAlbumsStart();
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.albums.isFetching ? (
          <LoadingSpinner />
        ) : (
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <PhotoAlbumsList
                  {...props}
                  photoalbums={this.props.albums.albums}
                />
              )}
            />
            <Route path="/album" component={PhotoItemList} />
            <Route path="/favourites" component={FavouritesList} />
          </Switch>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbumsStart: () => dispatch(fetchAlbumsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
