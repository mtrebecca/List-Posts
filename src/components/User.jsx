import React, { useState } from "react";
import { Button, Input } from '@mui/material';

export const User = ({ title, body, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.title.value, evt.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <Input
            placeholder="Title" 
            name="title"
            defaultValue={title}
            variant="outlined"
          />
         <Input
            color="primary"
            placeholder="Body" 
            name="body"
            defaultValue={body}
            variant="outlined"
          />
          
          <Button onSubmit={handleOnEditSubmit} color="success" variant="solid">Save</Button>
        </form>
      ) : (
        <div className="user">
          <span className="user-title">{title}</span>
          <span className="user-body">{body}</span>
          <div>
          <Button onClick={handleEdit} color="neutral" variant="solid">Edit</Button>
          <Button onClick={handleDelete}  color="danger" variant="solid">Delete</Button>
          </div>
        </div>
      )}
    </div>
  );
};
