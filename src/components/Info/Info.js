import './Info.scss'

const Info = ({text}) => {
    return(
        <div className='info-container'>
            <p className='info-container__text'>{text}</p>
        </div>
    )
}

export default Info 