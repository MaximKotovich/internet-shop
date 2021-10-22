import React from "react";
import "./contacts.scss"
import PhoneIconContacts from '@material-ui/icons/Phone';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MarkunreadIcon from '@material-ui/icons/Markunread';


export default function Contacts() {

  const phone = {
    fontSize: '16px',
    marginRight: '10px',
  };
   const homeIcon = {
    fontSize: '18px',
    marginRight: '10px',
  };

  return (
    <div className="ContentContacts">
        <div className="bodyContacts">
            <ul>
                <li><PhoneIconContacts style={phone}></PhoneIconContacts>+375338562365</li>
                <li><PhoneIconContacts style={phone}></PhoneIconContacts>+375298887766</li>
                <li><PhoneIconContacts style={phone}></PhoneIconContacts>+375338887766</li>
                <li><HomeWorkIcon style={homeIcon}></HomeWorkIcon>г.Брест ул.Ордженикидзе 18а</li>
                <li><MarkunreadIcon style={homeIcon}></MarkunreadIcon>BestFriendYourPets@gmail.com</li>
            </ul>
        </div>
    </div>
  )}