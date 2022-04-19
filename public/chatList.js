import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const chatList = [
  {
    id: 1,
    image: require('../src/assets/img/profile/profile-1/img-profile-1.png'),
    name: '장만월 사장님',
    lastMessage: {id: 1, message: '어딘데 출근 안하니, 죽고 싶니?', createDate: moment().set({hour: 9, minute: 32}).format(DATE_FORMAT)},
    unreadMessageCount: 2,
  },
  {
    id: 2,
    image: require('../src/assets/img/profile/profile-3/img-profile-3.png'),
    name: '신정근 바텐더',
    lastMessage: {id: 2, message: '오시는 길에 와인 몇병만 사다주세요.', createDate: moment().set({hour: 14, minute: 34}).format(DATE_FORMAT)},
    unreadMessageCount: 0,
  },
  {
    id: 3,
    image: require('../src/assets/img/profile/profile-4/img-profile-4.png'),
    name: '이미라 의사',
    lastMessage: {id: 3, message: '휴가 잘 보내고 계신가요? 다름이 아니라 지', createDate: moment().subtract(1,'week').startOf('week').day( 5).format(DATE_FORMAT)},
    unreadMessageCount: 0,
  },
  {
    id: 4,
    image: require('../src/assets/img/profile/profile-5/img-profile-5.png'),
    name: '구찬성 지배인',
    lastMessage: {id: 4, message: '아 휴가셨군요. 약속은 다음으로 미루시죠!', createDate: moment().subtract(1,'week').startOf('week').day( 4).format(DATE_FORMAT)},
    unreadMessageCount: 0,
  },
  {
    id: 5,
    image: require('../src/assets/img/profile/profile-6/img-shot-6.png'),
    name: '노준석 총지배인',
    lastMessage: {id: 5, message: '휴가에서 언제 돌아오시는지요. 돌아오시면', createDate: moment().subtract(1,'week').startOf('week').day( 5).format(DATE_FORMAT)},
    unreadMessageCount: 0,
  },
  {
    id: 6,
    image: require('../src/assets/img/profile/profile-7/img-shot-7.png'),
    name: '김유나 인턴',
    lastMessage: {id: 6, message: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ', createDate: moment().subtract(1,'week').startOf('week').day( 4).format(DATE_FORMAT)},
    unreadMessageCount: 0,
  },
  {
    id: 7,
    image: require('../src/assets/img/profile/profile-2/img-profile-2.png'),
    name: '구현모',
    lastMessage: {id: 7, message: '술먹자', createDate: moment().subtract(1,'week').startOf('week').day( 3).format(DATE_FORMAT)},
    unreadMessageCount: 0,
  }
];

export default chatList;
