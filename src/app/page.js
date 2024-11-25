"use client"
import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Pagination, Stack, Toolbar, Typography } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import page1 from '../mock/page1.json';
import page2 from '../mock/page2.json';
import page3 from '../mock/page3.json';
import page4 from '../mock/page4.json';
import page5 from '../mock/page5.json';
import Image from "next/image";

const pages = ['Liên hệ'];

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popupData, setPopupData] = useState(null);

  const getGames = async (page = 1) => {
    setLoading(true);
    let data = null;
    switch (page) {
      case 1:
        data = page1;
        break;
      case 2:
        data = page2;
        break;
      case 3:
        data = page3;
        break;
      case 4:
        data = page4;
        break;
      case 5:
        data = page5;
        break;
    }
    setData(data.results);
    setLoading(false);
  }

  useEffect(() => {
    getGames();
  }, []);

  const onCloseModal = () => {
    setPopupData(null);
  }

  const onDetail = (game) => {
    setPopupData(game);
  }

  const getRequirementData = (platforms) => {
    const found = platforms?.find(p => p?.requirements_en != null && p?.requirements_en?.recommended);
    return found?.requirements_en?.recommended || '';
  }

  return (
    <Container sx={{ background: 'white', paddingBottom: 4 }}>
      <AppBar sx={{ background: 'rgb(16, 16, 20)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack flexDirection={'row'} alignItems={'center'}>
              <SportsEsportsIcon />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                CHỢ GAME
              </Typography>
            </Stack>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container sx={{ paddingTop: 12, background: 'white' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((game, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 160 }}
                  image={game.background_image}
                  title=""
                />
                <CardContent>
                  <Typography gutterBottom variant='body1' fontWeight={700}>
                    {game.name}
                  </Typography>
                  <Typography gutterBottom variant='body1'>
                    {'499.000 VND'}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button startIcon={<InfoIcon />} variant="outlined" size="small" onClick={() => { onDetail(game) }}>Chi Tiết</Button>
                  <Button startIcon={<ShoppingCartIcon />} variant="contained" size="small">Mua Game</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Stack direction='row' sx={{
        marginTop: 4,
        justifyContent: 'center',
      }}>
        <Pagination
          count={5}
          onChange={(_, page) => {
            getGames(page);
          }}
          color="primary"
          variant="outlined"
          shape="rounded"
        />
      </Stack>

      <Dialog onClose={onCloseModal} open={popupData} fullWidth>
        <DialogTitle>{popupData?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{ paddingLeft: 16, paddingRight: 16 }} dangerouslySetInnerHTML={{ __html: getRequirementData(popupData?.platforms) }}>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" size="small" onClick={onCloseModal}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}