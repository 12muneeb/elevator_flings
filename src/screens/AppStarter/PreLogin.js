import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {Colors} from '../../../config';
import CustomBackground from '../../components/CustomBackground';
import { colors, family, size } from '../../utils';
// import SocialSignin from '../../../components/SocialSignin';
// import Icons from '../../../assets/Icons';
import { connect } from 'react-redux';
import { appIcons } from '../../assets/index';
import CustomText from '../../components/CustomText';
import Logo from '../../components/Logo';
import SocialSignin from '../../components/SocialSignin';
import NavService from '../../helpers/NavService';
import { getDeviceToken } from '../../redux/actions/appAction';
import { socialSignin } from '../../redux/actions/authAction';
import styles from './styles';
import { appLogos } from '../../assets/index';

class PreLogin extends Component {
  state = {
    agreementModal: false,
    terms: false,
    policy: false,
    navigator: '',
    verificationPopUp:false
  };




  render() {
    const { agreementModal, terms, policy, navigator ,verificationPopUp} = this.state;
    const proceedSocialLogin = async socialType => {
  const fcmToken = await getDeviceToken();
  if (socialType == 'google') {
    const userDetails = await SocialSignin?.Google();
    if (userDetails) {
      let payload = {
        social_token: userDetails?.uid,
        social_type: userDetails?.socialType,
        device_type: Platform.OS,
        device_token: fcmToken,
        user_type: 'user',
      };
      console.log(payload, 'payloadpayload');
      this.props.socialSignin(payload,userDetails?.userData?.email);
    }
  } 
};
    const methods = [
      {
        name: 'Email',
        icon: appIcons.email,
        onPress: () => navigation.navigate('Login'),
        color: colors.primary,
      },
      {
        name: 'Google',
        icon: appIcons.googlePlus,
        color: colors.google,
        onPress: () => proceedSocialLogin('google'),
        // onPress: SocialSignin.Google,
      },
      {
        name: 'Apple',
        icon: appIcons.apple,
        color: colors.black,
      },
    ];
    const { navigation } = this.props;
    return (
      <CustomBackground back={false} showLogo={false} titleText={"Pre-Login"}>
        <View style={[styles.container, { padding: 20 }]}>
          <View style={styles.logoStyle}>
            <Image style={styles.applogo} source={appLogos.appLogo} />
          </View>
          <View style={styles.space}>
            {methods.map((method, i) => {
              const { color, name, icon, onPress } = method;
              if (Platform.OS !== 'ios' && name === 'Apple') return null;
              return (
                <TouchableOpacity
                  onPress={onPress}
                  key={i}
                  activeOpacity={0.8}
                  style={[styles.buttonContainer, { backgroundColor: color }]}>
                  <Image source={icon} style={styles.buttonInnerImage} />

                  <CustomText
                    text={`Sign in with ${name}`}
                    style={styles.buttonInnerText}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
   
      </CustomBackground>
    );
  }
}


const actions = {socialSignin};
export default connect(null, actions)(PreLogin);


// const {width} = Dimensions.get('window');

// class App extends Component {
//   state = {
//     agreementModal: false,
//     terms: false,
//     policy: false,
//     navigator: '',
//   };

//   render() {
//     const {agreementModal, terms, policy, navigator} = this.state;
   
//     const methods = [
//       {
//         name: 'Email Address',
//         icon: appIcons.email,
//         onPress: () => NavService.navigate('Login'),
//         color: colors.primary,
//       },
    
//       {
//         name: 'Google',
//         icon: appIcons.googlePlus,
//         color: colors.google,
//         onPress: () => proceedSocialLogin('google'),
//         // onPress: SocialSignin.Google,
//       },
//     ];
//     const {navigation} = this.props;
//     return (
//       <CustomBackground
//         backgroundImage
//         back={false}
//         onback={false}
//         showLogo={false}
//         titleText={'Pre-Login'}>
//         <View style={[styles.container, {padding: 40}]}>
//           <View style={styles.space}>
//             <Logo size={210} />
//           </View>
//           <View style={styles.space}>
//             {methods.map((method, i) => {
//               const {color, name, icon, onPress} = method;
//               if (Platform.OS !== 'ios' && name === 'Apple') return null;
//               return (
//                 <TouchableOpacity
//                   onPress={onPress}
//                   key={i}
//                   activeOpacity={0.8}
//                   style={[styles.buttonContainer, {backgroundColor: color}]}>
//                   <Image
//                     source={icon}
//                     style={[
//                       styles.buttonInnerImage,
//                       {
//                         left:
//                           name == 'Apple' || name == 'Google'
//                             ? width / 5
//                             : width / 8,
//                       },
//                     ]}
//                   />
//                   <Text
//                     style={[
//                       styles.buttonInnerText,
//                       {
//                         left:
//                           name == 'Apple' || name == 'Google'
//                             ? width / 3.6
//                             : width / 4.9,
//                       },
//                     ]}>
//                     Sign-in with {name}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//           <View style={styles.bottomView}>
//             <CustomText
//               style={styles.txt1}
//               text={'By Sign-in, You Agree to our'}
//             />

        
//           </View>
//         </View>
//       </CustomBackground>
//     );
//   }
// }


// const actions = {socialSignin};
// export default connect(null, actions)(App);