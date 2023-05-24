import Title from '../Title/Title'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt } from '@fortawesome/free-solid-svg-icons'
import SkillsIndicators from '../SkillsIndicators/SkillsIndicators'
import SkillsForm from '../Form/Form'
import { useEffect, useState } from 'react'
import { useActions } from '../../services/store/useActions'
import { useSelector } from 'react-redux'



const Skills = ()=> {

    const [showAddSkills, setShowAddSkills] = useState(false)

    const {skillsArray, isLoading, error} = useSelector(state => state.getSkillsReducer)
    const {getSkills} = useActions()

    const uploadSkills = () => {
        skillsArray.length === 0 && getSkills();
    }

    useEffect(() => {
        uploadSkills()
        console.log(skillsArray)
    }, [])

    return (
        <section className='skills'>
            <div className='skills__top'>
                <Title title={'Skills'} />
                <button className='skills__top__button' onClick={() => setShowAddSkills(prev => !prev)}>
                    <FontAwesomeIcon icon={faPenAlt} color='white'/>
                    <p>Open edit</p>
                </button>
            </div>

            {showAddSkills ? 
                <SkillsForm /> : null
            }
        
            {isLoading === true ? (<div></div>) : 
            isLoading === false && error ?  (<div></div>) :

            skillsArray.map((element) =>

                <article key={element.id} className='skills__items-container'>
                    <div className='skills__items-container__item' style={ {width: `${element.range}%` }}>
                        <p>{element.name}</p>
                    </div>
                </article>
            )}
            
            <SkillsIndicators />
        </section>
    )
}

export default Skills