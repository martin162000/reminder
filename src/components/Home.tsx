import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';



import PaginationPosts from './Home/PaginationPosts';
import AllPosts from './Home/AllPosts';
import { useState } from 'react';


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



export const Home = (props: Props) => {

    const {postsFromLocalStorage, onChange} = props

    // CALLBACK
      const handleDeleteChange = (data:any) => {
           onChange(data) // callback to app
      }
    
    // Pagination
      const [currentPage, setcurrentPage] = useState(1)
      const [postsPerPage] = useState(9)
      const indexOfLastPost:any = currentPage * postsPerPage
      const indexOfFirstPost:any = indexOfLastPost - postsPerPage
      const currentPosts:any = postsFromLocalStorage.length !== 0 ?  postsFromLocalStorage.reverse().slice(indexOfFirstPost, indexOfLastPost) : postsFromLocalStorage.slice(indexOfFirstPost, indexOfLastPost) 
      const paginate = (number:number) => setcurrentPage(number) // Update state CurrentPosts
      

    return (
       
                <Grid container style={{width:'100%', margin:'0', padding:'0', justifyContent: 'flex-end'}}>
                    <Grid item xs={12} md={12} lg={12} className="menuMain"> 


                        <Link
                         to={{
                            pathname: "/Add",
                         }}>
                            <Button variant="contained" size="medium" color="success" style={{ /*minWidth: '0px', padding: '4px 8px' */}} /*startIcon={<DeleteIcon />}*/>

                                <AddBoxIcon/>
                            </Button>
                        </Link>
                    </Grid>



                    <AllPosts 
                        currentPosts = {currentPosts}
                        allSendPosts = {postsFromLocalStorage.length !== 0 ?  postsFromLocalStorage.reverse() : postsFromLocalStorage}
                        onDeleteChange = {handleDeleteChange}
                    />
                    <PaginationPosts
                        postsPerPage={postsPerPage} 
                        totalPosts={postsFromLocalStorage.length}
                        paginate={paginate}/>
                    
                </Grid>
             

    )
}

export default Home;
