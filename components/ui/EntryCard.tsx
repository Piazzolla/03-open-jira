import { Card, Typography, CardContent, CardActionArea, CardActions } from '@mui/material';
import { FC } from 'react';
import { Entry } from '../../interfaces';


interface Props {
    entry: Entry
}

export const EntryCard:FC<Props> = ({ entry }) => {
  return (
    <Card
        sx={{ marginBottom: 1 }}
        //eventos de drag
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>
                    { entry.description }
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: '2'}}>
                <Typography variant='body2'>hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
