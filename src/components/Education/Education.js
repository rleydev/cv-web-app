import TimeLine from '../TimeLine/TimeLine'
import Title from '../Title/Title'
import './Education.scss'

const Education = ({title, timeLineData}) => {
    return (
        <article className='education'>
            <div className='education__title' >
            <Title title={title} />
            </div>
            <TimeLine data={timeLineData} />
        </article>
    )
}

export default Education