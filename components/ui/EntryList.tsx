import { Paper, List } from '@mui/material';
import { EntryCard } from './EntryCard';

export const EntryList = () => {
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
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                </List>
            </Paper>
        </div>
    )
}
