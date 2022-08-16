import React from "react";
import FormHeader from "./FormHeader";
import SearchNote from "./SearchNote";
import NoteItem from "./NoteItem";
import NoteStatusHeader from "./NoteStatusHeader";

function NoteList({ notes, onDelete }) {
  return (
    <section className="section_note">
      <FormHeader title="Daftar Catatan" />
      <SearchNote />
      <div className="note_status">
        <NoteStatusHeader title="Catatan Aktif" />
        {notes.map((note) => {
          if (note.archived === false) {
            return (
              <NoteItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                {...note}
              />
            );
          }
        })}
      </div>
      <div className="note_status">
        <NoteStatusHeader title="Arsip" />
        {notes.map((note) => {
          if (note.archived === true) {
            return (
              <NoteItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                {...note}
              />
            );
          }
        })}
      </div>
    </section>
  );
}

export default NoteList;
