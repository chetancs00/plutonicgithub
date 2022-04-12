import React, { useState, useEffect } from "react";
import { Card, Avatar } from "antd";
import {
  UsergroupAddOutlined,
  UserOutlined
} from "@ant-design/icons";


const { Meta } = Card;

function ProfCard(props) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(props.userData);
    // eslint-disable-next-line
  }, [userData]);

  return (
    <div className="prof-card">
      <div>
        <Card
          // style={{ width: 300 }}
          cover={<img alt="user" src={userData.avatar_url} />}
        >
          <Meta
            avatar={<Avatar size={40} src={userData.avatar_url} />}
            title={userData.login}
            description={userData.name}
          />
          
          <div className="follow-card">
             <div className="follow">
                <p>Followers</p>
                <UserOutlined />
                <p>{userData.following}</p>
             </div>
           
              <div className="follow">
                <p>Following</p>
                <UsergroupAddOutlined />
                <div>{userData.followers}</div>
              </div>
              </div>
             
        </Card>
      </div>
    </div>
  
    
  );

}


export default ProfCard;
