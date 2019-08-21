import { createBottomTabNavigator, createAppContainer } from 'react-navigation'; 

import PopularTab from '../screens/TabScreen/PopularTab';
import RecommandTab from '../screens/TabScreen/RecommandTab';
import EventTab from '../screens/TabScreen/EventTab';
import MyTab from '../screens/TabScreen/MyTab' ;


const AppTabNavigator = createBottomTabNavigator({ //하단 탭 생성
    PopularTab: { screen: PopularTab },
    RecommandTab: { screen: RecommandTab },
    EventTab: { screen: EventTab },
    MyTab: { screen: MyTab }
});

const AppTabContainer = createAppContainer(AppTabNavigator);

export default AppTabContainer;