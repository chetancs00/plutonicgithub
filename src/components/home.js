import { useState } from "react";
import { Input } from "antd";
import ProfileCard from "./profile-card";
const { Search } = Input;

const Home = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [dataStatus, setDataStatus] = useState(null);

  const handleSearch = (value, _event) => {
    if (!value) return;
    setDataStatus("searching");
    setUserData({});

    fetch(`https://api.github.com/users/${value}`)
      .then((res) => res.json())
      .then((userData) => {
        if (userData.message === "Not Found") {
          setDataStatus("not-found");
        } else {
          setDataStatus("found");
          setUserData(userData);
        }
      })
      .catch(() => {
        setDataStatus("not-found");
      });
    setUsername("");
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <div className="home-wrapper">
        <div className="search-box">
          <Search
            placeholder="Enter a GitHub username"
            enterButton="Search"
            onSearch={handleSearch}
            value={username}
            onChange={handleChange}
            allowClear
          />
        </div>
        <div
          className={`search-result ${dataStatus === "found" ? "isFound" : ""}`}
        >
          {dataStatus === null ? (
            <p className="info m-0">User information will be displayed here</p>
          ) : dataStatus === "not-found" ? (
            <p className="info m-0">
              Unable to find user information with provided username
            </p>
          ) : dataStatus === "searching" ? (
            <p className="info m-0">Searching ...</p>
          ) : (
            <ProfileCard userData={userData} />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
