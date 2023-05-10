import './StartPage.scss';
import React from 'react';
import avatar from '../../assets/StartPage/user_avatar.png'

const StartPage = () => {

    return(
        <section className='start-page-section'>
            <div className='start-page-section__layer'>
                <article className='start-page-section__layer__artile'>
                    <img className='start-page-section__layer__artile__avatar' src={avatar} alt='user_avatar' />
                    <h2>John Doe</h2>
                    <h3>Programmer. Creative. Innovator</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
                    </p>
                    <button>Know more</button>
                </article>
            </div>
        </section>
    )
}

export default StartPage