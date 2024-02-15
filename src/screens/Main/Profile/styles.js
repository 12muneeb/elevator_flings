import {Dimensions, StyleSheet} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('screen');



export const styles = StyleSheet.create({
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
      width: '82%',
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      height: 50,
    },
    filter: {
      width: 24,
      height: 24,
    },
    tch: {
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: 0,
      width: 50,
      height: 50,
      justifyContent: 'center',
      right: 50,
      alignSelf: 'center',
    },
    viewStyle1: {
      marginVertical: 10,
    },
    margin: {
      marginTop: 0,
    },
    txtstyle1: {
      color: colors.white,
      fontSize: size.large,
      fontFamily: family.SofiaProBold,
    },
    txtstyle2: {
      fontSize: size.small,
      fontFamily: family.SofiaProBold,
      // maxWidth: 325,
      color: colors.white,
    },
    tchstyle1: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '25%',
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      marginTop: 5,
      backgroundColor: colors.secondary,
    },
    interest: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',
      marginTop: 5,
    },

    thumbbg: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    imgbg: {
      width: 330,
      height: 290,
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderRadius: 25,
    },
    imgbg1: {
      height: 211,
      width: '100%',
      ...Shadows.shadow5,
    },
    thumbbg1: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginHorizontal: 5,
    },
    txtstyle3: {
      color: colors.white,
      fontFamily: family.RedHatDisplay_Bold,
      fontSize: size.medium,
      bottom: 10,
    },
    viewStyle2: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    likes: {
      color: colors.white,
      fontFamily: family.RedHatDisplay_Medium,
      fontSize: size.xsmall,
      left: 10,
      bottom: 10,
    },
    heart: {
      width: 10,
      height: 10,
      resizeMode: 'contain',
      left: 10,
      bottom: 10,
    },
    tchstyle: {
      backgroundColor: colors.red,
      width: 60,
      height: 60,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      left: 10,
    },
    flex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
    },
    cartoon: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      right: 10,
    },
    formarginhorizontal: {
      marginHorizontal: 5,
      backgroundColor:colors.gray,
      borderColor:'#36393F',
      borderRadius:22,
      padding:10,
    },
    uplaodbtn: {
      backgroundColor: colors.secondary,
    },
    images: {
      width: 100,
      height: 100,
      borderRadius: 10,
      alignItems: 'flex-end',
      marginHorizontal: 5,
      alignSelf: 'flex-end',
      left: 10,
    },
    closeIconCont: {
      position: 'absolute',
      width: 15,
      height: 15,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 15,
      right: 5,
    },
    closeIcon: {
      width: 50,
      height: 50,
    },
    picker: {
      backgroundColor: colors.secondary,
      width: '90%',
      height: 60,
      borderRadius: 30,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    upload: {
      color: colors.white,
      fontFamily: family.RedHatDisplay_Medium,
      fontSize: size.medium,
    },
    formarginvertical: {
      marginTop: 20,
    },
    imageParent: {
      width: '100%',
      padding: 5,
    },

    buttons: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 13,
    },
    feedback: {
      width: 112,
      height: 35,
      borderRadius: 10,
      marginLeft: 12,
      marginBottom: 28,
      backgroundColor: colors.red,
    },

    postbtn: {
      width: 87,
      height: 35,
      borderRadius: 10,
      backgroundColor: colors.red,
    },
    imagescroll: {
      ...Shadows.shadow5,
      gap:5
    },
    imgbgscroll: {
      width: 100,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
   marginHorizontal:5
    },
    heart: {
      width: 10,
      height: 10,
      resizeMode: 'contain',
      left: 10,
      bottom: 10,
    },
    tchstyle: {
      backgroundColor: colors.nero,
      width: 60,
      height: 60,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      left: 10,
      ...Shadows.shadow5,
    },
    flex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
    },
    cartoon: {
      width: 30,
      height: 30,
    },
    tchheart: {
      backgroundColor: colors.red,
      width: 60,
      height: 60,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      right: 10,
    },
    flexbtn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    touchablestyle: {
      backgroundColor: '#FF2020',
      width: 60,
      height: 60,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: 18,
      height: 18,
      resizeMode: 'contain',
    },
    cartoon: {
      width: 18,
      height: 18,
      resizeMode: 'contain',
    },
    socialcontainer: {
      flexDirection: 'row',
      marginVertical: 8,
      alignItems: 'center',
    },
    maincontainer: {
      borderRadius: 20,
      // borderWidth: 1,
      // borderColor: colors.red,
      padding: 7,
      ...Shadows.shadow5,
    },
    socialimg: {width: 10, height: 10},
    link: {
      fontSize: size.small,
      fontFamily: family.RedHatDisplay_Light,
      marginLeft: 8,
    },
    img:
      {width:25,height:25,position: 'absolute',right:10,top:10},
      tagtxt: {
        color: colors.white,
        fontFamily: family.RedHatDisplay_Medium,
        fontSize: size.tiny,
      },
    
      tag: {
        paddingHorizontal: 12,
        margin: 2,
        borderRadius: 18,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 8,
        backgroundColor: '#321F33',
        borderWidth: 3,
        borderColor: colors.primary
    
      },
    
})