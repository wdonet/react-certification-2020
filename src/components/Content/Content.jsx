import React from "react";
import Categories from "./Categories";
import Videos from "./Videos";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Categories />
        <Videos />
      </div>
    );
  }
}