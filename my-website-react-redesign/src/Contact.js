import React from 'react';
import data from './info.json';
import self from './self.jpg';

function Contact () {
  let {contact: { tel, email }} = data;
  return (
    <div className="contact">
        <img src={self}></img>
        <h4>Contact Information</h4>
        <a href={email}><p align="center">&#128231; Email: zoey.m.gavette@gmail.com</p></a>
        <a href={tel}><p align="center">&#9742;&#65039; Phone: (503) 820-9509</p></a>
      </div>
      );
};

export default Contact;
