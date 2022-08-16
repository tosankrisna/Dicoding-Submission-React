import React from "react";

class FormInput extends React.Component {
  state = {};
  render() {
    return (
      <form action="#" className="form_input">
        <div className="input">
          <label htmlFor="note_title">Judul</label>
          <input type="text" className="note_title" required />
          <span>Sisa karakter: 20</span>
        </div>
        <div className="input">
          <label htmlFor="note_value">Isi Catatan</label>
          <textarea
            name="note_value"
            className="note_value"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className="btnSubmit">
          Buat Catatan
        </button>
      </form>
    );
  }
}

export default FormInput;
