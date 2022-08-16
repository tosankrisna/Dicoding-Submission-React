import React from "react";

class SearchNote extends React.Component {
  state = {};
  render() {
    return (
      <div className="search_note">
        <form action="#" id="form_search" className="form_search">
          <input
            type="text"
            className="search"
            placeholder="Cari catatan anda..."
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchNote;
