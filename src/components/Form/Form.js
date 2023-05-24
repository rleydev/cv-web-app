import './Form.scss'
import { Formik, Field, Form } from 'formik'
import { useState } from 'react';
import * as Yup from 'yup';
import { useActions } from '../../services/store/useActions';

const AddSkillSchema = Yup.object().shape({
    name: Yup.string()
    .required('Skill name is a required field'),
    range: Yup.number()
    .min(10, 'Skill range must be greater than or equal to 10')
    .max(100, 'Skill range must be less than or equal to 100')
    .required('Skill range is a required field')
})

const SkillsForm = () => {

    const [isDirty, setIsDirty] = useState(false); 
    const {addSkill} = useActions()

    const handleChangeDirty = () => {
        !isDirty && setIsDirty(true);
    };

    return (
        <article className='form'>
            <Formik
            initialValues={{
                name: '',
                range: '',
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
                            <label className='label' htmlFor="name">Skill name</label>
                            <Field onChange={handleChange} className={`textinput ${errors.name && touched.name ? 'error-border' : ''}`} id="name" name="name" placeholder="Enter skill name"/>
                        </div>
                    
                        <div className='stroke'>
                            <label className='label' htmlFor="range">Skill range</label>
                            <Field onChange={handleChange} className={`textinput ${errors.range && touched.range ? 'error-border' : ''}`} id="range" name="range" placeholder="Enter skill range" />
                        </div>
                    </div>
                    { (errors.name && touched.name) || (errors.range && touched.range) ? (
                        <p className='error-text'>
                            {errors.name} {errors.range}
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