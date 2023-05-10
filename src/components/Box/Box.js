import Title from '../Title/Title'
import './Box.scss'

const Box = ({title, content}) => {
    return (
        <article className="box">
            <Title title={title} />
            <p>{content}</p>
        </article>
    )
}

export default Box