import Expertise from '../Expertise/Expertise'
import Title from '../Title/Title'
import './Experience.scss'

const Experience = ({title, data}) => {
    return (
        <section className='experience'>
            <Title title={title} />
            <Expertise data={data} />
        </section>
    )
}

export default Experience