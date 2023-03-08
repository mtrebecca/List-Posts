import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

export const PostAdd = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.title.value, evt.target.body.value);
    evt.target.title.value = "";
    evt.target.body.value = "";
  };

  const [mostrarBotao, setMostrarBotao] = useState(true);

  return (
    <>
    <Button variant="contained" size="medium" onClick={() => setMostrarBotao(!mostrarBotao)}>
      {mostrarBotao ? `Hide Button Add` : `+ New Post`}
    </Button>
      <div className={mostrarBotao ? "show-element" : null}>
        {mostrarBotao &&     
        <form onSubmit={handleOnSubmit}>
          <h3>Add Post</h3>
          <Input
            placeholder="Title" 
            name="title"
            variant="outlined"
          />
          <Input
            color="primary"
            placeholder="Body" 
            name="body"
            variant="plain"
          />
          <Button onSubmit={handleOnSubmit} variant="contained">Add</Button>
          <hr />
        </form>}
      </div>
    </>
  );
};
