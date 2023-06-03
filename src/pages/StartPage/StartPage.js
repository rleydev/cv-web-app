import './StartPage.scss';
import React from 'react';
import avatar from '../../assets/StartPage/user_avatar.png'
import Button from '../../components/Button/Button';
import CustomLink from '../../components/CustomLink/CustomLink';
import PhotoBox from '../../components/PhotoBox/PhotoBox';

const StartPage = () => {

    const buttonToMainData = {
        butName: 'Know more',
        butHeight: '40px',
        butWidth: '127px',
        pathToName: '/main',
    }

    const photoBoxData = {
        image: avatar,
        title: 'John Doe',
        occupation: 'Programmer. Creative. Innovator',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
    }

    

    return(
        <section className='start-page-section'>
            <div className='start-page-section__layer'>
                <PhotoBox avatar={photoBoxData.image} name={photoBoxData.title} profession={photoBoxData.occupation} description={photoBoxData.description} />
                <CustomLink path={buttonToMainData.pathToName} children={<Button height={buttonToMainData.butHeight} width={buttonToMainData.butWidth} buttonName={buttonToMainData.butName}/>} />
            </div>
        </section>
    )
}

export default StartPage