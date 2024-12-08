import { appRoutes } from "../../utils/appLinks";

export const headItems = [
  {
    key: "privacy-policy",
    name: "Privacy Policy",
    link: appRoutes.CONTACT,
    isMenuItem: true,
    fullLink: appRoutes.CONTACT,
  },
  {
    key: "contact",
    name: "Contact",
    link: appRoutes.CONTACT,
    isMenuItem: true,
    fullLink: appRoutes.CONTACT,
  },

  // {
  //   key: "features",
  //   isMenuItem: true,
  //   name: "Features",
  //   link: appRoutes.FEATURES,
  //   fullLink: appRoutes.FEATURES,
  // },

  {
    key: "login",
    isMenuItem: true,
    name: "Login",
    link: "",
  },
];
