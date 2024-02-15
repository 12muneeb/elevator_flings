import { Linking } from 'react-native';
import { appIcons, appImages } from '../../assets';
import NavService from '../../helpers/NavService';
export const categoriesData = ['Nike Revolution', 'Addidas', 'Skecher'];
export const colorData = ['black', 'orange', 'red'];
export const sizeData = ['40', '41', '42', '43', '44', '45'];
export const Data1 = [{ id: 1, title: 'Loreum Ipsum', subtitle: 'Education' }, { id: 2, title: 'Loreum Ipsum', subtitle: 'Career' }, { id: 3, title: 'Loreum Ipsum', subtitle: 'Career' },]
export const Data2 = [{ id: 1, title: 'Loreum Ipsum', subtitle: 'Height' }, { id: 2, title: 'Loreum Ipsum', subtitle: 'Hair Color' }, { id: 3, title: 'Loreum Ipsum', subtitle: 'Eye Color' },]

export const homeData = [
  {
    id: 0,
    image: appIcons.postOne,
    name: 'Bella Jane',
    time: '10 min',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 1,
    image: appIcons.postTwo,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 2,
    image: appIcons.postThree,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 3,
    image: appIcons.postOne,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 4,
    image: appIcons.postTwo,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    id: 5,
    image: appIcons.postThree,
    name: 'Bella Jane',
    time: '1 hour',
    commentCount: 10,
    likeCount: 10,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
];

export const chats = [
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    desc2: 'Its a Match',
    desc3: 'Great idea',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    desc3: 'Great idea',
    image: appImages.profile,
    time: '5:45 pm',
    desc2: 'Views your profile!',
  },
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    desc3: 'Great idea',

    image: appImages.profile,
    time: '5:45 pm',
    desc2: 'Lorem ipsum dolor',
    desc3: 'Great idea',

  },
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
    desc2: 'Its a Match',
    desc3: 'Great idea',

  },
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
    desc2: 'Its a Match',
    desc3: 'Great idea',

  },
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
    desc2: 'Lorem ipsum dolor',
    desc3: 'Great idea',

  },
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
    desc2: 'Lorem ipsum dolor',
    desc3: 'Great idea',

  },
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
    desc2: 'Views your profile!',
    desc3: 'Great idea',

  },
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
    desc3: 'Great idea',

    desc2: 'Views your profile!',
  },
  {
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
    desc2: 'Views your profile!',
    desc3: 'Great idea',

  },
];
export const ChatData = [
  {
    id: 1,
    name: 'Mickle',
    message:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    image: appImages.profile,
  },
  {
    id: 2,
    name: 'Micsskle',
    message:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ',
    image: appImages.profile,
  },
];
export const social = [
  {
    link: 'https://facebook.com',
    image: appIcons.fb,
    images: appIcons.fbdark,
    onPress: () => Linking.openURL('https://facebook.com'),
  },
  {
    link: 'https://instgram.com',
    image: appIcons.instalink,
    images: appIcons.instadark,
    onPress: () => Linking.openURL('https://instgram.com'),


  },
  {
    link: 'https://linkdin.com',
    image: appIcons.linkedinlink,
    images: appIcons.linkedin,
    onPress: () => Linking.openURL('https://linkdin.com'),


  },
];
export const hobbies = [
  {
    image: appIcons.joy,
  },
  {
    image: appIcons.cycle,
  },
  {
    image: appIcons.book,
  },
  {
    image: appIcons.movie,
  },
];
export const intersets = [
  {
    title: `168 cm (5'6)`,
  },
  {
    title: 'Trainer',
  },
  {
    title: 'Cooking',
  },
  {
    title: 'Art',
  },
  {
    title: 'Action Adventure',
  },
];
export const document = [
  {
    id: 0,
    image: appIcons.document,
  },
  {
    id: 1,

    image: appIcons.document,
  },
  {
    id: 2,

    image: appIcons.document,
  },
];
export const data = [
  {
    title: 'Age',
    text: '23+',
  },
  {
    title: 'Weight',
    text: 'Lorem Ipsum',
  },
  {
    title: 'Height',
    text: 'Lorem Ipsum',
  },
  {
    title: 'Preferences',
    text: 'Lorem Ipsum',
  },
];
export const imagebg = [
  {
    image: appIcons.thumb3,
  },
  {
    image: appIcons.thumb1,
  },
];
export const community = [
  {
    name: 'Amelia',
    time: '1 min ago',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit suscipit commodo enim tellus.',
    image: appIcons.thumb1,
    btn: appIcons.dots
  },
  {
    name: 'Sara Smith',
    time: '1 min ago',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit suscipit commodo enim tellus.',
    image: appIcons.thumb3,
    play: appIcons.play

  },
  {
    name: 'Amelia',
    time: '1 min ago',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit suscipit commodo enim tellus.',
    image: appIcons.amelianew,
  },
  {
    name: 'Amelia',
    time: '1 min ago',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit suscipit commodo enim tellus.',
    image: appIcons.samelia,
  },
];
export const Tipsdata = [
  {
    title: 'Tip Features',
    image: appIcons.forward,
    onPress: () => NavService.navigate('SubscriptionPackages'),
    profileimg: appImages.profile,
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
  {
    title: 'Share Application Review',
    image: appIcons.forward,
    // onPress: () => NavService.navigate('Subscription')
    profileimg: appImages.profile,
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
  {
    title: 'Invite link',
    image: appIcons.forward,
    // onPress: () => NavService.navigate('Subscription'),
    profileimg: appImages.profile,
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
  {
    title: 'Subscription',
    image: appIcons.forward,
    onPress: () => NavService.navigate('Subscription'),
    profileimg: appImages.profile,
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
  {
    title: 'Block Profiles',
    image: appIcons.forward,
    onPress: () => NavService.navigate('BlockProfiles'),
    profileimg: appImages.profile,
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
  {
    title: 'Terms and conditions',
    image: appIcons.forward,
    onPress: () => Linking.openURL('https://google.com'),
    profileimg: appImages.profile,
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
  {
    title: 'Privacy Policy',
    image: appIcons.forward,
    onPress: () => Linking.openURL('https://google.com'),
    profileimg: appImages.profile,
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
];
export const products = [
  {
    title: 'STARTUP',
    price: '10.00',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
  {
    title: 'BEGINNER',
    price: '20.00',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
  {
    title: 'PREMIUM',
    price: '30.00',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque fringilla.',
  },
];
export const SubscriptionData = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur',
  },
];
export const Reason = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 5,
    title: 'Other',
  },
];
export const packages = [
  { title: 'Beginner', price: '$ 10.00' },
  { title: 'Beginner', price: '$ 20.00' },
  { title: 'Premium', price: '$ 30.00' },
];
export const pendings = [
  {
    id: 1,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 2,
    title: 'Salena',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 3,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 4,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 5,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 6,
    title: 'Salena',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 7,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 8,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 9,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 10,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 11,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 12,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 13,
    title: 'Amelia',
    desc: 'Accept Your Request',
    image: appImages.profile,
    time: '5:45 pm',
  },
];
export const chat = [
  {
    id: 1,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 2,
    title: 'Salena',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 3,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 4,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 5,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 6,
    title: 'Salena',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 7,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 8,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 9,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 10,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 11,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 12,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 13,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 14,
    title: 'Amelia',
    desc: 'send you a request',
    image: appImages.profile,
    time: '5:45 pm',
  },
];
export const Blockdata = [
  {
    id: 1,
    title: 'Name,26',
    desc: 'Basic info',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 2,
    title: 'Education',
    desc: 'Add Your work',
    image: appImages.profile,
    time: '5:45 pm',
  },
  {
    id: 3,
    title: 'Bio',
    desc: 'Add a bio introduce Your self',
    image: appImages.profile,
    time: '5:45 pm',
  },

];
export const Link = [
  {
    id: 1,
    name: 'Facebook',
    image: appIcons.facebook,
    titlecolor: '#1674EA',
    tintColor: '#1674EA',
  },
  {
    id: 2,
    name: 'Whatsapp',
    image: appIcons.whatsapp,
    titlecolor: '#1EC55D',
  },
  {
    id: 3,
    name: 'Gmail',
    image: appIcons.mail,
    titlecolor: '#FF2020',
  },
  {
    id: 4,
    name: 'Twitter',
    image: appIcons.twitter,
    titlecolor: '#00A7E7',
  },
];
export const Profiledata = [
  {
    link: appImages.editEvent1,
  },
  {
    link: appImages.editEvent2,
  },
  {
    link: appImages.editEvent3,
  },
];
export const matchData = [
  {
    id: 0,
    title: 'Amelia',
    address: 'United State Of America',
    image: appIcons.amelia,
    description:
      '  Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit commodo enim tellus et nascetur at leo accumsan, odio habitan',
  },
  {
    id: 1,
    title: 'Samelia',
    address: 'United State Of America',
    image: appIcons.samelia,
    description:
      '  Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit commodo enim tellus et nascetur at leo accumsan, odio habitan',
  },
  {
    id: 2,
    title: 'Emma',
    address: 'United State Of America',
    image: appIcons.emma,
    description:
      '  Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit commodo enim tellus et nascetur at leo accumsan, odio habitan',
  },
];
export const Banner = [
  {
    image: appImages.editEvent1,
  },
  {
    image: appImages.editEvent2,
  },
  {
    image: appImages.editEvent3,
  },
];


