const sleep = async (ms) => new Promise(
  resolve => setTimeout(resolve, 2000)
);

const MOCK_DATA_LOGIN = {
  name: 'Admin',
  password: '12345',
  token: '4L10ccC6QD'
}

const MOCK_DATA_TOKEN = [
  'qaBtDhhRBUv3lOuPgP9C',
  'CLmDJHw3WzOSiWWwEA5Z'
]

const MOCK_DATA_ME = {
  name: 'Admin',
  mail: 'admin@gmail.com',
  city: 'Пермь',
  img: 'https://bit.ly/2A9ZpYE',
}

const MOCK_DATA_SET_NEWS_THUNK = [
  {
    id: '1',
    imgPath: 'https://bit.ly/3eT8Yup',
    title: 'Модернизация новых предложений',
    description: 'Таким образом постоянный количественный рост и сфера нашей активности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации новых предложений.'
  },
  {
    id: '2',
    imgPath: 'https://bit.ly/2NDDmgi',
    title: 'Консультация с широким активом',
    description: 'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений.'
  },
  {
    id: '3',
    imgPath: 'https://bit.ly/3dEOHap',
    title: 'Развитие структуры играет важную роль',
    description: 'Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий. Товарищи! сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.'
  },
  {
    id: '4',
    imgPath: 'https://bit.ly/2Bhjwoq',
    title: 'Разнообразный и богатый опыт консультаций',
    description: 'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. '
  }
]

const prevToken = 1;
export const GET_ME_FROM_SERVER_IF_LOGIN = async (name, password) => {
  await sleep(2000);

  let token;

  if (prevToken === 1) {
    token = MOCK_DATA_TOKEN[0];
    prevToken = 0;
  }
  else {
    token = MOCK_DATA_TOKEN[1];
    prevToken = 1;
  }

  if(
    name !== MOCK_DATA_LOGIN.name || 
    password !== MOCK_DATA_LOGIN.password
  ) return false;

  return {
    ...MOCK_DATA_ME,
    token: token
  };
}

export const GET_ME_FROM_SERVER_IF_TOKEN = async (token) => {
  await sleep(2000);

  if(token !== MOCK_DATA_TOKEN.token) return false;

  return MOCK_DATA_ME;
}

export const GET_NEWS_FROM_SERVER = async function* () {
  await sleep(1000);
  yield MOCK_DATA_SET_NEWS_THUNK[0];

  await sleep(1000);
  yield MOCK_DATA_SET_NEWS_THUNK[1];

  await sleep(1000);
  yield MOCK_DATA_SET_NEWS_THUNK[2];

  await sleep(1000);
  yield MOCK_DATA_SET_NEWS_THUNK[3];

  return;
}
