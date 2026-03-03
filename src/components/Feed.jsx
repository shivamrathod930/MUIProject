import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';


export default function postCard() {
    

     return (
          <Box flex={4}>
               <Card >
                    <CardHeader
                         avatar={
                              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                   R
                              </Avatar>
                         }
                         action={
                              <IconButton aria-label="settings">
                                   <MoreVertIcon />
                              </IconButton>
                         }
                         title="Shrimp and Chorizo Paella"
                         subheader="September 14, 2016"
                    />
                    <CardMedia
                         component="img"
                         
                         image="https://media.istockphoto.com/id/1136513365/photo/cute-little-indian-boy-child-with-coloured-face-paint-powder-color-thrown-at-his-face-during.jpg?s=612x612&w=0&k=20&c=eY5KNsXfkUDZU2-eHl7LiFVSB4Du6L3Or6ut51mhhbY="
                         alt="Paella dish"
                    />
                    <CardContent>
                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              This impressive paella is a perfect party dish and a fun meal to cook
                              together with your guests. Add 1 cup of frozen peas along with the mussels,
                              if you like.
                         </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                         </IconButton>
                         <IconButton aria-label="share">
                              <ShareIcon />
                         </IconButton>
                    </CardActions>
                   
               </Card>
          </Box>
     );
}
