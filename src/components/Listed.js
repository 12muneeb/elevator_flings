import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Img from './Img';
import CustomButton from './CustomButton';
import {colors, size, family} from '../utils';
import {useTheme} from '@react-navigation/native';
import Shadows from '../helpers/Shadows';
import { appIcons } from '../assets';
const Listed = ({item, current, pending, unblock,onSubmit,onPress,Accepted,CancelButton}) => {
  const [accepted, setaccepted] = useState(false);
  const [status, setstatus] = useState(false);
  const handleAccept = item => {
    setaccepted(item);
  };
  if (status === 'rejected') {
    return null;
  }
  const handleReject = item => {
    setstatus('rejected');
    setaccepted(item);
  };

  return (
    <TouchableOpacity
      style={styles.mainView}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.flex}>
        <View style={styles.viewstyle1}>
          <Text style={styles.textstyle1}>{item.title}</Text>
          <Text style={styles.textstyle2}>
           {item.desc}
          </Text>
        </View>
      </View>
        <TouchableOpacity
          style={styles.cancel}
          activeOpacity={0.8}
          onPress={onSubmit}>
          <Img local={true} resizeMode={'contain'} src={appIcons.arrow}  style={{width:15,height:15}}/>
        </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Listed;

const styles = StyleSheet.create({
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
    fontFamily: family.RedHatDisplay_SemiBold,
    fontSize: size.large,
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
});