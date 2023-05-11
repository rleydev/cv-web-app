import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faSkype } from '@fortawesome/free-brands-svg-icons'
import Title from '../Title/Title'
import './Contacts.scss'
import BlackLabel from '../BlackLabel/BlackLabel'

const Contacts = ({title, data}) => {
    return (
        <article className='contacts'>
            <Title title={title} />
            <div className='contacts__container'>
                <div className='contacts__container__phone-container'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faPhone} color='#26C17E' />
                    <BlackLabel text={data.phoneNum} />
                </div>
                <div className='contacts__container__phone-container'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faEnvelope} color='#26C17E' />
                    <BlackLabel text={data.email} />
                </div>
                <div className='contacts__container__social-net'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faTwitter} color='#26C17E' />
                    <div className='contacts__container__social-net__info'>
                        <BlackLabel text={data.twitter.title} />
                        <p>{data.twitter.link}</p>
                    </div>
                </div>
                <div className='contacts__container__social-net'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faFacebookF} color='#26C17E' />
                    <div className='contacts__container__social-net__info'>
                        <BlackLabel text={data.facebook.title} />
                        <p>{data.facebook.link}</p>
                    </div>
                </div>
                <div className='contacts__container__social-net'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faSkype} color='#26C17E' />
                    <div className='contacts__container__social-net__info'>
                        <BlackLabel text={data.skype.title} />
                        <p>{data.skype.link}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Contacts