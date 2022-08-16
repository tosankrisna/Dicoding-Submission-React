import React from "react";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <section className="section_input">
        <FormHeader title="Input Catatan" />
        <FormInput />
      </section>
    );
  }
}

export default NoteInput;
