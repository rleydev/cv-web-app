import './TimeLine.scss'
import BlackLabel from '../BlackLabel/BlackLabel'
import arrowImg from '../../assets/MainPage/education-arrow.png'

const TimeLine = ({data}) => {
    return (
      <div className='timeline__container'>
        {data.map(element => (
          <article key={element.id} className='timeline'>
              <div className='timeline__label'>
                  <BlackLabel text={element.date} />
            </div>
            <div className='timeline__right'>
                <img className='timeline__right__arrow' src={arrowImg} alt='arrow-img'/>
                <article className='timeline__right__box'>
                    <BlackLabel className='timeline__right__box__label' text={element.title} />
                    <p className='timeline__right__box__text'>{element.text}</p>
                </article>
            </div>
          </article>
        ))}
      </div>
    )
  }

export default TimeLine