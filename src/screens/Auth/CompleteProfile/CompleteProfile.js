import React, { Component } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Toast from 'react-native-toast-message';
import { connect } from 'react-redux';
import { appIcons } from '../../../assets/index';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import Img from '../../../components/Img';
import ProfileImage from '../../../components/ProfileImage';
import NavService from '../../../helpers/NavService';
import { completeProfile } from '../../../redux/actions/authAction';
import { colors, family } from '../../../utils';
import appStyles from '../../appStyles';
import styles from './styles';
class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bussinessProfileImage: null,
      isDatePickerVisible: false,
      name: '',
      Dob: '',
      selected: '',
      about: '',
      galleryDocuments: [],
      documentCount: 1,
      imageIndex: 0,
    };
  }
  pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: true,
        mode: 'open',
      });
  
      const totalImages = this.state.galleryDocuments.length + result.length;
  
      if (totalImages < 3 || totalImages > 10) {
        Toast.show({
          text1: 'Please select between 3 and 10 images.',
          type: 'error',
          visibilityTime: 3000,
        });
        return;
      }
  
      const newDocuments = result.map((item, index) => {
        const updatedName = `Img_${this.state.documentCount + index}`;
        return {
          uri: item.uri,
          type: item?.type,
          tempType: 'photo',
          showName: updatedName,
          name: item.name,
        };
      });
  
      this.setState((prevState) => ({
        galleryDocuments: [...prevState.galleryDocuments, ...newDocuments],
        documentCount: prevState.documentCount + newDocuments.length,
      }));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
      } else {
        // Handle other errors
      }
    }
  };

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleDateConfirm = date => {
    const formattedDate = date.toISOString().split('T')[0];
    this.setState({ Dob: formattedDate });
    this.hideDatePicker();
  };

  render() {
    const { fullName, bussinessProfileImage, Dob, about, selected, galleryDocuments } = this.state;
    const data = [
      { key: '0', value: 'Male' },
      { key: '1', value: 'Female' },
    ];

    const onSubmit = () => {
      if (!fullName) {
        Toast.show({
          text1: "Name field can't be empty.",
          type: 'error',
          visibilityTime: 3000,
        })
      } else if (!Dob) {
        Toast.show({
          text1: "Date of Birth field can't be empty.",
          type: 'error',
          visibilityTime: 3000,
        })
      } else if (!selected) {
        Toast.show({
          text1: "Gender field can't be empty.",
          type: 'error',
          visibilityTime: 3000,
        })
      } else if (!about) {
        Toast.show({
          text1: "About yourself field can't be empty.",
          type: 'error',
          visibilityTime: 3000,
        })
      }
      else {
        let payload = {
          full_name: fullName,
          gender: selected,
          date_of_birth: Dob,
          about: about,
          profile_image: bussinessProfileImage
          ? {
              uri: bussinessProfileImage.path,
              name: 'profile_image.jpg',
              type: bussinessProfileImage.mime,
            }
          : null,
            uploads: galleryDocuments.map(doc => ({
            uri: doc.uri || '',
            name: doc.name || '',
          })),
        }
        console.log('completeproifle', payload)
        NavService.navigate('Description', {
          data: payload
        })


      }
    };

    const updateImageInGallery = (path, mime, type) => {
      console.log('pathmime', path, mime,type)
      this.setState({ bussinessProfileImage: { path, mime, type } });

    };

    return (
      <CustomBackground
        showLogo={false}
        titleText={'Set Profile'}
        onBack={() => NavService.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, { marginTop: 50 }]}>
          <ImagePicker
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}
              style={{
                ...appStyles.alignCenter,
                ...appStyles.justifyCenter,
              }}
            >
              <ProfileImage
                name={'UserName'}
                innerAsset
                imageUri={
                  bussinessProfileImage == null
                    ? appIcons.user
                    : { uri: bussinessProfileImage.path }
                }
                viewStyle={styles.profileImgView}
                style={
                  bussinessProfileImage == null
                    ? styles.profileImg
                    : styles.bussinessProfileImage
                }
              />
              <View style={styles.uploadIconCont}>
                <Img
                  local
                  src={appIcons.plus}
                  style={styles.uploadIcon}
                  tintColor={colors.white}
                  resizeMode={'contain'}
                />
              </View>
            </ImagePicker>
            <View style={{ marginTop: '10%', gap: 15 }}>

              <View>
                <TouchableOpacity style={styles.imageBtn} onPress={this.pickDocument}>
                  <ImageBackground style={styles.propertyImage} resizeMode="cover">
                    <Img
                      local={true}
                      src={appIcons.upload}
                      style={styles.up}
                      tintColor={colors.primary}
                    />
                    <Text
                      style={[
                        styles.carettext,
                        { color: colors.red, textAlign: 'center' },
                      ]}>
                      Maximum 10, minimum 3, 1 full {'\n'}
                      body picture suggested
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>

              {galleryDocuments?.length > 0 ? (
                <View style={{ height: 60,  width: '90%' }}>
                  <ScrollView
                    style={styles.mainCont}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {galleryDocuments?.map((document, index) => {
                      console.log('document---231', document)
                      return (
                        <View key={index + 1}>
                          <TouchableOpacity activeOpacity={0.9} >
                            <View style={styles.documentContainer}>
                              <Text style={styles.documentText}>{document.showName}</Text>
                              <TouchableOpacity
                                style={styles.closeIconCont}
                                onPress={() => this.removeDocument(document.id)}>
                                <Img
                                  local
                                  src={appIcons.close}
                                  resizeMode={'contain'}
                                  style={{ width: 8, height: 8 }}
                                  tintColor={colors.white}
                                />
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
              ) : null}
              <CustomTextInput
                placeholder={'Name'}
                value={fullName}
                
                keyboardType={'default'}
                placeholderColor={colors.lightGray}
                inputStyle={{ color: colors.lightGray }}
                onChangeText={value => this.setState({ fullName: value })}
              />
              <CustomTextInput
                showSoftInputOnFocus={false}
                maxLength={30}
                placeholder={'Dob'}
                value={Dob}
                placeholderColor={colors.lightGray}
                borderColor={colors.primary}
                onFocus={this.showDatePicker}
                handlePress={this.showDatePicker}
                inputStyle={{ color: colors.lightGray }}
              />

              <SelectList
                setSelected={selected =>
                  this.setState({ selected: data[selected]?.value })
                }
                fontFamily={family.SofiaProBold}
                data={data}
                arrowicon={
                  <Img
                    local
                    src={appIcons.downArrow}
                    style={styles.dropdownIcon}
                    resizeMode={'contain'}
                    tintColor={colors.lightGray}
                  />
                }
                search={false}
                boxStyles={styles.dropdown}
                placeholder="Gender"
                disabledCheckBoxStyles={styles.label}
                dropdownStyles={styles.label}
                dropdownTextStyles={styles.inputlabel}
                inputStyles={styles.inputlabel}
              />
              <CustomTextInput
                textAlignVertical="top"
                maxLength={350}
                multiline
                placeholder={'About yourself'}
                placeholderTextColor={colors.lightGray}
                value={about}
                isBorderShow
                keyboardType={'default'}
                onChangeText={value => this.setState({ about: value })}
                textInputStyles={{ height: 150, color: colors.white }}
                containerStyle={{
                  height: 150,
                  width: '90%',
                }}
              />

              <DateTimePickerModal
                isVisible={this.state.isDatePickerVisible}
                mode="date"
                onConfirm={this.handleDateConfirm}
                onCancel={this.hideDatePicker}
                minimumDate={new Date()}
              />
              <CustomButton
                title="Continue"
                onPress={onSubmit}
                buttonStyle={styles.signUpBtn}
                textStyle={styles.signUpTitle}
              />
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}


const actions = { completeProfile };
export default connect(null, actions)(CompleteProfile);