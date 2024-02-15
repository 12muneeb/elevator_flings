import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, size, family} from '../utils';
import Img from './Img';
const TipsClick = ({item, viewcontainer, tips, titleStyle, onPress}) => {
 
  return (
    <View>
      
      <TouchableOpacity
        style={[styles.mainView, viewcontainer]}
        activeOpacity={0.8}
        onPress={
          tips ? null : item?.title == 'Invite link' ? onPress : item.onPress
        }>
        <View
          style={{
            flexDirection: 'row',
            alignItems: tips ? null : 'center',
            width: '90%',
          }}>
          {/* {tips && (
            <Img local={true} src={item.profileimg} style={styles.profile} />
          )} */}
          {tips ? (
            <View style={{width: '70%', left: 8}}>
              <Text style={[styles.title, titleStyle]} numberOfLines={3}>
                {item?.desc}
              </Text>
            </View>
          ) : (
            <Text style={[styles.title, titleStyle]}>{item?.title}</Text>
          )}
        </View>
        <View style={{position: 'absolute', right: 20}}>
          <Img
            local={true}
            src={item.image}
            style={styles.placeholder}
            tintColor={'#FF2020'}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TipsClick;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.yellow,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 60,
    ...Shadows.shadow5,
  },
  placeholder: {
    width: 8,
    height: 14,
    resizeMode: 'contain',
  },
  title: {
    color: colors.white,
    fontSize: size.small,
    fontFamily: family.RedHatDisplay_SemiBold,
  },
  profile: {
    width: 47,
    height: 47,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.red,
  },
});