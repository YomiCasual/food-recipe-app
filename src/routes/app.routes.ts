import { icons } from "@app/appconstants";
import {
  BookMark,
  Home,
  Onboarding,
  RecipeDetails,
  Search,
  Settings,
} from "@app/screens";
import { APP_ROUTES_CONSTANTS } from "./constants";

const ONBOARDING_SCREENS = [
  {
    component: Onboarding,
    name: APP_ROUTES_CONSTANTS.ONBOARDING,
    icon: "",
  },
];

const HOME_TAB_SCREENS = [
  {
    component: Home,
    name: APP_ROUTES_CONSTANTS.HOME,
    icon: icons.home,
  },
  {
    component: Search,
    name: APP_ROUTES_CONSTANTS.SEARCH,
    icon: icons.search,
  },
  {
    component: BookMark,
    name: APP_ROUTES_CONSTANTS.BOOKMARK,
    icon: icons.bookmark,
  },
  {
    component: Settings,
    name: APP_ROUTES_CONSTANTS.SETTINGS,
    icon: icons.settings,
  },
];
const OTHER_SCREENS = [
  {
    component: RecipeDetails,
    name: APP_ROUTES_CONSTANTS.RECIPE_DETAILS,
  },
];

export { ONBOARDING_SCREENS, HOME_TAB_SCREENS, OTHER_SCREENS };
