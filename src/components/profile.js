import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs } from "antd";
import Repos from "./repos";
import ProfCard from "./ProfCard";

const { TabPane } = Tabs;

const Profile = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  const [allRepos, setAllRepos] = useState([]);
  const [starredRepos, setStarredRepos] = useState([]);

  const fetchUserRepos = (api, type) => {
    fetch(api)
      .then((data) => data.json())
      .then((repos) => {
        if (type === "star") {
          setStarredRepos(repos);
        } else {
          setAllRepos(repos);
        }
      });
  };

  useEffect(() => {
    const { profile } = location.state || {};
    setUserData(profile || {});
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (Object.keys(userData).length) {
      const starredURL = userData.starred_url.slice(0, -15);
      fetchUserRepos(starredURL, "star");
      fetchUserRepos(userData.repos_url, "all");
    }
  }, [userData]);

  return (
    <div className="container">
      <ProfCard userData={userData} />
      <div className="profile-div">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Starred Repos" key="1">
            <Repos repos={starredRepos} />
          </TabPane>

          <TabPane tab="All Repos" key="2">
            <Repos repos={allRepos} />
          </TabPane>
        </Tabs>
        <Link to="/home">Go to Home</Link>
      </div>
    </div>
  );
};

export default Profile;
