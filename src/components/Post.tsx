import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { dayDate, timeDate, CssTextField} from '../types/variables'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import { Link} from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';



interface Props {
    onChange: (data:any) => void
    postsFromLocalStorage : {
         id: number;
         name: string;
         text: string;
         date: string;
     }[]
 }


const Post = (props: Props) => {


    const {postsFromLocalStorage } = props
    const history = useHistory();
    const { postId }:any = useParams<{ postId: string }>();

    // allPosts from localstorage

    const thisPost:any = (postsFromLocalStorage.filter((item:any) => item.id === Number(postId)));

    // states
    const [namePost, setNamePost] = useState(thisPost[0].name)
    const [textPost, setTextPost] = useState(thisPost[0].text)
    const [errorTitle, setErrorTitle] = useState(false)
    const [errorTextPost, setErrorTextPost] = useState(false)




        const handleEdit = (e:any) => {
            e.preventDefault()
            setErrorTitle(false)
            setErrorTextPost(false)
    
            if (namePost === '') setErrorTitle(true)
            if (textPost === '') setErrorTextPost(true)
    
            if (namePost && textPost) {
    
               if(postsFromLocalStorage !== undefined) {
     
                const newDate = {
                                id: thisPost[0].id,
                                name: namePost,
                                text: textPost,
                                date: dayDate(),
                                time: timeDate()
                                }
                    
                const withoutEditedPost:any = (postsFromLocalStorage.filter((item:any) => item.id !== Number(postId)));
                withoutEditedPost.push(newDate)
                props.onChange(withoutEditedPost)
                    localStorage.setItem('Data', JSON.stringify(withoutEditedPost));
                        history.push({
                            pathname: '/home',
                    })
    
                 }
    
            }
        }

    
    return (
        <div>

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
                         className="zoomfadein"
                         container
                         direction="row"
                         justifyContent="center" 
                         alignContent="flex-start"> 

            <form noValidate autoComplete="off" onSubmit={handleEdit}>




            <div className="titleForm">
            <CssTextField
                        defaultcolor="#764c34"
                        focusColor="#f28d52"
                        id="outlinedBasic" 
                        label="Title" 
                        variant="outlined"
                        style ={{width: '100%'}}
                        required
                        value={namePost}
                        onChange={(e:any) => setNamePost(e.target.value)}
                        error={errorTitle}
                        />

            </div>

            <CssTextField
                        defaultcolor="#764c34"
                        focusColor="#f28d52"
                        id="postText"
                        label="Text of post" 
                        variant="outlined"
                        style ={{width: '100%', marginTop: '2em'}}
                        required
                        multiline
                        rows={22}
                        value={textPost}
                        onChange={(e:any) => setTextPost(e.target.value)}
                        error={errorTextPost}
                        />
                <div className="butSubmit">
                    <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            style ={{width: '35%', marginTop: '2em', color: '#252526', background: '#F28D52', fontSize: '16px', padding: '12px 0px'}}
                            startIcon={<BorderColorIcon />}>
                                Edit
                    </Button>
                </div>
                </form>
        </Grid>
        </div>
    )
}

export default Post
