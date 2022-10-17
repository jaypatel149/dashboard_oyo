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
import { styled} from '@mui/material/styles';

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette};
    transform: scale(1.1);
  }
  `}
`;


const CardComponet = () => {
  return (
    <Grid container spacing={3} sx={{marginTop:'1rem'}}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <StyledCard sx={{borderRadius:'10px',cursor:'pointer'}} >
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <StyledCard sx={{borderRadius:'10px',cursor:'pointer' }}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} >
        <StyledCard sx={{borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} >
        <StyledCard sx={{ borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <StyledCard sx={{borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <StyledCard sx={{ maxWidth: "100%",borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} >
        <StyledCard sx={{ borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <StyledCard sx={{borderRadius:'10px',cursor:'pointer' }}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <StyledCard sx={{ borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} >
        <StyledCard sx={{ borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} >
        <StyledCard sx={{ borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} >
        <StyledCard sx={{ borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} >
        <StyledCard sx={{ borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} >
        <StyledCard sx={{borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <StyledCard sx={{borderRadius:'10px' ,cursor:'pointer'}}>
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
              <Button size="small" variant="outlined" style={{marginTop:'10px',textTransform: "none",color:'#07e0a6'}}>
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
        </StyledCard>
      </Grid>
    </Grid>
  );
};
export default CardComponet;
