import stick from '../../assets/SideBar/stick.png'
import './Panel.scss'
import avatar from '../../assets/StartPage/user_avatar.png'
import Navigation from '../Navigation/Navigation'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

 
const Panel = ({data}) => {

    const [togglePanel, setTogglePanel] = useState(false)

    const panelStickPressed = () => {
        if (togglePanel === false) {
            setTogglePanel(true)
        } else if (togglePanel === true) {
            setTogglePanel(false)
        }
    }

    useEffect(() => {
        console.log(togglePanel)
    }, [togglePanel])

     return (
        <section className={togglePanel === false ? `panel` : 'panel--hidden'}>
            <div className={`panel__stick`} onClick={panelStickPressed}>
                    <img className='panel__stick__img' src={stick} alt='stick' />
            </div>
            <div className={togglePanel === false ? 'panel__photo-container' : 'panel-photo--hidden'}>
                <img className='panel__photo-container__photo' src={avatar} alt='avatar' />
                <h2 className='panel__photo-container__name'>{data}</h2>
            </div>
            <div className={togglePanel === false ? 'panel__nav-container' : 'hidden'}>
                <Navigation panelState={togglePanel} />
            </div>
            <Link to='/' className={togglePanel === false ? 'panel__button' : 'panel-button--hidden'}>
                <button className="panel__button__but">
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <p className='panel__button__but__text'>Go back</p>
                </button>
            </Link>
            
        </section>
     )
}

export default Panel