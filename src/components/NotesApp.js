import React from "react";
import NotesHeader from "./NotesHeader";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <NotesHeader />
      </div>
    );
  }
}

export default NotesApp;
