import React, { useEffect, useState } from "react";
import { server } from "../../../Utils/server";
import axios from "axios";
import "../../../Style/ProfileList.css";
import {
  CircularProgress,
  Paper,
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  CardActionArea,
  TextField,
  Button,
  Chip,
  LinearProgress,
  IconButton

  // Button
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Pagination } from "@material-ui/lab";
import ProfileFilter from "./ProfileFilter";
import { withRouter } from "react-router-dom";
import GetStarted from "../../Common/GetStarted";
import PlaceIcon from "@material-ui/icons/Place";
import CloseIcon from "@material-ui/icons/Close";

import ProfileDrawer from "../ProfileDetails/ProfileDrawer";
import FilterListRoundedIcon from "@material-ui/icons/FilterListRounded";

function ProfileList(props) {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(8);
  const [filterCategory, setFilterCategory] = useState("All Categories");
  const [filterLocation, setFilterLocation] = useState([]);
  const [filterJobSuccess, setFilterJobSuccess] = useState("");
  const [filterHourlyRate, setFilterHourlyRate] = useState("");
  // profile details card
  const [currentProfileId, setCurrentProfileId] = useState("");
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .post(`${server}/freelancer`, {})
      .then(res => {
        if (res.data.status.success) {
          console.log(res.data.response);
          setProfiles(res.data.response);
        } else {
          // setError(true);
          window.alert(res.data.status);
        }
        setLoading(false);
      })
      .catch(err => {
        window.alert(err);
        console.log(err);
        // setError(true);
        setLoading(false);
      });
  }, [setError]);

  // transition card for profile dtails

  const getProfileCards = profiles =>
    profiles.map((profile, key) => (
      <Card
        key={key}
        variant="outlined"
        style={{ margin: "5px", padding: "10px" }}
      >
        <CardActionArea
          onClick={() => {
            setOpen(true);
            setCurrentProfileId(profile.userId);
          }}
        >
          <CardContent>
            <div className="ProfileList-freelancer-card-container">
              <div className="ProfileList-freelancer-card-container--img">
                <Avatar
                  src="/static/images/avatar/1.jpg"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <div className="ProfileList-freelancer-card-container-1">
                <div className="ProfileList-freelancer-card-container-1--name">
                  {profile.fullName ? profile.fullName : "null"}
                </div>
                <div className="ProfileList-freelancer-card-container-1--job">
                  {profile.title ? profile.title : "null"}
                </div>
                <div className="ProfileList-freelancer-card-container-1--country">
                  <PlaceIcon style={{ verticalAlign: "middle" }} />
                  {profile.location ? profile.location : "null"}
                </div>
                <div className="ProfileList-freelancer-card-container-1--intro">
                  {profile.intro ? profile.intro : "null"}
                </div>
              </div>
              <div className="ProfileList-freelancer-card-container-2">
                <div className="ProfileList-freelancer-card-container-2--available">
                  {profile.isAvailable ? (
                    <label style={{ color: "#31C367" }}>Available</label>
                  ) : (
                    <label style={{ color: "#FF9517" }}>
                      Partially Available
                    </label>
                  )}
                </div>
                <div className="ProfileList-freelancer-card-container-2--jobsuccess">
                  {profile.overallJobPerformanceScore}% Job Success
                  <LinearProgress
                    variant="determinate"
                    value={profile.overallJobPerformanceScore}
                  />
                </div>
                <div className="ProfileList-freelancer-card-container-2--rate">
                  ${profile.minHourlyRate ? profile.minHourlyRate : 0} -{" "}
                  {profile.maxHourlyRate ? profile.maxHourlyRate : 0}$/h
                </div>
              </div>
            </div>
          </CardContent>
          {/* <CardActions>
            <Typography style={{ padding: "5px" }} component="p">
              Available: {profile.isAvailable ? "Yes" : "No"}
            </Typography>
          </CardActions> */}
        </CardActionArea>
      </Card>
    ));

  // custom pagination
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  const handleCategoryDelete = () => {
    setFilterCategory("");
  };

  const handleLocationDelete = v => {
    const newLocation = filterLocation.filter(value => value !== v);
    setFilterLocation(newLocation);
  };

  const handleJobSuccessDelete = () => {
    setFilterJobSuccess("");
  };
  const handleHourlyRateDelete = () => {
    setFilterHourlyRate("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogClose = () => setDialogOpen(false);
  return (
    <div className="ProfileList-main">
      <div className="ProfileList-container">
        {/*dialog for filter when screen is mall--starts  */}
        <Dialog
          fullWidth={true}
          open={dialogOpen}
          onClose={handleDialogClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">
            Filter
            <div style={{ float: "right" }}>
              <IconButton
                aria-label="close"
                onClick={() => setDialogOpen(false)}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent>
            <ProfileFilter
              category={filterCategory}
              setCategory={setFilterCategory}
              location={filterLocation}
              setLocation={setFilterLocation}
              jobSuccess={filterJobSuccess}
              setJobSuccess={setFilterJobSuccess}
              hourlyRate={filterHourlyRate}
              setHourlyRate={setFilterHourlyRate}
            />
          </DialogContent>
        </Dialog>

        {/* dialog for filter when screen is small---ends */}
        <div className="ProfileList-filters">
          <ProfileFilter
            category={filterCategory}
            setCategory={setFilterCategory}
            location={filterLocation}
            setLocation={setFilterLocation}
            jobSuccess={filterJobSuccess}
            setJobSuccess={setFilterJobSuccess}
            hourlyRate={filterHourlyRate}
            setHourlyRate={setFilterHourlyRate}
          />
        </div>
        <div className="ProfileList-profiles">
          {loading ? (
            <div className="ProfileList-loader">
              <CircularProgress />
            </div>
          ) : (
            <Paper elevation={3}>
              <div className="Landing-header--1-search">
                <Autocomplete
                  id="tags-outlined"
                  options={categories}
                  getOptionLabel={option => option.name}
                  style={{ width: "100%", display: "inline-block" }}
                  defaultValue={[categories[0]]}
                  renderInput={params => (
                    <TextField {...params} label="Search" variant="outlined" />
                  )}
                />
                <div className="ProfileList--filter-btn">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "5px" }}
                    onClick={() => setDialogOpen(true)}
                  >
                    <FilterListRoundedIcon style={{ fontSize: "30px" }} />{" "}
                  </Button>
                </div>
              </div>
              <div>
                <Paper variant="outlined">
                  {filterHourlyRate ? (
                    <Chip
                      style={{ margin: "8px" }}
                      onDelete={handleHourlyRateDelete}
                      label={`Hourly Rates: ${filterHourlyRate}`}
                      color="primary"
                    />
                  ) : (
                    ""
                  )}
                  {filterJobSuccess ? (
                    <Chip
                      style={{ margin: "8px" }}
                      onDelete={handleJobSuccessDelete}
                      label={`Job Success: ${filterJobSuccess}% & up`}
                      color="primary"
                    />
                  ) : (
                    ""
                  )}
                  {filterCategory ? (
                    <Chip
                      style={{ margin: "8px" }}
                      onDelete={handleCategoryDelete}
                      label={`Category: ${filterCategory}`}
                      color="primary"
                    />
                  ) : (
                    ""
                  )}
                  {filterLocation.length
                    ? filterLocation.map((v, i) => (
                        <Chip
                          style={{ margin: "8px" }}
                          key={i}
                          onDelete={() => handleLocationDelete(v)}
                          label={`Location: ${v}`}
                          color="primary"
                        />
                      ))
                    : ""}
                </Paper>
              </div>
              <div style={{ backgroundColor: "#f6f7fb" }}>
                {getProfileCards(currentProfiles)}
              </div>
              <ProfileDrawer
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                currentProfile={currentProfileId}
              />
              <div className="ProfileList-pagination">
                <Pagination
                  style={{ display: "flex", flexDirection: "row-reverse" }}
                  count={Math.ceil(profiles.length / profilesPerPage)}
                  color="primary"
                  onChange={paginate}
                />
                {console.log(profiles)}
              </div>
            </Paper>
          )}
        </div>
      </div>

      <GetStarted />
    </div>
  );
}

const categories = [
  { name: "All Categories" },
  { name: "Accounting & Consulting" },
  { name: "Admin Support" },
  { name: "Customer Service" },
  { name: "Data Science & Analytics" },
  { name: "Design & Creative" },
  { name: "Engineering & Architecture" },
  { name: "IT & Networking" },
  { name: "Legal" },
  { name: "Sales & Marketing" },
  { name: "Translation" },
  { name: "Web, Mobile & Software Dev" },
  { name: "Writing" }
];

export default withRouter(ProfileList);
