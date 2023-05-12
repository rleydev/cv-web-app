import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGraduationCap, faPencil, faSuitcase, faLocationArrow, faComment } from '@fortawesome/free-solid-svg-icons'

import './Navigation.scss'
import { Link } from 'react-scroll'

const Navigation = ({panelState}) => {

    return (
        <article className='navigation'>
            <Link to='about' className={panelState === false ? 'navigation__container' : 'nav--hidden'} spy={true} smooth={true} duration={500} activeClass='current-page-location'>
                <FontAwesomeIcon className='navigation__container__icon' icon={faUser} color='#667081' />
                <p className='navigation__container__link'>
                    About me
                </p>
            </Link>
            <Link to='education' className={panelState === false ? 'navigation__container' : 'nav--hidden'} spy={true} smooth={true} duration={500} activeClass='current-page-location'>
                <FontAwesomeIcon className='navigation__container__icon' icon={faGraduationCap} color='#667081' />
                <p className='navigation__container__link'>
                    Education
                </p>
            </Link>
            <Link to='experience' className={panelState === false ? 'navigation__container' : 'nav--hidden'} spy={true} smooth={true} duration={500} activeClass='current-page-location'>
                <FontAwesomeIcon className='navigation__container__icon' icon={faPencil} color='#667081' />
                <p className='navigation__container__link'>
                    Experience
                </p>
            </Link>
            <Link to='portfolio' className={panelState === false ? 'navigation__container' : 'nav--hidden'} spy={true} smooth={true} duration={500} activeClass='current-page-location'>
                <FontAwesomeIcon className='navigation__container__icon' icon={faSuitcase} color='#667081' />
                <p className='navigation__container__link'>
                    Portfolio
                </p>
            </Link>
            <Link to='contacts' className={panelState === false ? 'navigation__container' : 'nav--hidden'} spy={true} smooth={true} duration={500} activeClass='current-page-location'>
                <FontAwesomeIcon className='navigation__container__icon' icon={faLocationArrow} color='#667081' />
                <p className='navigation__container__link'>
                    Contacts
                </p>
            </Link>
            <Link to='feedback' className={panelState === false ? 'navigation__container' : 'nav--hidden'} spy={true} smooth={true} duration={500} activeClass='current-page-location'>
                <FontAwesomeIcon className='navigation__container__icon' icon={faComment} color='#667081' />
                <p className='navigation__container__link'>
                    Feedback
                </p>
            </Link>
        </article>
    )
}

export default Navigation