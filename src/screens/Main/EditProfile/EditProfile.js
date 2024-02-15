import React, { Component } from 'react';
import { FlatList, Image, View } from 'react-native';
import AppBackground from '../../../components/AppBackground';

import { appIcons } from '../../../assets';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
import { styles } from './styles';
import { Blockdata, Tipsdata } from '../../../utils/dummyData';
import TipsClick from '../../../components/TipsClick';
import Listed from '../../../components/Listed';
export class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          profileImage: null,
          profileImage1:null,
          profileImage2:null,
          profileImage3:null
      
        };
      }
  render() {
    const {profileImage,profileImage1,profileImage2,profileImage3} = this.state;
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    const updateImageInGallery1 = (path, mime, type) => {
        this.setState({profileImage1: {path, mime, type}});
      };
      const updateImageInGallery2 = (path, mime, type) => {
        this.setState({profileImage2: {path, mime, type}});
      };
      const updateImageInGallery3 = (path, mime, type) => {
        this.setState({profileImage3: {path, mime, type}});
      };
    return (
    <AppBackground title={'Edit Profile'} back>
        <View>
        <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',gap:10}}>
         <View style={styles.profilecontainer}>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery(path, mime, type);
            }}>
            <ProfileImage
              name={'UserName'}
              imagesize
              innerAsset={profileImage == null ? true : false}
              placeholderstyle={styles.profile}
              style={{width: 50, height: 50, }}
              imageUri={
                profileImage !== null ? profileImage?.path : null
              }
            />
            <View style={styles.viewStyle1}>
              {profileImage == null ? (
                <Image source={appIcons.add} style={styles.upload} />
              ) : null}
            </View>
          </ImagePicker>
        </View>
        <View style={styles.profilecontainer}>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery1(path, mime, type);
            }}>
            <ProfileImage
             imagesize
              name={'UserName'}
              innerAsset={profileImage1 == null ? true : false}
              placeholderstyle={styles.profile}
              style={{width: 50, height: 50, }}
              imageUri={
                profileImage1 !== null ? profileImage1?.path : appIcons.redplus
              }
            />
            <View style={styles.viewStyle1}>
              {profileImage1 == null ? (
                <Image source={appIcons.add} style={styles.upload} />
              ) : null}
            </View>
          </ImagePicker>
        </View>
        <View style={styles.profilecontainer}>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery2(path, mime, type);
            }}>
            <ProfileImage
             imagesize
              name={'UserName'}
              innerAsset={profileImage2 == null ? true : false}
              placeholderstyle={styles.profile}
              style={{width: 50, height: 50, }}
              imageUri={
                profileImage2 !== null ? profileImage2?.path : appIcons.redplus
              }
            />
            <View style={styles.viewStyle1}>
              {profileImage == null ? (
                <Image source={appIcons.add} style={styles.upload} />
              ) : null}
            </View>
          </ImagePicker>
        </View>
        <View style={styles.profilecontainer}>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery3(path, mime, type);
            }}>
            <ProfileImage
             imagesize
              name={'UserName'}
              innerAsset={profileImage3 == null ? true : false}
              placeholderstyle={styles.profile}
              style={{width: 50, height: 50,}}
              imageUri={
                profileImage3 !== null ? profileImage3?.path : appIcons.redplus
              }
            />
            <View style={styles.viewStyle1}>
              {profileImage == null ? (
                <Image source={appIcons.add} style={styles.upload} />
              ) : null}
            </View>
          </ImagePicker>
        </View>
        </View>
        <View style={{marginTop:20}}>
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={Blockdata}
          renderItem={({item}) => (
            <Listed
              item={item}
              unblock
            
            />
          )}
        />
        </View>
        </View>
    </AppBackground>
    )
  }
}

export default EditProfile
