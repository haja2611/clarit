import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import "./Mbox.css";

export default function BasicSelect() {
  const [contact, setContact] = React.useState("");

  const handleChange = (event) => {
    setContact(event.target.value);
  };
  return (
    <Card
      sx={{
        maxWidth: "90%",
        margin: "70px ",
        padding: "20px 5px",
        height: "650px",
        bgcolor: "#f8f8f8",
      }}
    >
      <CardContent>
        <form>
          {" "}
          <h3>Let's talk about your next big project</h3>
          <p>If you have a question or want to know more, get in touch.</p>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Your Name"
                variant="outlined"
                fullWidth
                required
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Your Country/City"
                variant="outlined"
                fullWidth
                required
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                type="email"
                placeholder="Enter Email"
                variant="outlined"
                fullWidth
                required
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                type="phone number"
                placeholder="Your Phone"
                variant="outlined"
                fullWidth
                required
                sx={{ bgcolor: "white" }}
              />
            </Grid>{" "}
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Your Company"
                variant="outlined"
                fullWidth
                required
                sx={{ bgcolor: "white" }}
              />
            </Grid>{" "}
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Your Job Title"
                variant="outlined"
                fullWidth
                required
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid xs={12} sm={6} md={12} item>
              <TextField
                multiline
                rows={4}
                placeholder="your message"
                variant="outlined"
                fullWidth
                sx={{ bgcolor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid>
            <button class="button button1" type="submit">
              <b>SEND MESSAGE</b>
            </button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
