import './Form.scss'
import { Formik, Field, Form } from 'formik'
import { useState } from 'react';
import * as Yup from 'yup';
import { useActions } from '../../services/store/useActions';

const AddSkillSchema = Yup.object().shape({
    skillName: Yup.string()
    .required('Skill name is a required field'),
    skillRange: Yup.number()
    .min(10, 'Skill range must be greater than or equal to 10')
    .max(100, 'Skill range must be less than or equal to 100')
    .required('Skill range is a required field')
})



const SkillsForm = () => {

    const [isDirty, setIsDirty] = useState(false); 
    const {addSkill} = useActions()

    const handleChangeDirty = () => {
        if (isDirty === false) {
            setIsDirty(true); 
        }
    };

    return (
        <article className='form'>
            <Formik
            initialValues={{
                skillName: '',
                skillRange: '',
            }}

            validationSchema={AddSkillSchema}

            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                setIsDirty(true)

                await addSkill(values)
            }}

            onChange={handleChangeDirty}
            >
            {({ handleChange, errors, touched }) => (
                <Form className='form__container' onChange={handleChangeDirty}>
                    <div className='form__container__input-box'>
                        <div className='stroke'>
                            <label className='label' htmlFor="skillName">Skill name</label>
                            <Field onChange={handleChange} className={`textinput ${errors.skillName && touched.skillName ? 'error-border' : ''}`} id="skillName" name="skillName" placeholder="Enter skill name"/>
                        </div>
                    
                        <div className='stroke'>
                            <label className='label' htmlFor="skillRange">Skill range</label>
                            <Field onChange={handleChange} className={`textinput ${errors.skillRange && touched.skillRange ? 'error-border' : ''}`} id="skillRange" name="skillRange" placeholder="Enter skill range" />
                        </div>
                    </div>
                    { (errors.skillName && touched.skillName) || (errors.skillRange && touched.skillRange) ? (
                        <p className='error-text'>
                            {errors.skillName} {errors.skillRange}
                        </p>
                    ) : (
                        <div className='form__container--gap'>
                        </div>
                    )}
                    <button className="submit-but" disabled={!isDirty || Object.keys(errors).length > 0} type="submit">Add skill</button>
                </Form>
            )}

            </Formik>
        </article>
    )
}

export default SkillsForm