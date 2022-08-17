import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HOME_TAB_SCREENS,
  ONBOARDING_SCREENS,
  OTHER_SCREENS,
} from "./app.routes";
import { APP_ROUTES_CONSTANTS } from "./constants";
import BottomBar from "@app/components/home/BottomBar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const buildStack = ({
  stacks,
  initialRouteName,
  noStack = false,
}: {
  stacks: any[];
  initialRouteName: string;
  noStack?: boolean;
}) => {
  const StackScreen = () => {
    return noStack ? (
      <>
        {stacks.map((item) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </>
    ) : (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRouteName}
      >
        {stacks.map((item) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Stack.Navigator>
    );
  };
  return StackScreen;
};

const buildTabStack = ({ stacks }: { stacks: any[] }) => {
  const TabScreen = () => {
    return (
      <Tab.Navigator
        // screenOptions={{
        //   headerShown: false,
        //   //   tabBarLabelPosition: "below-icon",
        // }}
        // safeAreaInsets={{ bottom: 0 }}
        tabBar={(props) => <BottomBar {...props} />}
      >
        {stacks.map((item) => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{
              headerShown: false,
              tabBarIcon: item.icon,
            }}
          />
        ))}
      </Tab.Navigator>
    );
  };
  return TabScreen;
};

const OnboardingNavigation = buildStack({
  stacks: ONBOARDING_SCREENS,
  initialRouteName: APP_ROUTES_CONSTANTS.ONBOARDING,
});
const AppNavigation = buildTabStack({ stacks: HOME_TAB_SCREENS });
const OtherNavigation = buildStack({
  stacks: OTHER_SCREENS,
  initialRouteName: APP_ROUTES_CONSTANTS.RECIPE_DETAILS,
  noStack: true,
});

const CreateAppNavigation = () => {
  return (
    <NavigationContainer
      children={
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"AUTH"}
        >
          <Stack.Screen name={"AUTH"} component={OnboardingNavigation} />
          <Stack.Screen name={"APP"} component={AppNavigation} />
          {OtherNavigation()}
        </Stack.Navigator>
      }
    />
  );
};

export { CreateAppNavigation };
