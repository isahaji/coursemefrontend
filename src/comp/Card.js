import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
  },
});

 const Cards = ({ url, title, Desc, link  }) => {
  const classes = useStyles();

        return (
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img" 
          alt="Contemplative Reptile"
          height="140"
          width="120"
          image={url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" href={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  </div>
  );
}

export default Cards