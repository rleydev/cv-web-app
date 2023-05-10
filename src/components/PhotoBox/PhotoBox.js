import './PhotoBox.scss'
 
const PhotoBox = ({avatar, name, profession, description}) => {
    return (
        <div className='photobox'>
            <img src={avatar} alt='user_avatar' />
            <h2>{name}</h2>
            <h3>{profession}</h3>
            <p>{description}</p>
        </div>
    )
}

export default PhotoBox