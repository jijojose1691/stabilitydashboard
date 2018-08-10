import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ExecutionOverview = (props) => (
    <List title="Execution Overview" {...props}>
        <Datagrid>
            <TextField source="rack_slot" label="Rack Slot"/>
            <TextField source="rack_slot_id" label="Rack Slot ID"/>
            <TextField source="cpe_id" label="CPE ID"/>
            <TextField source="rl_port" label="RL Port"/>
            <TextField source="box_status" label="Status"/>
        </Datagrid>
    </List>
);
