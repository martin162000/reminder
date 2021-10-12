import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';
import { dayDate, timeDate, CssTextField} from '../types/variables'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';


interface Props {
    onChange: (data:any) => void
    postsFromLocalStorage : {
         id: number;
         name: string;
         text: string;
         date: string;
         time: string;
     }[]
 }

const Add = (props: Props) => {

    let {postsFromLocalStorage } = props

    const history = useHistory();
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [errorTitle, setErrorTitle] = useState(false)
    const [errorTextPost, setErrorTextPost] = useState(false)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        setErrorTitle(false)
        setErrorTextPost(false)

        if (title === '') setErrorTitle(true)
        if (text === '') setErrorTextPost(true)

        if (title && text) {

           if(postsFromLocalStorage === undefined || postsFromLocalStorage.length === 0) {

                    const newDate = [{
                        id: 1,
                        name: title,
                        text: text,
                        date: dayDate(),
                        time: timeDate()
                    }]
                    props.onChange(newDate)
                    localStorage.setItem('Data', JSON.stringify(newDate));
                    history.push({
                        pathname: '/home',
                    });

            } else {

                    const newDate = {
                                id: Math.max(...postsFromLocalStorage.map((p: { id: any; }) => p.id)) +1,
                                name: title,
                                text: text,
                                date: dayDate(),
                                time: timeDate()
                            }
                    props.onChange(([...postsFromLocalStorage,newDate]))
                    localStorage.setItem('Data', JSON.stringify([...postsFromLocalStorage,newDate]));
                    history.push({
                        pathname: '/home',
                    }); 
             }

        }
    }

    

    return (
        <Box sx={{ width: '100%' }}>
            <Grid item xs={12} md={12} lg={12} className="menuMain justifyStart"> 
                <Link to={{
                            pathname: "/Home",
                         }}>
                    <Button variant="contained" size="large" /*style={{ width: '75%' }}*/>
                    <ArrowBackIcon/>
                    </Button>
                </Link>
            </Grid>

            <Grid item xs={12} md={12} lg={12} 
                         className="zoomfadeOut"
                         container
                         direction="row"
                         justifyContent="center" 
                         alignContent="flex-start"> 
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>

            <div className="titleForm">  
                <CssTextField
                    defaultcolor="#1e4e20"
                    focusColor="#2e7d32"
                    onChange={(e:any) => setTitle(e.target.value)}
                    id="outlinedBasic" 
                    label="Title" 
                    variant="outlined"
                    style ={{width: '100%'}}
                    required
                    error={errorTitle}
                    />
            </div>

                <CssTextField
                    defaultcolor="#1e4e20"
                    focusColor="#2e7d32"
                    onChange={(e:any) => setText(e.target.value)}
                    id="postText" 
                    label="Text of post" 
                    variant="outlined"
                    multiline
                    rows={22}
                    style ={{width: '100%', marginTop: '2em'}}
                    required
                    error={errorTextPost}
                    />

            <div className="butSubmit">
                <Button
                    startIcon={<CheckIcon />}
                    type="submit"
                    color="success"
                    variant="contained"
                    style ={{width: '35%', marginTop: '2em', color: '#252526', fontSize: '16px', padding: '12px 0px'}}
                    >
                        Submit
                    </Button>
            </div> 
                </form>
            </Grid>
        </Box>
    )
}

export default Add
