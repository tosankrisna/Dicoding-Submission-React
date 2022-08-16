import ArsipButton from "./ArsipButton";
import DeleteButton from "./DeleteButton";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ id, title, body, onDelete }) {
  return (
    <div className="note_card">
      <NoteItemBody title={title} body={body} />
      <div className="action">
        <ArsipButton />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
