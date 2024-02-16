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
      container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
      },
      emailstyle: {
        tintColor: colors.secondary,
      },
      containerStyle: {
        borderRadius: 0,
        borderWidth: 1,
        borderColor: colors.secondary,
        width: '100%',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        height: 50,
      },
      mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:colors.gray,
        padding:15,
        margin:10,
        borderRadius:10
      },
      mainView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:colors.gray,
        padding:10,
        marginHorizontal:10,
        borderBottomWidth:0.3,
        borderBottomColor:colors.white
      },
      placeholder: {
        width: 47,
        height: 47,
        resizeMode: 'contain',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.red,
      },
      viewstyle1: {
        left: 12,
      },
      textstyle1: {
        color: colors.white,
        fontFamily: family.SofiaProMedium,
        fontSize: size.large,
      },
      textstyle11: {
        color: colors.lightGray,
        fontFamily: family.SofiaProBold,
        fontSize: size.small,
      },
      textstyle2: {
        color: colors.white,
        fontFamily: family.RedHatDisplay_Light,
        fontSize: size.small,
      },
      viewstyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      current: {
        borderBottomWidth: 3,
        width: '50%',
        alignItems: 'center',
      },
      pending: {
        borderBottomWidth: 2,
        width: '50%',
        alignItems: 'center',
      },
      pendingtxt: {
        fontSize: size.normal,
        fontFamily: family.RedHatDisplay_Bold,
        paddingVertical: 7.5,
        color: colors.black,
      },
      accept: {
        borderRadius: 5,
        width: '35%',
        height: 36,
        marginHorizontal: 4,
        backgroundColor: colors.yellow,
      },
      toggle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '50%',
      },
      accepttxt: {
        color: colors.white,
        fontSize: size.xsmall,
        fontFamily: family.RedHatDisplay_Regular,
      },
      cancel: {
        paddingVertical: 10,
        paddingHorizontal: 15,
      },
     
      textStyle: {
        fontSize: size.tiny,
        fontFamily: family.RedHatDisplay_SemiBold,
      },
      flex: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
      },
      accepted: {
        width: '60%',
        backgroundColor: colors.red,
        height: 36,
        alignSelf: 'flex-end',
        borderRadius: 5,
      },
      cancel: {
        borderRadius: 5,
        alignItems: 'center',
        height: 36,
        justifyContent: 'center',
      },
      canceltxt: {
        color: colors.white,
        fontSize: size.xsmall,
        fontFamily: family.RedHatDisplay_Medium,
      },
})