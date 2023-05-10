import Expertise from '../Expertise/Expertise'
import Title from '../Title/Title'
import './Experience.scss'

const Experience = ({title, data}) => {
    return (
        <article className='experience'>
            <Title title={title} />
            <Expertise data={data} />
        </article>
    )
}

export default Experience