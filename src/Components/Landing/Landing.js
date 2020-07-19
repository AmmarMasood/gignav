import React, { useState } from "react";
import {
  Link,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import StarIcon from "@material-ui/icons/Star";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import "../../Style/Landing.css";
import GetStarted from "../Common/GetStarted";

const MyShowCard = () => (
  <Paper elevation={3} style={{ borderRadius: "20px" }}>
    <List component="nav" aria-labelledby="nested-list-subheader">
      {/* can be used later onClick={handleClick} */}

      <ListItem
        style={{
          borderRadius: "10px",
          backgroundColor: "#3695ef",
          color: "white"
        }}
        button
      >
        <ListItemIcon>
          <ErrorOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText style={{ color: "white" }} primary="Job Details" />
        <ArrowForwardIosIcon
          style={{
            width: "20px",
            height: "20px",
            color: "#A2A8B7",
            opacity: "0.5"
          }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Customer Details" style={{ color: "#555862" }} />
        <ArrowForwardIosIcon
          style={{
            width: "20px",
            height: "20px",
            color: "#A2A8B7",
            opacity: "0.5"
          }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ListOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="Line Items & Amount"
          style={{ color: "#555862" }}
        />
        <ArrowForwardIosIcon
          style={{
            width: "20px",
            height: "20px",
            color: "#A2A8B7",
            opacity: "0.5"
          }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LocationOnOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Location" style={{ color: "#555862" }} />
        <ArrowForwardIosIcon
          style={{
            width: "20px",
            height: "20px",
            color: "#A2A8B7",

            opacity: "0.5"
          }}
        />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ContactsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Contract Details" style={{ color: "#555862" }} />
        <ArrowForwardIosIcon
          style={{
            width: "20px",
            height: "20px",
            color: "#A2A8B7",
            // mixBlendMode: "normal",
            opacity: "0.5"
          }}
        />
      </ListItem>
    </List>
  </Paper>
);
function Landing() {
  const [business, setBusiness] = useState(false);
  const [freelancer, setFreelancer] = useState(true);
  const handleOnClickBusiness = () => {
    setBusiness(true);
    setFreelancer(false);
  };
  const handleOnClickFreelancer = () => {
    setBusiness(false);
    setFreelancer(true);
  };
  return (
    <div className="Landing-container">
      {/* LANDING HEADER START */}
      <div className="Landing-header">
        <div className="Landing-back"></div>
        <div className="Landing-header--1">
          <div className="Landing-header--1-text">
            Find the perfect freelancer <br /> Staffing Agency, Job or <br />{" "}
            Talent Network
          </div>
          <div className="Landing-header--1-search">
            <Autocomplete
              id="combo-box-demo"
              options={categories}
              getOptionLabel={option => option.name}
              style={{ width: 200, display: "inline-block" }}
              renderInput={params => (
                <TextField {...params} label="Search" variant="outlined" />
              )}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#3695EF",
                color: "white",
                padding: "0 20px 0 20px"
              }}
            >
              Search
            </Button>
          </div>
          <div className="Landing-header--1-specific">
            Have a specified project?{" "}
            <Link
              style={{
                color: "#3695EF",
                cursor: "pointer",
                fontWeight: "bold",
                paddingLeft: "5px"
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="Landing-header--2">
          <div className="Landing-header--2-text">
            <div>
              <div className="Landing-header--2-text-name">
                Peter Richardson
              </div>
              <div className="Landing-header--2-text-job">
                Mechanical Engineer
              </div>
              <div className="Landing-header--2-text-stars">
                10 Jobs
                <label style={{ paddingLeft: "5px" }}>
                  <StarIcon style={{ color: "#FFCC17", fontSize: "20px" }} />
                  <StarIcon style={{ color: "#FFCC17", fontSize: "20px" }} />
                  <StarIcon style={{ color: "#FFCC17", fontSize: "20px" }} />
                  <StarIcon style={{ color: "#FFCC17", fontSize: "20px" }} />
                  <StarIcon style={{ color: "#FFCC17", fontSize: "20px" }} />
                </label>
              </div>
            </div>
          </div>
          <div className="Landing-header--2-img">
            <img
              src={require("../../Images/construction-worker 1.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* LANDING HEADER END */}
      {/* COMPANIES SECTION STARTS */}
      <div className="Landing-companies">
        <div>
          <img src={require("../../Images/companies/subway.png")} alt="" />
        </div>
        <div>
          <img src={require("../../Images/companies/navistar.png")} alt="" />
        </div>
        <div>
          <img src={require("../../Images/companies/irevu.png")} alt="" />
        </div>
        <div>
          <img src={require("../../Images/companies/gm.png")} alt="" />
        </div>
        <div>
          <img src={require("../../Images/companies/chai.png")} alt="" />
        </div>
        <div>
          <img src={require("../../Images/companies/allstate.png")} alt="" />
        </div>
      </div>
      {/* COMPANIES SECTION ENDS */}
      {/* OUR SERVICES STARTS */}
      <div className="Landing-services">
        <div className="Landing-services-heading">Our Services</div>
        <div className="Landing-services-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nulla
          est deserunt excepturi accusantium expedita labore distinctio quos
          molestiae eveniet, laudantium recusandae, consequuntur modi, animi eum
          assumenda in autem natus?
        </div>
        <div className="Landing-services-cards">
          <div className="Landing-services-card Landing-services-card--1">
            <div className="Landing-services-card-text">
              FreeLancer MarketPlaces
            </div>
            <div className="Landing-services-card-btn">
              <Button
                variant="outlined"
                style={{ color: "white", border: "2px solid white" }}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="Landing-services-card Landing-services-card--2">
            <div className="Landing-services-card-text">Field Services</div>
            <div className="Landing-services-card-btn">
              <Button
                variant="outlined"
                style={{ color: "white", border: "2px solid white" }}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="Landing-services-card Landing-services-card--3">
            <div className="Landing-services-card-text">
              On Demand Workfore Solutions
            </div>
            <div className="Landing-services-card-btn">
              <Button
                variant="outlined"
                style={{ color: "white", border: "2px solid white" }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* OUR SERVICES STARTS */}
      {/* HOW IT WORKS STARTS */}
      <div className="Landing-howitworks">
        <div className="Landing-howitworks-heading">How It Works</div>
        <div className="Landing-howitworks-choose">
          <div>
            <Button
              style={
                business
                  ? {
                      margin: "10px",
                      background: "rgba(54, 149, 239, 0.1)",
                      borderRadius: "60px",
                      color: "#3695EF",
                      fontWeight: "bold"
                    }
                  : { margin: "10px" }
              }
              variant={business ? "contained" : "text"}
              onClick={handleOnClickBusiness}
            >
              For Business
            </Button>
          </div>
          <div>
            <Button
              variant={freelancer ? "contained" : "text"}
              onClick={handleOnClickFreelancer}
              style={
                freelancer
                  ? {
                      margin: "10px",
                      background: "rgba(54, 149, 239, 0.1)",
                      borderRadius: "60px",
                      color: "#3695EF",
                      fontWeight: "bold"
                    }
                  : { margin: "10px" }
              }
            >
              For FreeLancers
            </Button>
          </div>
        </div>
        <div className="Landing-howitworks-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae
          aut tenetur deleniti, dolore sequi veniam porro, quos natus recusandae
          sed, eligendi sit consequuntur repudiandae voluptates cumque
          voluptatibus eaque harum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iure incidunt natus sint non facilis laborum fuga
          reprehenderit, sequi exercitationem. Natus hic fugit magni sint
          reiciendis similique repudiandae dolorum libero nobis?
        </div>
        <div className="Landing-howitworks-step Landing-howitworks-step--1">
          <div className="Landing-howitworks-step-card">
            <MyShowCard />
          </div>
          <div className="Landing-howitworks-step-text">
            <div className="Landing-howitworks-step-text--heading">Step 1</div>
            <div className="Landing-howitworks-step-text--txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis sunt aut nesciunt quam quaerat? Veniam deleniti
              consequatur nostrum mollitia repellendus ut dolores at velit ab
              quaerat. Fugiat perspiciatis repudiandae reiciendis.
            </div>
          </div>
        </div>
        <div className="Landing-howitworks-step Landing-howitworks-step--2">
          <div className="Landing-howitworks-step-text">
            <div className="Landing-howitworks-step-text--heading">Step 2</div>
            <div className="Landing-howitworks-step-text--txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis sunt aut nesciunt quam quaerat? Veniam deleniti
              consequatur nostrum mollitia repellendus ut dolores at velit ab
              quaerat. Fugiat perspiciatis repudiandae reiciendis.
            </div>
          </div>
          <div className="Landing-howitworks-step-card">
            <MyShowCard />
          </div>
        </div>
        <div className="Landing-howitworks-step Landing-howitworks-step--3">
          <div className="Landing-howitworks-step-card">
            <MyShowCard />
          </div>
          <div className="Landing-howitworks-step-text">
            <div className="Landing-howitworks-step-text--heading">Step 3</div>
            <div className="Landing-howitworks-step-text--txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis sunt aut nesciunt quam quaerat? Veniam deleniti
              consequatur nostrum mollitia repellendus ut dolores at velit ab
              quaerat. Fugiat perspiciatis repudiandae reiciendis.
            </div>
          </div>
        </div>
      </div>
      {/* HOW IT WORKS ENDS */}
      {/* GET STARTED STARTS */}
      <GetStarted />
      {/* GET STARTED ENDS */}
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

export default Landing;
