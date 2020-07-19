import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../../Utils/server";
import { withRouter } from "react-router-dom";
import "../../../Style/ProfileDetails.css";
import {
  Paper,
  Avatar,
  LinearProgress,
  Button,
  Divider,
  Chip,
  Link
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CircularProgress from "@material-ui/core/CircularProgress";

function ProfileDetails({ currentProfile }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/freelancer/${currentProfile}`)
      .then(res => {
        setLoading(false);
        console.log(res.data);
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
      });
  }, [currentProfile]);
  return (
    <div style={{ backgroundColor: "#f6f7fb" }}>
      {loading ? (
        <CircularProgress
          style={{
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      ) : (
        <div className="ProfileDetails-container">
          <Paper style={{ padding: "10px" }} elevation={3}>
            <div className="ProfileDetails-overview">
              <div className="ProfileDetails-img">
                <Avatar
                  src="/broken-image.jpg"
                  style={{ width: "100%", height: "100%" }}
                  className="ProfileDetails-img--display"
                />
              </div>
              <div className="ProfileDetails-info">
                <div className="ProfileDetails-info--name">Your Name Here</div>
                <div className="ProfileDetails-info--profession">
                  Your Profession Here
                </div>
                <div className="ProfileDetails-info--location">
                  <LocationOnIcon style={{ verticalAlign: "middle" }} />
                  Your Location Here
                </div>

                <div className="ProfileDetails-info--timezone">
                  time zone goes here
                </div>
              </div>
              <div className="ProfileDetails-scores">
                <div className="ProfileDetails-scores--1">
                  100% Job Success
                  <LinearProgress variant="determinate" value={100} />
                </div>
                <div className="ProfileDetails-scores--2">$40 - $50/h</div>
                <div className="ProfileDetails-scores--3">
                  Partially Available
                </div>
                <div className="ProfileDetails-scores--4">
                  <Button variant="contained" color="primary">
                    Hire
                  </Button>
                </div>
              </div>
            </div>
          </Paper>
          <Paper style={{ marginTop: "10px", padding: "10px" }} elevation={3}>
            <div className="ProfileDetails-details">
              {/* bio */}
              <div className="ProfileDetails-details-bio">
                <div className="ProfileDetails-details-bio--heading">BIO</div>
                <div className="ProfileDetails-details-bio--txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae sunt excepturi quo, rerum labore mollitia cum
                  exercitationem facilis, facere nemo tempora consequuntur
                  sapiente itaque a reprehenderit magnam quisquam tempore!
                  Eveniet? Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Sed a eum accusantium nostrum dolorum necessitatibus
                  natus suscipit sapiente dignissimos, eveniet labore fugit!
                  Inventore nostrum expedita qui dolores doloremque,
                  necessitatibus quasi?
                </div>
              </div>
              <Divider />
              {/* skills */}
              <div className="ProfileDetails-details-skills">
                <div className="ProfileDetails-details-bio--heading">
                  Skills
                </div>
                <div className="ProfileDetails-details-skills--show">
                  <Chip
                    style={{ marginRight: "5px" }}
                    label="Basic"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    style={{ marginRight: "5px" }}
                    label="Basic"
                    variant="outlined"
                    color="primary"
                  />
                  <Chip
                    style={{ marginRight: "5px" }}
                    label="Basic"
                    variant="outlined"
                    color="primary"
                  />
                </div>
              </div>
            </div>
          </Paper>
          {/* education  */}
          <Paper style={{ marginTop: "10px", padding: "10px" }} elevation={3}>
            <div className="ProfileDetails-edu">
              <div className="ProfileDetails-details-bio--heading">
                Education
              </div>
              <div className="ProfileDetails-details-bio--txt">
                MS- Computer Science
              </div>
            </div>
            <Divider />
            <div className="ProfileDetails-edu">
              <div className="ProfileDetails-details-bio--heading">
                Experience
              </div>
              <div className="ProfileDetails-details-bio--txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                laudantium autem praesentium ullam, nemo tempora placeat
                voluptatum in corrupti cupiditate neque quae totam repellat
                quia, magni debitis dignissimos alias delectus.
              </div>
            </div>
            <Divider />
            <div className="ProfileDetails-edu">
              <div className="ProfileDetails-details-bio--heading">
                Certification
              </div>
              <div className="ProfileDetails-details-bio--txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                laudantium autem praesentium ullam, nemo tempora placeat
                voluptatum in corrupti cupiditate neque quae totam repellat
                quia, magni debitis dignissimos alias delectus.
              </div>
            </div>
          </Paper>
          <Paper style={{ marginTop: "10px", padding: "10px" }} elevation={3}>
            <div className="ProfileDetails-edu">
              <div className="ProfileDetails-details-bio--heading">
                Training
              </div>
              <div className="ProfileDetails-details-bio--txt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                laudantium autem praesentium ullam, nemo tempora placeat
                voluptatum in corrupti cupiditate neque quae totam repellat
                quia, magni debitis dignissimos alias delectus.
              </div>
            </div>
            {/* <Divider />
           <div className="ProfileDetails-edu">
             <div className="ProfileDetails-details-bio--heading">Guilds</div>
             <div className="ProfileDetails-details-bio--guilds">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
               laudantium autem praesentium ullam, nemo tempora placeat
               voluptatum in corrupti cupiditate neque quae totam repellat quia,
               magni debitis dignissimos alias delectus.
             </div>
           </div> */}
          </Paper>
          <Paper style={{ marginTop: "10px", padding: "10px" }} elevation={3}>
            <div className="ProfileDetails-edu">
              <div className="ProfileDetails-details-bio--heading">Contact</div>
              <div className="ProfileDetails-details-bio--contact">
                <Link>
                  <LinkedInIcon style={{ fontSize: "50px" }} />
                </Link>
              </div>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
}

export default withRouter(ProfileDetails);
