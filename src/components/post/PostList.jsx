import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, SimpleList } from 'react-admin';
import PostFilter from './PostFilter'
import { useMediaQuery } from '@material-ui/core';

const PostList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List filters={<PostFilter />} {...props}>
      {isSmall ? 
      (
        <SimpleList
            primaryText={record => record.title}
            secondaryText={record => `${record.body.substring(0, 40)} ...`}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <EditButton/>
      </Datagrid>
      )}
    </List>
  )
}

export default PostList