import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../styles';
import { firebase } from '../../firebase/config'
import { useNavigation } from '@react-navigation/native';

export default function ChatScreen(){
    return(
        <View>
            <Text>
                ChatScreen
            </Text>
        </View>
    )

}