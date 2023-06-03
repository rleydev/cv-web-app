import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faSkype } from '@fortawesome/free-brands-svg-icons'
import Title from '../Title/Title'
import './Contacts.scss'
import BlackLabel from '../BlackLabel/BlackLabel'

const Contacts = ({title, data}) => {
    return (
        <section className='contacts'>
            <Title title={title} />
            <article className='contacts__container'>
                <div className='contacts__container__phone-container'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faPhone} color='#26C17E' />
                    <a href={`tel:${data.phoneNum}`}> <BlackLabel text={data.phoneNum} /></a>
                </div>
                <div className='contacts__container__phone-container'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faEnvelope} color='#26C17E' />
                    <a href={`mailto:${data.email}`}><BlackLabel text={data.email} /></a>
                </div>
                <div className='contacts__container__social-net'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faTwitter} color='#26C17E' />
                    <div className='contacts__container__social-net__info'>
                        <BlackLabel text={data.twitter.title} />
                        <a href={data.twitter.link}>{data.twitter.link}</a>
                    </div>
                </div>
                <div className='contacts__container__social-net'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faFacebookF} color='#26C17E' />
                    <div className='contacts__container__social-net__info'>
                        <BlackLabel text={data.facebook.title} />
                        <a href={data.facebook.link}>{data.facebook.link}</a>
                    </div>
                </div>
                <div className='contacts__container__social-net'>
                    <FontAwesomeIcon className='contacts__container__phone-container__icon' icon={faSkype} color='#26C17E' />
                    <div className='contacts__container__social-net__info'>
                        <BlackLabel text={data.skype.title} />
                        <a href={data.skype.link}>{data.skype.link}</a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Contacts