import Box from '../../components/Box/Box'
import Contacts from '../../components/Contacts/Contacts'
import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import Feedback from '../../components/Feedback/Feedback'
import { Element } from 'react-scroll'
import feedBackAvatar from '../../assets/MainPage/userfeedback.png'
import './MainPage.scss'
import Panel from '../../components/Panel/Panel'
import Portfolio from '../../components/Portfolio/Portfolio'

const MainPage = () => {

    const aboutMeBoxData = {
        title: 'About me',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque'
    }

    const educationTitle = 'Education'
    const timeLineData = [{ "id": 0, "date": 2001, "title": "Title 0", "text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n" }, {"id": 1, "date": 2000, "title": "Title 1", "text": "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n" }, {"id": 2, "date": 2012, "title": "Title 2", "text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n" } ]

    const experienceTitle = 'Experience'
    const experienceData = [
            {
              id: 0,
              date: '2013-2014', 
              info: {
                company: 'Google',
                job: 'Front-end developer / php programmer',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
              }
            },
            {
              id: 1,
              date: '2012', 
              info: {
                company: 'Twitter',
                job: 'Web developer',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
              }
            }
        ]

    const contactsTitle = "Contacts"
    const contactsData = {
      phoneNum: "500 342 242",
      email: "office@kamsolutions.pl",
      twitter: {
        title: "Twitter",
        link: "https://twitter.com/?lang=en"
      },
      facebook: {
        title: "Facebook",
        link: "https://www.facebook.com/"
      },
      skype: {
        title: "Skype",
        link: "https://www.skype.com/en/",
      }
    }

    const feedbackTitle = "Feedbacks"
    const feedBackData = [ 
      { id: 0, feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ',
      reporter: { photoUrl: feedBackAvatar, name: 'John Doe', citeUrl: 'https://www.citeexample.com' } },
      { id: 1, feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ', 
      reporter: { photoUrl: feedBackAvatar, name: 'John Doe', citeUrl: 'https://www.citeexample.com' } } 
    ]

    const portfolioTitle = "Portfolio"
    

    return (
        <section className="main-page__section">
          <aside className='main-page__side'>
              <Panel data={'John Doe'} />
          </aside>
            <article className='main-page__section__main'>
              <Element id="about" >
                <Box  title={aboutMeBoxData.title} content={aboutMeBoxData.content} />
              </Element>
              <Element id="education">
                <Education title={educationTitle} timeLineData={timeLineData} />
              </Element>
              <Element id="experience">
                <Experience title={experienceTitle} data={experienceData} />
              </Element>
              <Element id='portfolio'>
                <Portfolio title={portfolioTitle} />
              </Element>
              <Element id="contact">
                <Contacts title={contactsTitle} data={contactsData} />
              </Element>
              <Element id="feedback">
                <Feedback title={feedbackTitle} feedbackData={feedBackData} />
              </Element>
            </article>
        </section>
    )
}

export default MainPage