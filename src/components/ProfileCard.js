import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { colors, family, size } from '../utils';
import Img from './Img';
import { appIcons, appImages } from '../assets';

import Shadows from '../helpers/Shadows';
const ProfileCard = ({
  socialhandles,
  item,
  hobbies,
  intersets,
  document,
  data,
  banner,
  cross,
  profilebutton,
  onBack,
  BlockProfile,
  ReportProfile,
  handleCross,
}) => {
  console.log('it--sss--em',item);

  return (
    <>
      {banner && (
        <View style={styles.bannercontainer}>
          <ImageBackground
            source={item.image}
            style={styles.banner}
            resizeMode="cover"
            imageStyle={{ borderRadius: 15 }}>
            <View
              style={{
                alignSelf: 'center',
                position: 'absolute',
                bottom: 10,
                ...Shadows.shadow5,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: size.title,
                  fontFamily: family.RedHatDisplay_Bold,
                }}>
                {item.text}
              </Text>
            </View>
          </ImageBackground>
        </View>
      )}

  
      {intersets && (
        <View style={styles.tag}>
          <Text style={styles.tagtxt}>
            {item}
          </Text>
        </View>
      )}
    
    </>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  socialimg: { width: 10, height: 10 },

  link: {
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_Light,
    marginLeft: 8,
  },
  socialcontainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  maincontainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.red,
    padding: 7,
  },
  hobbiesimg: { width: 20, height: 20 },
  hobbies: {
    // backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 8,
    ...Shadows.shadow5,
    margin: 5,
  },
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
  documentcontainer: {
    position: 'absolute',
    top: 7,
    right: 7,
    // backgroundColor: colors.white,
    padding: 5,
    borderRadius: 20,
  },
  cancel: { width: 7, height: 7 },
  fileimg: { width: 22, height: 27 },
  document: {
    // backgroundColor: colors.red,
    borderRadius: 10,
    ...Shadows.shadow5,
    margin: 5,
    width: 90,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannercontainer: {
    width: '90%',
    height: 300,
    borderRadius: 12,
    alignSelf: 'center',
  },
  banner: { width: '100%', height: '100%' },
  block: {
    backgroundColor: colors.yellow,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tchheart: {
    backgroundColor: colors.red,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartoon: {
    width: 25,
    height: 25,
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
});