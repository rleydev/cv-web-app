import './Info.scss'

const Info = ({text}) => {
    return(
        <article className='info-container'>
            <p className='info-container__text'>{text}</p>
        </article>
    )
}

export default Info 