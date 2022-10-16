import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const CardComponet = () => {
  return (
    <Grid container spacing={3} sx={{marginTop:'1rem'}}>
      <Grid item md={6} xs={12} sm={12} lg={4} sx={{justifyContent:'center',alignItems:'center'}}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4} >
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={4}>
        <Card sx={{ maxWidth: "100%",borderRadius:'10px' }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  fontSize: ".7rem",
                  fontWeight: "bold",
                }}
                aria-label="recipe"
              >
                OYO
              </Avatar>
            }
            action={
              <Button size="small" variant="outlined">
                Submit Work
              </Button>
            }
            title="OYO"
          />
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                Diwali Compaign
              </Typography>
              <Typography sx={{ fontSize: ".8rem" }}>
                This is a compaign create a
                <br />
                stuning videos fron the
                <br />
                boutique...
              </Typography>
            </Box>
            <CurrencyRupeeIcon
              sx={{
                fontSize: "11px",
                marginLeft: "auto",
                mt: "5px",
                color: "#b5227d",
              }}
            />
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                color: "#b5227d",
              }}
            >
              2500
            </p>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default CardComponet;
