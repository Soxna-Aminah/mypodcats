import React from "react";
import { StyleSheet,FlatList,TextInput } from "react-native";

import {Box, Text} from 'react-native-design-utility'
import { theme } from "../../constants/theme";
import KeyBoardDismissView from "./KeyboardDismissView";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const SearchScreen = () =>{

    return(
      <KeyBoardDismissView>

        <Box f={1} bg={theme.color.blueDarkest}>
                    
                    <Box h={50}  w="100%"  px="sm" my="sm">
                        <TextInput style={s.input} placeholder="Search"/>

                    </Box>

                    <FlatList 
                        style={s.list}
                        data={[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]}
                        renderItem={()=>(
                            <Box h={90}  dir="row" align="center" px="sm">
                                <Box h={70} w={70} bg="blueLight" radius={10} mr={10}/>
                                <Box>
                                    <Text color="white">Serigne Cheikh</Text>
                                    <Text color="grey" size="xs">Unicité de Dieu </Text>
                                    <Text color="red" size='xs'>Gamou 1998</Text>
                                </Box>

                            </Box>

                        )}
                        keyExtractor={(item)=>String(item.id)}
                        />

        </Box>

      </KeyBoardDismissView>
    )
}
const s= StyleSheet.create({
        input:{
            height:40,
            flex:1,
            backgroundColor:theme.color.greyLightest,
            borderRadius:10,
            paddingHorizontal:theme.space.sm,
            fontSize:theme.text.size.md


        },
        list:{
            minHeight:"100%",
        }
})

export default SearchScreen