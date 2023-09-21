import React, {Components} from 'react'
import {
  Button,
  Flex,
  Text
} from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import {
  deleteNote as deleteNoteMutation,
} from "../graphql/mutations";
import { ActionCard } from '../ui-components';
const Note = ({id, note, notes, setNotes}) =>{

    async function handleDelete() {
      console.log("ID --------     "+id);
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
      await API.graphql({
        query: deleteNoteMutation,
        variables: { input: { id } },
      });

    }
    return (
    //   <Flex
    //       key={note.id  || note.name}
    //       direction="row"
    //       justifyContent="center"
    //       alignItems="center"
    //   > 
    //   <Text as="strong" fontWeight={700}>
    //     {note.name}  
    //   </Text>
    //   <Text as="span">{note.description}</Text>
    //   <Button variation="link" id={note.id}  onClick={handleDelete}>
    //     Delete note - {id}
    //   </Button>
    // </Flex>
      <ActionCard>
        {/* <Flex
          key={note.id  || note.name}
          direction="row"
          justifyContent="center"
          alignItems="center"
        > s
        <Text as="strong" fontWeight={700}>
          {note.name}  
        </Text>
        <Text as="span">{note.description}</Text>
        <Button variation="link" id={note.id}  onClick={handleDelete}>
          Delete note - {id}
        </Button>
        </Flex> */}
      </ActionCard>
    )
};

export default Note;
