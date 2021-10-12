import React from 'react'
import Grid from '@mui/material/Grid';
import { Link, useHistory } from 'react-router-dom';
import BackspaceTwoToneIcon from '@material-ui/icons/BackspaceTwoTone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';


interface Props {
    onDeleteChange: (data:any) => void
    currentPosts: {
        id: number;
        name: string;
        text: string;
        date: string;
        time: string;
    }[]

    allSendPosts: {
        id: number;
        name: string;
        text: string;
        date: string;
        time: string;
    }[]
}



export const HomePosts = (props: Props) => {

    let {currentPosts, allSendPosts} = props
      const history = useHistory();

    const handleDelete = (e:any,id:any) => {

        allSendPosts = allSendPosts.filter((item:any) => item.id !== id) // Delete clicked item
        props.onDeleteChange(allSendPosts) // Callback to parent "Home.tsx"
        localStorage.setItem("Data", JSON.stringify(allSendPosts)); // Save to Data in localStorage

        if (allSendPosts.length === 0) {
             localStorage.removeItem("Data");
        }
     }

     if(currentPosts.length === 0 && allSendPosts.length !== 0) {
         history.push({
            pathname: '/'
        }); 

     }



    return (
                <Grid 
                item xs={12} 
                style={{width:'100%', margin:'0', padding:'0', minHeight:'870px'}}   
                container
                direction="row"
                justifyContent="flex-start"
                alignContent="flex-start"
                > 


                        {currentPosts.length > 0 ? (

                                currentPosts.map(post => (
                                
                                    <Grid key={post.id} className="gridPost fadeIn" item xs={12} md={6} lg={4} >
                                            <article>
                                                <span className="delete" 
                                                      onClick={(e) => handleDelete(e,post.id)}
                                                ><BackspaceTwoToneIcon className="deleteIcon"/>
                                                    
                                                </span>  

                                                <Link to={{
                                                    pathname: `/post/${post.id}`,
                                                }}>
                                                    <div className="posts">
                                                        <p>Show <span>or</span> Edit</p>
                                                            <h2>{post.name}</h2>
                                                            <span> {post.text}  </span>
                                                            <div className="date">{post.date}</div>
                                                            <div className="time">{post.time}</div>
                                                           
                                                        </div>
                                                        <div className="afterDate"></div>
                                                        <div className="afterTime"></div>
                                                </Link>

                                            </article>
                                    </Grid>
                               

                            ))
                            ) : (
                                <div className="dontAnyPost"> You don't have any post. Please click on 

                                    <Link
                                        to={{
                                        pathname: "/Add",
                                        }}>
                                        <Button variant="contained" size="medium" color="success" style={{ minWidth: '0px', padding: '4px 8px', margin:'0 6px' }} /*startIcon={<DeleteIcon />}*/>
                                            <AddBoxIcon/>
                                        </Button>
                                </Link>

                                 and create your first post
                               </div>

                            )}




                        
                  


            </Grid>
    )
}

export default HomePosts
