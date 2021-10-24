import React from 'react'
import { Grid } from "@material-ui/core"


export default function YoutubeVideo() {
  return (
    <Grid item>
                <iframe 
                    width="1120" 
                    height="630" 
                    src="https://www.youtube.com/embed/yOb9Xaug35M" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
        </Grid>
  );
}