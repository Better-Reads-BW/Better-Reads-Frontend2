import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import BookList from "./BookList";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel("home", "Home Page");
const signinLabel = createLabel("signin", "Signin Page");
const signupLabel = createLabel("signup", "SignUp Page");

const panes = [
  {
    menuItem: <Menu.Item key="home" as={Nav} to={`/`} content={welcomeLabel} />
  },
  {
    menuItem: (
      <Menu.Item
        key="signup"
        as={Nav}
        to={"/register"}
        content={signupLabel}
        active={BookList}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="signin"
        as={Nav}
        to={"/login"}
        content={signinLabel}
        active={BookList}
      />
    )
  }
];
const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
