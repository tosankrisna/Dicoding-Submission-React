import React from "react";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="btnArsip" onClick={() => onArchive(id)}>
      Arsipkan
    </button>
  );
}

export default ArchiveButton;
