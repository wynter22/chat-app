import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const chatMessage = {
  1: [
    {id: 0, senderId: 1, message: '출근했니?', createDate: '2021-05-06 14:34:00'},
    {id: 1, senderId: 1, message: '출근했냐구?', createDate: '2021-05-06 14:35:00'},
    {id: 2, senderId: 1, message: '어딘데 출근 안하니?', createDate: '2021-05-07 14:36:00'},
    {id: 3, senderId: 0, message: '해외 출장중입니다.', createDate: '2021-05-07 14:37:00'}
  ],
  2: [
    {id: 2, message: '오시는 길에 와인 몇병만 사다주세요.', createDate: moment().set({hour: 14, minute: 34}).format(DATE_FORMAT)}
  ],
  3: [
    {
      id: 3,
      message: '휴가 잘 보내고 계신가요? 다름이 아니라 지금 ',
      createDate: moment().subtract(1, 'week').startOf('week').day(5).format(DATE_FORMAT)
    }
  ],
  4: [
    {
      id: 4,
      message: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
      createDate: moment().subtract(1, 'week').startOf('week').day(4).format(DATE_FORMAT)
    }
  ],
  5: [
    {
      id: 5,
      message: '휴가에서 언제 돌아오시는지요. 돌아오시면',
      createDate: moment().subtract(1, 'week').startOf('week').day(5).format(DATE_FORMAT)
    },
  ],
  6: [
    {
      id: 6,
      message: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
      createDate: moment().subtract(1, 'week').startOf('week').day(4).format(DATE_FORMAT)
    }
  ],
  7: [
    {id: 7, message: '술먹자', createDate: moment().subtract(1, 'week').startOf('week').day(3).format(DATE_FORMAT)},
  ]
};

export default chatMessage;
