import React from "react";
import "./contacts.scss"
import PhoneIconContacts from '@material-ui/icons/Phone';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import MarkunreadIcon from '@material-ui/icons/Markunread';


export default function Contacts() {
  return (
    <div className="ContentContacts">
        <div className="bodyContacts">
            <ul>
                <li><PhoneIconContacts className="phoneNumber"></PhoneIconContacts>+375338562365</li>
                <li><PhoneIconContacts className="phoneNumber"></PhoneIconContacts>+375298887766</li>
                <li><PhoneIconContacts ></PhoneIconContacts>+375338887766</li>
                <li><HomeWorkIcon className="homeIcon"></HomeWorkIcon>г.Брест ул.Ордженикидзе 18а</li>
                <li><MarkunreadIcon className="homeIcon"></MarkunreadIcon>BestFriendYourPets@gmail.com</li>
            </ul>
        </div>
    </div>
  )}