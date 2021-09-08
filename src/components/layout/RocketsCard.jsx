import React from 'react';
import RocketsCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {styles} from '../../styles/CardStyle'

export default function ImgMediaCard(props) {
  const classes = styles();

  return (
    <RocketsCard className={classes.root}>
      <CardActionArea href={props.rocket.wikipedia}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.rocket.flickr_images[1]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.rocket.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.rocket.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </RocketsCard>
  );
}
