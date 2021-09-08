import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { styles } from '../../styles/CardStyle'

export default function ImgMediaCard(props) {
    const classes = styles();

    return (
        <Card className={classes.root}>
            <CardActionArea href={props.mission.links.wikipedia}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.mission.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
