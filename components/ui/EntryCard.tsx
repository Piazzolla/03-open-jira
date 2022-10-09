import { Card, Typography, CardContent, CardActionArea, CardActions } from '@mui/material';

export const EntryCard = () => {
  return (
    <Card
        sx={{ marginBottom: 1 }}
        //eventos de drag
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>
                    Esto es la descripcion
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: '2'}}>
                <Typography variant='body2'>hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
