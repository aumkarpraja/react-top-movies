import React from 'react';
import './MovieCard.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class MovieCard extends React.Component{
    
    selectMovie = () => {
        const { movie, selectMovie } = this.props;
        selectMovie( movie ); 
    }

    render(){
        const { movie } = this.props;
        return (
            <Card className='movie-card'>
                <CardActionArea>
                <CardMedia
                    className='movie-image'
                    image={ `http://image.tmdb.org/t/p/w300${movie.backdrop_path}` }
                    title={ movie.title }
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { movie.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            { movie.overview }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={ this.selectMovie }>
                        Learn More
                    </Button>
                </CardActions>
          </Card>
        );
    }
}

export default MovieCard;