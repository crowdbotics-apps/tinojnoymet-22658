import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile174037Navigator from '../features/UserProfile174037/navigator';
import Tutorial174036Navigator from '../features/Tutorial174036/navigator';
import NotificationList174008Navigator from '../features/NotificationList174008/navigator';
import Settings174007Navigator from '../features/Settings174007/navigator';
import Settings173999Navigator from '../features/Settings173999/navigator';
import UserProfile173997Navigator from '../features/UserProfile173997/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile174037: { screen: UserProfile174037Navigator },
Tutorial174036: { screen: Tutorial174036Navigator },
NotificationList174008: { screen: NotificationList174008Navigator },
Settings174007: { screen: Settings174007Navigator },
Settings173999: { screen: Settings173999Navigator },
UserProfile173997: { screen: UserProfile173997Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
