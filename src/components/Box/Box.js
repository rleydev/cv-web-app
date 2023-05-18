import Title from '../Title/Title'
import './Box.scss'

const Box = ({title, content}) => {
    return (
        <section className="box">
            <Title title={title} />
            <p>{content}</p>
        </section>
    )
}

export default Box