import React /* { useState, useEffect } */ from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Header, Image, Menu, Tab } from 'semantic-ui-react';

import Navigation from '.././Navigation.js';
import DashboardRouter from './DashboardRouter.js';
import defaultAvatar from '../../assets/default-avatar.png';

function Dashboard(props) {
  const avatarSrc = props.user.avatarUrl ? props.user.avatarUrl : defaultAvatar;

  const panes = [
    { menuItem: ( 
      <Menu.Item key='my-item-list'>
        <Link to="/dashboard/itemlist">
          My Item List
        </Link>
      </Menu.Item>
    ),
      render: () => {
        return (
          <Tab.Pane>
            <DashboardRouter {...props} user={props.user} setUser={props.setUser} />
          </Tab.Pane>
        );
      }
    },
    { menuItem: ( 
      <Menu.Item key='update-profile'>
        <Link to="/dashboard/updateprofile">
          Update Profile 
        </Link>
      </Menu.Item>
    ),
      render: () => {
        return (
          <Tab.Pane>
            <DashboardRouter {...props} user={props.user} setUser={props.setUser} />
          </Tab.Pane>
        );
      }
    }

  ];

  return (
    <Container fluid>
      <Navigation ignoreSearch={true} />
      <Container text textAlign='center' style={{marginTop: 75}}>
          <Image src={avatarSrc} verticalAlign='middle' size='tiny' circular/>
          <Header as="h2">
            Welcome back {props.user.firstName}!
          </Header>
          <Tab style={{marginBottom: '50px'}} panes={panes} /> 
        </Container>
        <Redirect to="/dashboard/itemlist"/>
    </Container>
    
  );
}

export default Dashboard;
