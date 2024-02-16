import React, {Component} from 'react';
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppBackground from '../../../components/AppBackground';

import {appIcons} from '../../../assets';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
import {styles} from './styles';
import {Blockdata, Tipsdata} from '../../../utils/dummyData';
import TipsClick from '../../../components/TipsClick';
import Listed from '../../../components/Listed';
import Img from '../../../components/Img';
const multipledata = [
  {
    id: 0,
    name: 'Height',
  },
  {
    id: 1,
    name: 'Weight',
  },
  {
    id: 2,
    name: 'Career',
  },
  {
    id: 3,
    name: 'NetWorth',
  },
  {
    id: 4,
    name: 'Body type',
  },
  {
    id: 5,
    name: 'Hair color',
  },
  {
    id: 6,
    name: 'Eye color',
  },
  {
    id: 7,
    name: 'Pieciengs',
  },
  {
    id: 8,
    name: 'Tattos',
  },
  {
    id: 9,
    name: 'Smoking',
  },
  {
    id: 10,
    name: 'Career',
  },
  {
    id: 11,
    name: 'Drinking',
  },
  {
    id: 12,
    name: 'Ethnicity',
  },
  {
    id: 13,
    name: 'Salary Bracket',
  },
];
export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: null,
      profileImage1: null,
      profileImage2: null,
      profileImage3: null,
    };
  }
  render() {
    const {profileImage, profileImage1, profileImage2, profileImage3} =
      this.state;
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
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              gap: 10,
            }}>
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
                  style={{width: 50, height: 50}}
                  imageUri={profileImage !== null ? profileImage?.path : null}
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
                  style={{width: 50, height: 50}}
                  imageUri={
                    profileImage1 !== null
                      ? profileImage1?.path
                      : appIcons.redplus
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
                  style={{width: 50, height: 50}}
                  imageUri={
                    profileImage2 !== null
                      ? profileImage2?.path
                      : appIcons.redplus
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
                  style={{width: 50, height: 50}}
                  imageUri={
                    profileImage3 !== null
                      ? profileImage3?.path
                      : appIcons.redplus
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
          <View style={{marginTop: 20}}>
            <TouchableOpacity style={styles.mainView} activeOpacity={0.8}>
              <View style={styles.flex}>
                <View style={styles.viewstyle1}>
                  <Text style={styles.textstyle1}>dfs</Text>
                  <Text style={styles.textstyle2}>Basic info</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.cancel} activeOpacity={0.8}>
                <Img
                  local={true}
                  resizeMode={'contain'}
                  src={appIcons.arrow}
                  style={{width: 15, height: 15}}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainView} activeOpacity={0.8}>
              <View style={styles.flex}>
                <View style={styles.viewstyle1}>
                  <Text style={styles.textstyle1}>Education</Text>
                  <Text style={styles.textstyle2}>new York city</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.cancel} activeOpacity={0.8}>
                <Img
                  local={true}
                  resizeMode={'contain'}
                  src={appIcons.arrow}
                  style={{width: 15, height: 15}}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mainView} activeOpacity={0.8}>
              <View style={styles.flex}>
                <View style={styles.viewstyle1}>
                  <Text style={styles.textstyle1}>Bio</Text>
                  <Text style={styles.textstyle2}>Basic info</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.cancel} activeOpacity={0.8}>
                <Img
                  local={true}
                  resizeMode={'contain'}
                  src={appIcons.arrow}
                  style={{width: 15, height: 15}}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <FlatList
              data={multipledata}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.mainView1} activeOpacity={0.8}>
                  <View style={styles.flex}>
                    <View style={styles.viewstyle1}>
                      <Text style={styles.textstyle11}>{item.name}</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.cancel} activeOpacity={0.8}>
                    <Img
                      local={true}
                      resizeMode={'contain'}
                      src={appIcons.arrow}
                      style={{width: 15, height: 15,right:10}}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default EditProfile;
