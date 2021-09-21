import { useHistory, useParams } from "react-router";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CardActions,
  Button,
} from "@material-ui/core";

import "./index.css";

const Home = () => {
  const params = useParams();
  const history = useHistory();
  return (
    <Grid align="center">
      <Box sx={{ bgcolor: "#8b0000", height: "100vh" }}>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia
            component="img"
            height="150"
            width="90"
            image="https://cdn-icons-png.flaticon.com/512/47/47774.png"
            alt="user"
          />
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              Bem vindo, {params.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="small"
              onClick={() => history.push("/")}
            >
              Voltar
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default Home;
