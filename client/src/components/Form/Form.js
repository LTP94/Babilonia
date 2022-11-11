import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import {TextField, Button, Typography, Paper} from '@material-ui/core'


const Form = () => {

  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  });
  const handleSubmit = () =>{

  }

  return (


    <Paper className={classes.papper}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a Bew Book</Typography>
        <TextField name='creator' variant='outlined' label='Creator'
         fullWidth
         value={postData.creator}
         
         >

        </TextField>
      </form>

    </Paper>
    )
}

export default Form