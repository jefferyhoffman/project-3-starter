const Menu = {
  public: [
    {
      label: "Home",
      pathname: "/",
    },
    // {
    //     label: "Dashboard",
    //     pathname: "/dashboard",
    // }
  ],
  private: [
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
  ],
};

export default Menu;
