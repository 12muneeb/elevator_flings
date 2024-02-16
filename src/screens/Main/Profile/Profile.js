import React, { Component } from 'react';
import {
    Dimensions,
    FlatList,
    ImageBackground,
    Pressable,
    Text,
    View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import { appIcons, appImages } from '../../../assets';
import AppBackground from '../../../components/AppBackground';
import CustomText from '../../../components/CustomText';
import ProfileCard from '../../../components/ProfileCard';
import Shadows from '../../../helpers/Shadows';
import { completeProfile } from '../../../redux/actions/authAction';
import { colors, size } from '../../../utils';
import {
    Banner,
    Data1,
    Data2,
    Profiledata,
    document,
} from '../../../utils/dummyData';
import { styles } from './styles';
import Img from '../../../components/Img';
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
        const userData = this.props.user
        console.log('ddddr', this.props.user)
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

                    contentContainerStyle={{ paddingBottom: 80 }}>
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
                                {userData.full_name}
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
                                {userData.about}
                            </Text>

                            <View style={styles.viewStyle1}>
                                <Text style={[styles.txtstyle1, { fontSize: 16 }]}>Interests</Text>
                                <View style={styles.interest}>
                                    <FlatList
                                        scrollEnabled={false}
                                        showsVerticalScrollIndicator={false}
                                        numColumns={3}
                                        keyExtractor={(item, index) => index.toString()}
                                        data={this.props?.user?.interests}
                                        renderItem={({ item }) => <ProfileCard item={item} intersets />}
                                    />

                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 10 }}>
                                    <CustomText text='Education' color={colors.white} />
                                    <CustomText text='Career' color={colors.white}  />
                                    <CustomText text='Career' color={colors.white}  />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 10 }}>
                                    <View style={styles.tag}>
                                        <Text style={styles.tagtxt}>
                                            {userData.education}
                                        </Text>
                                    </View>
                                    <View style={styles.tag}>
                                        <Text style={styles.tagtxt}>
                                            {userData.career}
                                        </Text>
                                    </View>
                                    <View style={styles.tag}>
                                        <Text style={styles.tagtxt}>
                                            {userData.career}
                                        </Text>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 10 }}>
                                    <CustomText text='Height' color={colors.white}  />
                                    <CustomText text='Hair Color' color={colors.white}  />
                                    <CustomText text='Eye Color' color={colors.white} />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10, marginTop: 10 }}>
                                    <View style={styles.tag}>
                                        <Text style={styles.tagtxt}>
                                            {userData.height}
                                        </Text>
                                    </View>
                                    <View style={styles.tag}>
                                        <Text style={styles.tagtxt}>
                                            {userData.hair_color}
                                        </Text>
                                    </View>
                                    <View style={styles.tag}>
                                        <Text style={styles.tagtxt}>
                                            {userData.eye_color}
                                        </Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={styles.imageParent}>
                            <View>
                                <ImageBackground
                                    source={appImages.event1}
                                    style={styles.imgbg1}
                                    imageStyle={{ borderRadius: 20, resizeMode: 'cover' }}>
                                    <Img local src={appIcons.delete} tintColor={colors.red} resizeMode={'contain'} style={styles.img} />
                                </ImageBackground>
                                <View style={{ alignSelf: 'center', marginTop: 10, height: 110, }}>
                                    <FlatList
                                        data={Profiledata}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item }) => (
                                            <>
                                                <Pressable
                                                    style={styles.imagescroll}
                                                    onPress={() => {
                                                        this.selectImage(item);
                                                        this.setState({ isVideoVisible: false });
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


                    </View>
                </ScrollView>
            </AppBackground>
        );
    }
}
function mapStateToProps({ authReducer }) {
    return {
        user: authReducer?.user,
    };
}
const actions = { completeProfile };
export default connect(mapStateToProps, actions)(Profile);
