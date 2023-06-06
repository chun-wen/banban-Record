import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react'

const BasicCard = ({
  title = "",
  content = "What you will get in this website?"
}:{
  title?: JSX.Element | string
  content? : JSX.Element | string
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div" align="center">
         {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default  BasicCard; 