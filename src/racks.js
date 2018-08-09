import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const RackList = (props) => (
    <List title="Rack Overview" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
        </Datagrid>
    </List>
);
