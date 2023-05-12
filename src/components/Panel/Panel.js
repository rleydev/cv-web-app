import stick from '../../assets/SideBar/stick.png'
import './Panel.scss'
import avatar from '../../assets/StartPage/user_avatar.png'
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

 
const Panel = ({data}) => {


     return (
        <article className='panel'>
            <div className='panel__stick'>
                    <img className='panel__stick__img' src={stick} alt='stick' />
            </div>
            <div className='panel__photo-container'>
                <img className='panel__photo-container__photo' src={avatar} alt='avatar' />
                <h2 className='panel__photo-container__name'>{data}</h2>
            </div>
            <div className='panel__nav-container'>
                <Navigation />
            </div>
            <Link to='/' className='panel__button'>
                <button className="panel__button__but">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <p className='panel__button__but__text'>Go back</p>
                </button>
            </Link>
            
        </article>
     )
}

export default Panel