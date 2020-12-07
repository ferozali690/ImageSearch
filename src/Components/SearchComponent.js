import React from "react";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    this.setState({ searchText: "" });
  };
  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    const { search } = this.state;
    return (
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <input type="text" value={search} placeholder='Enter the text & press Enter' onChange={this.handleSearch} />
      </form>
    );
  }
}
export default SearchComponent;
