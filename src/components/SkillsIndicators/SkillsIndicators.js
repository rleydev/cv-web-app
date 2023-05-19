import "./SkillsIndicators.scss"
 
const SkillsIndicators = () => {
    return (
        <article className='skills__info'>
                <div className='skills__info__border'>
                    <div className='skills__info__border--stick'>
                    </div>
                    <div className='skills__info__border--stick'>
                    </div>
                    <div className='skills__info__border--stick'>
                    </div>
                </div>
                <div className='skills__info__text'>
                    <p>Beginner</p>
                    <p>Proficient</p>
                    <p>Expert</p>
                    <p>Master</p>
                </div>
        </article>
    )
}

export default SkillsIndicators