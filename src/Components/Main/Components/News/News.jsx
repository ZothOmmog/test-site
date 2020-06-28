import React from 'react';
import './index.scss';
import { NewsItem } from './Components';
import { NewsItemWrapper } from './Components';

const MOCK_DATA = [
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
  },
]

export function News() {

  const news = MOCK_DATA.map(item => (
    <div key={item.id} className='News__Item'>
      <NewsItemWrapper>
        <NewsItem
          imgPath={item.imgPath}
          title={item.title}
          description={item.description}
        />
      </NewsItemWrapper>
    </div>
  ));

  return (
    <div className='News'>
      {news}
    </div>
  );
}