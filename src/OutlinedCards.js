import React, {memo} from 'react'
import { Card, CardMedia, CardContent, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function OutLinedCards(props) {

    const classes = useStyles()

    const { id, thumbnailUrl } = props

    return (
        <Card className={classes.root} variant="outlined" >

            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    {id}
                </Typography>
            </CardContent>
            
            <CardMedia  style={{ height: '150px' }} image={thumbnailUrl} /> 

        </Card>
    )
}

export default memo(OutLinedCards)
