import React from "react";
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { Button } from "@material-ui/core";



import Sidebaroptions from './Sidebaroptions'


function Sidebar() {
  return (
<div className="sidebar">
  {/* twitter icon */}
  <TwitterIcon/>


  {/* sidebar option component */}


  <Sidebaroptions active Icon={HomeIcon} text='Home' />
  {/* sidebar option component */}
  <Sidebaroptions Icon={SearchIcon} text='Explore' />
  {/* sidebar option component */}
  <Sidebaroptions Icon={NotificationsNoneIcon} text='Notifications' />
<Sidebaroptions Icon={MailOutlineIcon} text="Messages" />
    <Sidebaroptions Icon={BookmarkBorderIcon} text="Bookmarks" />
    <Sidebaroptions Icon={ListAltIcon} text="Lists" />
    <Sidebaroptions Icon={PermIdentityIcon} text="Profile" />
    <Sidebaroptions Icon={MoreHorizIcon} text="More" />

<Button variant='outlined' className="sidebar__tweet" fullWidth>Tweet</Button>
</div>
  )
}

export default Sidebar;
