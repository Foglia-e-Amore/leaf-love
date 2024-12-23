import React from 'react';
import './Farm-to-table.css'
import cows from "../../images/cows.png";
import cowicon from "../../images/cowicons.png";

function FarmToTable() {
  return(
    <div id="FarmtoTable">
      <div class = "main-content">
        <div class = "imgcont">
          <img class = "F2TImg" src={cows} alt = "cow ran away"/>
          <ul class = "bulletlist">
            <li class = "bulletlistitem">Farm to table is the whole process of delivering local foods directly from its producers, such as farms, wineries, breweries, or fisheries, directly to restaurants. The goal is to avoid middlemen and instead, focus on a fresher, more local producer. This can be done through direct sales, farmers' markets, community-supported agriculture programs, or even by the restaurant producing food themselves. We, at Foglia e Amore, source all produce, meats, and dairy products from local farms. Ensuring that the hard work of farmers near our restaurants are rewarded, and that our customers get the freshest food.</li>
            <li class = "bulletlistitem">A large part of the farm to table movement is making the origin of your food clear. You may have seen menus from other farm to table restaurants identifying farms or producers of particular ingredients. Of course, not everything can be local, but we still try our best to make a large portion of our menu locally sourced. These items are always labeled on our menus both in person and online.</li>
            <li id = "lastitem" class = "bulletlistitem">The farm to table movement became more popular as people have started to care more about fresh, seasonal food and supporting small, local farms. Many supporters of the movement say their goal is to fix problems like the lack of fresh local options, the bad taste of food shipped long distances, and the decline of small family farms. At the end of the day, the farm to table movement is all about reconnecting with food and its producers.</li>
          </ul>
        </div>
        <div class = "imgcont">
          <img class = "F2TImg" src={cows} alt = "cow ran away"/>
          <ul class = "bulletlist">
            <li class = "bulletlistitem">Farm to table is the whole process of delivering local foods directly from its producers, such as farms, wineries, breweries, or fisheries, directly to restaurants. The goal is to avoid middlemen and instead, focus on a fresher, more local producer. This can be done through direct sales, farmers' markets, community-supported agriculture programs, or even by the restaurant producing food themselves. We, at Foglia e Amore, source all produce, meats, and dairy products from local farms. Ensuring that the hard work of farmers near our restaurants are rewarded, and that our customers get the freshest food.</li>
            <li class = "bulletlistitem">A large part of the farm to table movement is making the origin of your food clear. You may have seen menus from other farm to table restaurants identifying farms or producers of particular ingredients. Of course, not everything can be local, but we still try our best to make a large portion of our menu locally sourced. These items are always labeled on our menus both in person and online.</li>
            <li id = "lastitem" class = "bulletlistitem">The farm to table movement became more popular as people have started to care more about fresh, seasonal food and supporting small, local farms. Many supporters of the movement say their goal is to fix problems like the lack of fresh local options, the bad taste of food shipped long distances, and the decline of small family farms. At the end of the day, the farm to table movement is all about reconnecting with food and its producers.</li>
          </ul>
        </div>
        </div>
      <div class = "sidebarlmao">
        <img class = "sidebarimglol" src = {cowicon} alt = "cow icon ran away"/>
        <img class = "sidebarimglol" src = {cowicon} alt = "cow icon ran away"/>
        <img class = "sidebarimglol" src = {cowicon} alt = "cow icon ran away"/>
        <img class = "sidebarimglol" src = {cowicon} alt = "cow icon ran away"/>
      </div>
    </div>
  )
}

export default FarmToTable;