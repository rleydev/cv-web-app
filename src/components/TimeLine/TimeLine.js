import './TimeLine.scss'
import BlackLabel from '../BlackLabel/BlackLabel'
import arrowImg from '../../assets/MainPage/education-arrow.png'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../services/store/useActions'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const TimeLine = () => {

  const {educationArray, isLoading, error} = useSelector(state => state.educationReducer)
  const {getEducation} = useActions()

  useEffect(() => {
    getEducation()
  }, [])

    return (
      <article className='timeline__container'>
        {
          isLoading === true ? (
            <div className='timeline-container--uploading'>
              <FontAwesomeIcon className='timeline-container--uploading__icon' icon={faArrowsRotate} color='#26C17E' />
            </div>
          ) : isLoading === false && error ? (
            <div className='timeline-container--uploading'>
              <h3>Something went wrong; please review your server connection!</h3>
            </div>
          ) : (
            educationArray.map(element => (
              <article key={element.id} className='timeline'>
                  <div className='timeline__label'>
                      <BlackLabel text={element.date} />
                </div>
                <div className='timeline__right'>
                    <img className='timeline__right__arrow' src={arrowImg} alt='arrow-img'/>
                    <article className='timeline__right__box'>
                        <BlackLabel className='timeline__right__box__label' text={element.title} />
                        <p className='timeline__right__box__text'>{element.description}</p>
                    </article>
                </div>
              </article>
            ))
          )
        }
      </article>
    )
  }

export default TimeLine