import React from "react";

function getBgColor(type) {
  switch (type) {
    case "success":
      return "green"
    case "warning":
      return "#cd8023"
    case "error":
      return "red"
    default:
      return "blue"
  }

}

function Alert(props) {
  return (
    <div className={`alertBox ${props.className}`} style={{
      backgroundColor: getBgColor(props.type)
    }}>
      {props.children}
    </div>
  )
}

export default Alert
