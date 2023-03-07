// import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Course({ image, title, description }) {
  return (

    <Card >
      <CardMedia
        component="img"
        image={image}
        title="Kurslarım"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

    </Card>
    // <div>

    //   <img src={image} alt="" />
    //   <p> {title} </p>
    //   <p> {description} </p>


    // </div>
  )
}

export default Course;
