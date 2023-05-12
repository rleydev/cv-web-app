import Info from '../Info/Info'
import Title from '../Title/Title'
import './Feedback.scss'

const Feedback = ({title, feedbackData}) => {

    return (
        <article className='feedback'>
            <Title title={title} />
            {
                feedbackData.map(element => 
                    <div key={element.id} className='feedback-container'>
                        <Info text={element.feedback} />
                        <div className='feedback-container__user'>
                            <img className='feedback-container__user__image' src={element.reporter.photoUrl} alt='user' />
                            <p className='feedback-container__user__text'>{element.reporter.name},<a className='feedback-container__user__text__link' href={element.reporter.citeUrl}> somecite.com</a></p>
                        </div>
                    </div>
                )
            }
            
        </article>
    )
}

export default Feedback