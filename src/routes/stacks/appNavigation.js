import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import UserAppStack from '../tabs/BottomTabs';
import Home from '../../screens/Main/Home';
import EditProfile from '../../screens/Main/EditProfile';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  let reduxData = useSelector((state) => state)
  console.log('reduxData', reduxData);
  return (
    <>
      <Stack.Navigator
        initialRouteName="UserAppStack"
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitleAllowFontScaling: true,
          animation: 'slide_from_right',
          gestureEnabled: false,
        }}>
        <Stack.Screen name="UserAppStack" component={UserAppStack} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

       
      </Stack.Navigator>
   
    </>
  );
};

export default AppNavigation;
