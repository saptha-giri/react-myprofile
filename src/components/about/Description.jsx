import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';


const useStyle = makeStyles(theme=>({
    content: {
        padding: "1.5rem",
        // border: `2px solid ${theme.palette.primary.main}`,
        // borderRadius:"2px"
    }
}))

const Description = () => {
    const classes = useStyle();
    return (
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className={classes.content} >
            <Grid item >
                <Typography variant="h6">I'm Sapthagiri, a fullstack developer(M.E.R.N) with admirable programming skills and creative attitude. I have started my career with startup companies which benefited my love for learning various technologies from root and enjoyed the challenge of creating web and mobile applications.</Typography>
            </Grid><br/>
            {/* <Grid item >
                <Typography variant="h6">
                    
                </Typography>
            </Grid> */}
            <Grid item >
                <Typography variant="h6">
                    Always in a search of learning new technologies and become expert in it. In addition to my interest in games I have developed a Highscore game which is available in Google Playstore.
                </Typography>
            </Grid><br/>
            <Grid item >
                <Typography display="block" variant="h6">
                    With my strong core knowledge in technologies I want to grow stronger and better.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Description;