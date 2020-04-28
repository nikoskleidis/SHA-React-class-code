import React from "react";
import "./styles.css"

const menuItems = [
  "INTRO",
  "HOME",
  "PAGES",
  "BLOG",
  "FEATURES",
  "SHORTCODES"
]

function MenuItem({ children, selected }) {
  return (
    <li style={{ color: selected ? "green" : "black" }}>{children}</li>
  )
}

function Menu() {
  return (
    <ul className={"menuWrapper"}>
      {menuItems.map((item, index) => {
        return <MenuItem key={index} selected={item === "PAGES"}>{item}</MenuItem>
      })}
    </ul>
  )
}

export default Menu
