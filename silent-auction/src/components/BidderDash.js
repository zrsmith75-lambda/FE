import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {NavLink,Route} from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        background:"#262626",
        color:"white",
        borderRadius:"15px",
        margin:"0 auto",
        maxWidth:"80%",
        height:"700px",
        display:"grid",
        gridGap:"1%",
        gridTemplateColumns:"30% 69%",
        gridTemplateRows:"100%",
        gridTemplateAreas:'"leftPanel rightPanel"',
    },
    leftPanel:{
        gridArea:"leftPanel",
        display:"flex",
        alignContent:"center",
        flexDirection:"column",
        paddingBottom:"6%",
        borderRight:"1px solid #2e2d2d"
    },
    lastChld:{
        marginTop:"auto",
        alignSelf:"center",
        width:"50%"
    },
    media:{
        width:"65%",
        height:"75%",
        margin:"3% auto",
        borderRadius:"5%"
    },
    rightPanel:{
        gridArea:"rightPanel",
        paddingBottom:"6%",
    },
    navigation:{
        margin:"0 auto",
        widht:"80%",
        display:"flex",
        justifyContent:"space-around",
        '& a':{
            textTransform:"uppercase",
            color:"white",
            textDecoration:"none",
            fontSize:"1.5rem",
            '&:hover':{
                
            }
        }
    },
    rightPanelContent:{
        height:"80%",
        overflow:"hidden",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between",
        '&:hover':{
            overflow:"auto"
        },
    },
    auctionCard:{
        height:"250px",
        width:"175px",
        marginBottom:"3%",        
        '& img':{
            objectFit:"cover",
            width:"100%",
            height:"100%",
            filter: "grayscale(80%)",
            blur:"15px",
            transition: "all 0.5s ease-in-out",
            '&:hover':{
                filter: "grayscale(0%)",
                blur:"0px",
            }
        },
        '&:last-child':{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            '& button':{ 
                background:"#f50057"
            }
        }
    }
  }));
export default function SellerDash() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.leftPanel}>
                {/* Account information */}                
                <Typography gutterBottom variant="h5" component="h1">
                    <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/3768163/pexels-photo-3768163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        title="Contemplative Reptile"
                        component="img"
                    />
                    User name in here
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h1">
                    Account type
                </Typography>
                <Button variant="contained" color="secondary" className={classes.lastChld}>
                    Log out
                </Button>
            </CardContent>
            <CardContent className={classes.rightPanel}>
                <CardContent className={classes.navigation}>
                    {/* Add a navigation beetween Open and closed bids */}
                    <NavLink to="/">Open bids</NavLink>
                    <NavLink to="/closed">Closed bids</NavLink>
                </CardContent>
                <CardContent className={classes.rightPanelContent}>
                    {/* Load content depending on the nav thingy aka router */}
                    <Route exact path="/">
                        {/*Map trouygh data for every open bid  */}
                        {/* {Hard codded elements} */}
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                        </Card>
                        {/* {Hard codded elements} */}
                        <Card className={classes.auctionCard}>
                            <Fab
                                variant="exteaded"
                                size="small"
                                color="primary"
                                aria-label="add"
                                className={classes.margin}
                                >
                                <AddIcon className={classes.extendedIcon} />
                                Start new
                            </Fab>
                        </Card>
                    </Route>
                    <Route exact path="/closed">
                        {/*Map trouygh data for every closed bid in which the user participated*/}
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                        </Card>
                        <Card className={classes.auctionCard}>
                            <CardMedia
                                image="https://images.pexels.com/photos/175568/pexels-photo-175568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Contemplative Reptile"
                                component="img"/>
                        </Card>
                    </Route>
                </CardContent>
            </CardContent>

        </Card>
    )
}
