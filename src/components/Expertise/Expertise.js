import BlackLabel from '../BlackLabel/BlackLabel'
import './Expertise.scss'

const Expertise = ({data}) => {
    return(
        <article> 
            { data.map(element =>
                <div key={element.id} className='expertise-container'>
                    <div className='expertise-container__left'>
                        <BlackLabel text={element.info.company} />
                        <p className='expertise-container__left__date'>{element.date}</p>
                    </div>
                    <div className='expertise-container__right'>
                        <BlackLabel text={element.info.job} />
                        <p className='expertise-container__right__description'>{element.info.description}</p>
                    </div>
            </div>
            )} 
        </article>
    )
}

export default Expertise