const Menu = {
  publicTabs: [
    {
      label: "Home",
      pathname: "/",
    },
  ],
  privateTabs: [
    // {
    //   label: "Secret",
    //   pathname: "/secret",
    // },
    {
      label: "Dashboard",
      pathname: "/dashboard",
    },
  ],
  loggedIn: [
    {
      label: "Login",
      pathname: "/login",
    },
    {
      label: "Register",
      pathname: "/register",
    },
    {
      label: "Github",
      pathname: "https://github.com/wwshehan/project-3",
      external: true,
    },
  ],
};

export default Menu;
