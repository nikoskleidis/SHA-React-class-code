import React from "react";

function Title(props) {
  const renderSubtitle = Boolean(props.subtitle)
  return (
    <div>
      <h1 style={{
        color: props.color
      }}>
        {props.children}
      </h1>
      {renderSubtitle
        ? <h5>subtitle: {props.subtitle}</h5>
        : "no subtitle was given"}
    </div>
  )
}

export default Title
