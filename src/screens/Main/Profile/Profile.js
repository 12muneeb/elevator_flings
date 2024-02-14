// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export class Profile extends Component {
//   render() {
//     return (
//       <View>
//         <Text>textInComponent </Text>
//       </View>
//     )
//   }
// }


import React, { Component, useRef } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Pressable,
    FlatList,
    Dimensions,
    Image,
} from 'react-native';
import { appIcons, appImages } from '../../../assets'
import AppBackground from '../../../components/AppBackground';
import { ScrollView } from 'react-native-gesture-handler';
import Img from '../../../components/Img';
import { colors, family, size } from '../../../utils';
import CustomButton from '../../../components/CustomButton';
import Carousel from 'react-native-snap-carousel';
import ProfileCard from '../../../components/ProfileCard';
import Shadows from '../../../helpers/Shadows';
import { styles } from './styles'
import {
    intersets,
    document,
    Profiledata,
    Data1,
    Banner,
    Data2,
} from '../../../utils/dummyData';
import NavService from '../../../helpers/NavService';
import { connect } from 'react-redux';
import CustomText from '../../../components/CustomText';
import { completeProfile } from '../../../redux/actions/authAction';
const { width } = Dimensions.get('screen');
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            galleryAssets: [],
            key: false,
            documentCards: document,
            selectedImage: null,
            allCommunities: []
        };
    }
    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.setState(previousState => ({
                allCommunities: Profiledata,
                key: !previousState?.key,
            }));
        });
    }
    componentWillUnmount() {
        this.setState({ allCommunities: [] });
        this.focusListener();
    }


    selectImage = item => {
        this.setState({
            selectedImage: item.link,
        });
    };
    render() {
        const {
            images,
            posts,
            isModalVisible,
            galleryAssets,
            documentCards,
            isVideoVisible,
            selectedImage,
            allCommunities,
            key
        } = this.state;
        const {
            full_name,
            
        }=this.props.user
        console.log('dsfsfs',full_name)
        const handleCross = id => {
            updatedCard = documentCards.filter(item => item?.id != id);
            this.setState({ documentCards: updatedCard });
        };
        return (
            <AppBackground
                title={'My Profile'}
                marginHorizontal={false}
                edit={true}
                AppStyle={{ ...Shadows.shadow5 }}
            >
                <ScrollView showsVerticalScrollIndicator={false} 
              
                contentContainerStyle={{paddingBottom:80}}>
                    <View style={styles.formarginhorizontal}>
                        <View style={{ alignSelf: 'center', height: 325 }}>
                            <Carousel
                                ref={c => {
                                    this._carousel = c;
                                }}
                                key={key}
                                data={Banner}
                                renderItem={({ item }) => <ProfileCard item={item} banner />}
                                sliderWidth={width - 40}
                                itemWidth={width - 44}
                            />

                        </View>
                        <View style={styles.viewStyle1}>
                            <Text style={styles.txtstyle1}>
                               {full_name}
                            </Text>
                            <View style={{ backgroundColor: '#707277', borderRadius: 20, padding: 8, width: '55%', marginTop: 10, alignItems: 'center' }}>
                                <Text style={styles.txtstyle2}>United State Of America</Text>
                            </View>
                        </View>

                        <View style={styles.viewStyle1}>
                            <Text style={styles.txtstyle1}>
                                My Basic Info
                            </Text>
                            <Text style={styles.txtstyle2} numberOfLines={3}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit
                                commodo enim tellus et nascetur at leo accumsan, odio
                                habitanLorem ipsum dolor...
                            </Text>

                        </View>


                        <View style={styles.viewStyle1}>
                            <Text style={[styles.txtstyle1, { fontSize: 16 }]}>Interests</Text>
                            <View style={styles.interest}>
                                <FlatList
                                    scrollEnabled={false}
                                    showsVerticalScrollIndicator={false}
                                    numColumns={3}
                                    keyExtractor={(item, index) => index.toString()}
                                    data={intersets}
                                    renderItem={({ item }) => <ProfileCard item={item} intersets />}
                                />
                            </View>
                        </View>
                        <View style={styles.interest}>
                            <FlatList
                                scrollEnabled={false}
                                showsVerticalScrollIndicator={false}
                                numColumns={3}
                                keyExtractor={(item, index) => index.toString()}
                                data={Data1}
                                renderItem={({ item }) => (
                                    <View style={{alignItems:'flex-start',gap:5}}>
                                        <CustomText text={item.subtitle} color={colors.white} size={size.small} />
                                        <ProfileCard item={item} intersets />
                                    </View>
                                )}
                            />
                         
                        </View>
                        <View style={styles.interest}>
                            <FlatList
                                scrollEnabled={false}
                                showsVerticalScrollIndicator={false}
                                numColumns={3}
                                keyExtractor={(item, index) => index.toString()}
                                data={Data2}
                                renderItem={({ item }) => (
                                    <View style={{alignItems:'flex-start',gap:5}}>
                                        <CustomText text={item.subtitle} color={colors.white} size={size.small} />
                                        <ProfileCard item={item} intersets />
                                    </View>
                                )}
                            />
                         
                        </View>
                       


                        <View style={styles.imageParent}>

                            <ImageBackground
                                source={appImages.event1}
                                style={styles.imgbg1}
                                imageStyle={{ borderRadius: 20, resizeMode: 'cover' }}>
                                <ImageBackground
                                    source={appIcons.ameliabg}
                                    style={styles.imgbg1}
                                    imageStyle={{
                                        borderRadius: 20,
                                        resizeMode: 'cover',
                                    }}></ImageBackground>
                            </ImageBackground>
                            <View style={{alignSelf: 'center', marginTop: 10, height: 110}}>
                <FlatList
                  data={Profiledata}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <>
                      <Pressable
                        style={styles.imagescroll}
                        onPress={() => {
                          this.selectImage(item);
                          this.setState({isVideoVisible: false});
                        }}>
                        <ImageBackground
                          source={item.link}
                          style={styles.imgbgscroll}
                          imageStyle={{
                            borderRadius: 10,
                            resizeMode: 'cover',
                          }}>
              
                        </ImageBackground>
                      </Pressable>
                    </>
                  )}
                />
              </View>
             
                          
                        </View>
                    </View>
                </ScrollView>
            </AppBackground>
        );
    }
}
function mapStateToProps({authReducer}) {
    return {
      user: authReducer?.user,
    };
  }
const actions = { completeProfile };
export default connect(mapStateToProps, actions)(Profile);
