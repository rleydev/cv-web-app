import TimeLine from '../TimeLine/TimeLine'
import Title from '../Title/Title'
import './Education.scss'

const Education = ({title}) => {
    return (
        <section className='education'>
            <div className='education__title' >
            <Title title={title} />
            </div>
            <TimeLine />
        </section>
    )
}

export default Education