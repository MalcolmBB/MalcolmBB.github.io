import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button as MaterialButton } from "@material-ui/core";
import MyIcon from "./MyIcon";
import { StylesProvider } from "@material-ui/core/styles";
import "./Button.css";
import $ from "jquery";

function Button({
  type,
  className,
  linkTo,
  value,
  linePos,
  onClick = () => {
    $(".simplebar-content-wrapper")[0].scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.activeElement.blur();
  },
}) {
  if (linePos != null) {
    className += " " + linePos;
  } else {
    className += " leftLine";
  }
  if (type === "Link") {
    if (value === "") {
      return linkButtonEmpty({ className, linkTo, linePos });
    } else {
      return linkButton({ className, linkTo, value, linePos });
    }
  } else if (type === "Navigation") {
    if (value === "") {
      return navButtonEmpty({ className, linkTo, linePos, onClick });
    }
    return navButton({ className, linkTo, value, linePos, onClick });
  } else if (type === "NavigationHeader") {
    if (value === "") {
      return navButtonEmpty({ className, linkTo, linePos, onClick });
    }
    return navHeaderButton({ className, linkTo, value, linePos, onClick });
  } else if (type === "Submit") {
    return submitButton({ className, value, linePos, onClick });
  }
}

function submitButton({ className, value, linePos, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      <span>&lt;{value}/&gt;</span>
    </button>
  );
}

function navHeaderButton({ className, linkTo, value, linePos, onClick }) {
  return (
    <NavLink
      tabIndex="-1"
      to={linkTo}
      className={({ isActive }) => (isActive ? "activePageButton" : "")}
    >
      <button className={className} onClick={onClick}>
        <span>&lt;{value}/&gt;</span>
      </button>
    </NavLink>
  );
}

function navButton({ className, linkTo, value, linePos, onClick }) {
  return (
    <StylesProvider injectFirst>
      <MaterialButton
        className={className}
        onClick={onClick}
        component={Link}
        to={linkTo}
        disableFocusRipple={true}
        disableRipple={true}
      >
        <span>&lt;{value}/&gt;</span>
      </MaterialButton>
    </StylesProvider>
  );
}

function navButtonEmpty({ className, linkTo, linePos, onClick }) {
  return (
    <Link tabIndex="-1" to={linkTo}>
      <button className={className} onClick={onClick}>
        <MyIcon
          name="Email"
          tabIndex="-1"
          bgColor="transparent"
          fgColor="var(--iconColor)"
          style={{
            width: "var(--iconSize)",
            height: "var(--iconSize)",
            padding: 0,
            margin: "var(--iconMargin)",
          }}
        ></MyIcon>
      </button>
    </Link>
  );
}

function linkButton({ className, linkTo, value, linePos }) {
  return (
    <a tabIndex="-1" href={linkTo} target="_blank" rel="noreferrer">
      <button
        className={className}
        onClick={() => {
          document.activeElement.blur();
        }}
      >
        <span>
          &lt;{value}/&gt;
          <MyIcon
            link={linkTo}
            tabIndex="-1"
            bgColor="transparent"
            fgColor="var(--iconColor)"
            style={{
              width: "var(--textIconSize)",
              height: "var(--textIconSize)",
              padding: 0,
              margin: "var(--textIconMargin)",
            }}
          ></MyIcon>
        </span>
      </button>
    </a>
  );
}

function linkButtonEmpty({ className, linkTo, linePos }) {
  return (
    <a tabIndex="-1" href={linkTo} target="_blank" rel="noreferrer">
      <button
        className={className}
        onClick={() => {
          document.activeElement.blur();
        }}
      >
        <MyIcon
          link={linkTo}
          tabIndex="-1"
          bgColor="transparent"
          fgColor="var(--iconColor)"
          style={{
            width: "var(--iconSize)",
            height: "var(--iconSize)",
            padding: 0,
            margin: "var(--iconMargin)",
          }}
        ></MyIcon>
      </button>
    </a>
  );
}

export default Button;
