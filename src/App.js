import React, {useState, useEffect} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import OutLined from './OutlinedCards'
// import Content from './content'

const useStyles = makeStyles(() => ({
  forLoading: {
    position: 'absolute',
    top: '40vh',
    left: '50vw'
  }

}))


function App() {

  const [ isLoading, setLoading] = useState(true)
  const [ data, setData ] = useState()
  const classes = useStyles()

  useEffect(() => {
    async function fetchData(){

        const response = await fetch('https://jsonplaceholder.typicode.com/photos') 
        const json = await response.json()
        
        const datas = json.filter(item => item.id <= 8)

        console.log(datas)
        setData(datas)
        setLoading(false)
      }
    
      fetchData()

}, [])
    

  if(isLoading)
    return <CircularProgress className={classes.forLoading} />

  return (
    <div >
      <Grid container direction="column" spacing={2} >
        <Grid item>
            {/* <Header /> */}
            <Typography variant="h3" className={classes.typeStyle} align="center" > Dev Test</Typography>
        </Grid>

        <Grid item container spacing={2}>
          {data.map(item => (
            <Grid key={item.id } item xs={0} sm={0} lg={3} xl={4}  >
              <OutLined {...item} />
            </Grid>      
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
