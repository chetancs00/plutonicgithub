import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Image,  Card  } from 'antd';

function Searchbox() {

    const [name, setName] = useState(" ")
    const [userName, setUserName] = useState(" ")
    const [followers, setFollowers] = useState(" ")
    const [following, setFollowing] = useState("")
    const [repos, setRepos] = useState(" ")
    const [avatar, setAvatar] = useState("")
    const [userInput, setUserInput] = useState("")
    // const [error, seterror] = useState("")

    // const [value, setValue] = useState("")








    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

      useEffect(() => {
        fetch("https://api.github.com/users/geekyorion")
        .then(res => res.json())
        .then(data => {
          setData(data)
        })
      
        
      }, [])

      const setData = ( {name, login, followers, following, public_repos, avatar_url}) =>{
        setName(name)
        setUserName(login)
        setFollowers(followers)
        setFollowing(following)
        setRepos(public_repos)
        setAvatar(avatar_url)
      }

      const handleSearch =(e) =>{
        setUserInput(e.target.value)
      }
      
     

  return (
    <div>
      <Form onFinish={(value)=> {
          console.log(value)
          fetch(`https://api.github.com/users/${value.username}`)
          .then(res => res.json())
          .then(data => {
            setData(data)
            console.log(data)
          })
      }}>
       <Form.Item name="username" label = "User Name" >
          <Input  className='ip' placeholder='Search User'/ >
      </Form.Item>

      <Button type='primary' htmlType='submit'  style={{marginLeft: "500px"}}>Search User </Button>
    </Form>


      <div className="cardBox">

    <Card title={name}  style={{ width: 300, }} className="card">

    <Image
      width={200}
      src= {avatar}
    />
     
    <h1>{name}</h1>
    <h1>User Name: {userName}</h1>
    <h1>Follwers: {followers}</h1>
    <h1>Following: {following}</h1>
    <h1>Repos: {repos}</h1>
   
    </Card>
      </div>

    </div>
  )
}

export default Searchbox