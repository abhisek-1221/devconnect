import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/colors';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tint,
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Poppins-SemiBold',
        },
        tabBarStyle: {backgroundColor: '#161622'}
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="com"
        options={{
          tabBarLabel: 'Communities',
          tabBarIcon: ({ size, color }) => (
        <MaterialCommunityIcons name="google-circles-communities" size={size} color={color} /> 
        ),
        }}
      />
      <Tabs.Screen
        name="finder"
        options={{
          tabBarLabel: 'Finder',
          tabBarIcon: ({ size, color }) => <FontAwesome5 name="airbnb" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarLabel: 'Add Post',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
      ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    
  );
};

export default Layout;