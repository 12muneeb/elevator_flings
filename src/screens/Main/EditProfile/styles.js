import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, family, size } from '../../../utils'



export const styles = StyleSheet.create({
    profile: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
        backgroundColor: 'blue',
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: colors.red,
      },
      profilecontainer: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      upload: {
        width: 15,
        height: 15,
      },
      viewStyle1: {
        alignSelf: 'center',
    
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        borderRadius: 10,
        marginTop: -12,
      },
      tipstext: {
        fontSize: size.tiny,
        fontFamily: family.SofiaProMedium,
        color: colors.white,
      },
      tipscontainer: {
        height: 77,
        backgroundColor: colors.red,
        borderColor: colors.white,
        borderWidth: 1,
        marginHorizontal: 10,
      },
})