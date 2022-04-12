import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Avatar } from "antd";
import {
  FolderOutlined,
  FileTextOutlined,
  UsergroupAddOutlined,
  UserOutlined
} from "@ant-design/icons";
const { Meta } = Card;

const ProfileCard = (props) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(props.userData);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Card>
        <Meta
          avatar={<Avatar size={70} src={userData.avatar_url} />}
          title={userData.login}
          description={userData.name}
        />
        <div className="user-stats-wrapper">
          <div className="user-stats">
            <div className="user-stat">
              <div className="stat-icon">
                <FolderOutlined />
              </div>
              <div className="stat-info">
                <div className="label">Repos</div>
                <div>{userData.public_repos}</div>
              </div>
            </div>
            <div className="user-stat">
              <div className="stat-icon">
                <FileTextOutlined />
              </div>
              <div className="stat-info">
                <div className="label">Gists</div>
                <div>{userData.public_gists}</div>
              </div>
            </div>
            <div className="user-stat">
              <div className="stat-icon">
                <UsergroupAddOutlined />
              </div>
              <div className="stat-info">
                <div className="label">Followers</div>
                <div>{userData.followers}</div>
              </div>
            </div>
            <div className="user-stat">
              <div className="stat-icon">
                <UserOutlined />
              </div>
              <div className="stat-info">
                <div className="label">Following</div>
                <div>{userData.following}</div>
              </div>
            </div>
          </div>
          <div className="view-full-profile">
            <Link to="/profile" state={{ profile: userData }}>
              View Full Profile
            </Link>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProfileCard;
