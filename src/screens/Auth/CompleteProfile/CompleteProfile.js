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
import RNFS from 'react-native-fs';

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
    };
  }

  pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
  
      const documentObject = {
        uri: result.uri,
        name: result.name || `IMG${this.state.documentCount}`,
        id: this.state.documentCount,
      };
  
      // Convert uri to a valid file path
      const filePath = Platform.OS === 'android' ? `file://${result.uri}` : result.uri;
  
      documentObject.uri = filePath;
  
      this.setState(prevState => ({
        galleryDocuments: [...prevState.galleryDocuments, documentObject],
        documentCount: prevState.documentCount + 1,
      }));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the document picker
      } else {
        // Handle other errors
        console.error("Error picking document:", err);
      }
    }
  };
  
  

  removeDocument = documentId => {
    this.setState(prevState => ({
      galleryDocuments: prevState.galleryDocuments.filter(
        document => document.id !== documentId,
      ),
    }));
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
      const { fullName, selected, Dob, about, bussinessProfileImage, galleryDocuments } = this.state;

      if (!fullName) {
        Toast.show({
          text1: "Name field can't be empty.",
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!Dob) {
        Toast.show({
          text1: "Date of Birth field can't be empty.",
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!selected) {
        Toast.show({
          text1: "Gender field can't be empty.",
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!about) {
        Toast.show({
          text1: "About yourself field can't be empty.",
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        let payload = {
          full_name: fullName,
          gender: selected,
          date_of_birth: Dob,
          about: about,
          // Include the profile image in the payload
          profileImage: bussinessProfileImage
            ? { uri: bussinessProfileImage.path, name: 'profile_image.jpg' }
            : null,
          // Include the document images in the payload
          documentImages: galleryDocuments.map(document => ({
            uri: document.uri,
            name: document.name,
            id: document.id,
          })),
        };

        console.log('Payload:', payload);

        // Continue with your navigation or any other action
        NavService.navigate('Description', {
          data: payload,
        });
      }
    };

    const updateImageInGallery = (path, mime, type) => {
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
                setFieldValue('bussinessProfileImage', path);
              }}
              style={{
                ...appStyles.alignCenter,
                ...appStyles.justifyCenter,
              }}>
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
                <View style={{ height: 60,  }}>
                  <ScrollView
                    style={styles.mainCont}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {galleryDocuments?.map((document, index) => {
                      return (
                        <View key={index + 1}>
                          <TouchableOpacity activeOpacity={0.9} >
                            <View style={styles.documentContainer}>
                              <Text style={styles.documentText}>{document.name}</Text>
                              <TouchableOpacity
                                style={styles.closeIconCont}
                                onPress={() => this.removeDocument(document.id)}>
                                <Img
                                  local
                                  src={appIcons.close}
                                  resizeMode={'contain'}
                                  style={{ width: 8, height: 8 }}
                                  tintColor={colors.red}
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
              <View style={{ gap: 10, marginHorizontal: 10 }}>
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
                    // width: '90%',
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
        </View>
      </CustomBackground>
    );
  }
}

const actions = { completeProfile };
export default connect(null, actions)(CompleteProfile);
