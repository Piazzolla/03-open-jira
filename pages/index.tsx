import { CardHeader, Grid, Card } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={ 2 }>
         <Grid item xs={ 12 } sm={ 4 }>
        {/* sm 4 me da un tercio de la pantalla, xs 12 me da toda la pantalla */}
          <Card sx={{ height: 'calc(100vh - 100px )'}}>
            <CardHeader title="Pendientes"/>
            <CardContent>
              {/* Agregar una nueva entreada */}
              {/* listado de entradas */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px )'}}>
            <CardHeader title="En Progreso"/>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas"/>
          </Card>
        </Grid>

      </Grid>
    </Layout>

  )
}

export default HomePage
