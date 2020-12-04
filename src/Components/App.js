import React from "react";
import SearchComponent from "./SearchComponent";

import Unsplash from "./API/UnsplashApi";
import ImageComponent from "./ImageComponent";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchImages: []
    };
  }
  handleSearch = async (searchtext) => {
    console.log(searchtext);
    const getData = await Unsplash.get("/search/photos", {
      params: { query: searchtext }
    });
    this.setState({ searchImages: getData.data.results });
  };
  render() {
    const { searchImages } = this.state;

    return (
      <div>
        <h1>App</h1>
        <SearchComponent onSearch={this.handleSearch} />
        <ImageComponent images={searchImages} />
      </div>
    );
  }
}

export default App;
