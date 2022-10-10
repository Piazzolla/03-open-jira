import { Paper, List } from '@mui/material';
import { FC, useContext, useMemo } from 'react';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { EntriesContext } from '../../context/entries/EntriesContext';

interface Props {
    status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);

    const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status) , [ entries ])
    

    return (
        // TODO: AQUI HAREMOS DROP
        <div >
            <Paper sx={{
                height: 'calc(100vh - 180px)',
                overflow: 'auto',
                backgroundColor: 'transparent',
                padding: '1px 5px'
            }}>
                {/* TODO: Cambiara dependiendo si esto haceiendo drag o no */}

                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard key={ entry._id } entry={ entry } />
                        ))
                    }

                </List>
            </Paper>
        </div>
    )
}
