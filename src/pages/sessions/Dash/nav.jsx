import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

export default function DashBoardNav() {
    return (
        <Box sx={{flexGrow: 1,}}>
            <AppBar position="static">
                <Toolbar variant="dense" style={{backgroundColor:"#008000"}}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {/*Easy Car Rental*/}
                    </Typography>


                    <Link href="dash" underline="none">
                        <Button  style={{backgroundColor:"#008000"}} variant="contained" >Dash Board</Button>
                    </Link>




                    <Link href="product" underline="none">
                        <Button  style={{backgroundColor:"#008000"}} variant="contained" sx={{ml:2}}>Product</Button>
                    </Link>


                    <Link href="cart" underline="none">
                        <Button style={{backgroundColor:"#008000"}} variant="contained" sx={{ml:4}}>Cart</Button>
                    </Link>


                    <Link href="table" underline="none">
                        <Button  style={{backgroundColor:"#008000"}} variant="contained" sx={{ml:6}}>User Table</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
