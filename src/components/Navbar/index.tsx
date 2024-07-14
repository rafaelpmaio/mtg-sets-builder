import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <AppBar position="static" color="transparent" >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    component={Link}
                    to="https://mtg-collection.vercel.app/"
                    target="_blank"
                >
                    <LinkIcon />
                </IconButton>
                <Typography
                    variant="body1"
                    component={Link}
                    to="https://mtg-collection.vercel.app/"
                    target="_blank"
                    color="inherit"
                    sx={{ flexGrow: 1 }}
                >Check the site that uses the data generated here!</Typography>
                <IconButton
                    color="inherit"
                    aria-label="github-logo"
                    component={Link}
                    to="https://github.com/rafaelpmaio"
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="linkedin-logo"
                    component={Link}
                    to="https://www.linkedin.com/in/rafael-de-paiva-maio/"
                >
                    <LinkedInIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}