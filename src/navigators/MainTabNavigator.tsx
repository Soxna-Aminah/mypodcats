import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import ListNowScreen from '../components/listeNow/ListNowScreen';
import SearchScreen from '../components/search/SearchScren';
import LibraryScreen from '../components/library/LibraryScreen';

const ListenNowStack=createNativeStackNavigator();

const ListenNowStackNavigator=()=>{
    return(
        <ListenNowStack.Navigator>
            <ListenNowStack.Screen
             name='ListenNow' component={ListNowScreen}  />
        </ListenNowStack.Navigator>
    )
}

const SearchStack=createNativeStackNavigator();

const SearchStackNavigator=()=>{
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen
            options={{title:"Search"}}
             name='Search' component={SearchScreen}  />
        </SearchStack.Navigator>
    )
}

const LibraryStack=createNativeStackNavigator();

const LibraryStackNavigator=()=>{
    return(
        <LibraryStack.Navigator>
            <LibraryStack.Screen
            options={{title:"Library"}}
             name='Library' component={LibraryScreen}  />
        </LibraryStack.Navigator>
    )
}




const MainTab= createMaterialBottomTabNavigator();


const MainTabNavigator = () => {
    return(
        <MainTab.Navigator>
        <MainTab.Screen
            name='ListenNow'
            options={{
                title:"Listen Now"
            }}
            component={ListenNowStackNavigator}/>
             <MainTab.Screen
            name='Search'
            options={{
                title:"Rechercher"
            }}
            component={SearchStackNavigator}/>
        <MainTab.Screen
            name='Library'
            options={{
                title:"Library"
            }}
            component={LibraryStackNavigator}/>
            
    
    
    </MainTab.Navigator>
    )
   
}

export default MainTabNavigator;