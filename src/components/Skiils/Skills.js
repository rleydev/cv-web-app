import Title from '../Title/Title'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'
import SkillsIndicators from '../SkillsIndicators/SkillsIndicators'
import SkillsForm from '../Form/Form'
import { useState } from 'react'


const Skills = ()=> {

    const [showAddSkills, setShowAddSkills] = useState(false)


    return (
        <section className='skills'>
            <div className='skills__top'>
                <Title title={'Skills'} />
                <button className='skills__top__button' onClick={() => setShowAddSkills(prev => !prev)}>
                    <FontAwesomeIcon icon={faPenAlt} color='white'/>
                    <p>Open edit</p>
                </button>
            </div>

            {showAddSkills ? (
                <SkillsForm />
            ) : (
                <div></div>
            )}
            
            <article className='skills__items-container'>
                <div className='skills__items-container__item'>
                    <p>HTML</p>
                </div>
                <div className='skills__items-container__item'>
                    <p>CSS</p>
                </div>
            </article>
            <SkillsIndicators />
        </section>
    )
}

export default Skills