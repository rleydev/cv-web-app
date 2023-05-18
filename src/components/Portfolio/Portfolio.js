import './Portfolio.scss'
import Title from '../Title/Title'
import portfImg1 from '../../assets/MainPage/port1.png'
import portfImg2 from '../../assets/MainPage/port2.png'
import { useState} from 'react'

const Portfolio = ({title}) => {

    const [filterType, setFilterType] = useState('all');
    const [showAnimation, setShowAnimation] = useState(false);

    const portfolioData = [
        {
            id: 0,
            image: portfImg1,
            tag: 'code',
            info: {
                title: 'Some text',
                description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
                linkName: 'View source',
                link: 'https://github.com/rleydev/'
            }
        },
        {
            id: 1,
            image: portfImg2,
            tag: 'ui',
            info: {
                title: 'Some text',
                description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
                linkName: 'View source',
                link: 'https://github.com/rleydev/'
            }
        },
        {
            id: 2,
            image: portfImg1,
            tag: 'code',
            info: {
                title: 'Some text',
                description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
                linkName: 'View source',
                link: 'https://github.com/rleydev/'
            }
        },
        {
            id: 3,
            image: portfImg2,
            tag: 'ui',
            info: {
                title: 'Some text',
                description: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis',
                linkName: 'View source',
                link: 'https://github.com/rleydev/'
            }
        }
    ]

    const filteredData = filterType === 'code'
      ? portfolioData.filter((item) => item.id % 2 !== 0)
      : filterType === 'ui'
      ? portfolioData.filter((item) => item.id % 2 === 0)
      : portfolioData;

    const handleFilterButtonClick = (type) => {
        setFilterType(type);
        setShowAnimation(true);

        setTimeout(() => {
            setShowAnimation(false);
        }, 2000);
    };

// useEffect(() => {

// }, [setShowAnimation])

    return (
        <section className='portfolio'>
            <Title title={title} />
            <article className='portfolio__container'>
                <div className='portfolio__container__options'>
                    <button className={filterType === 'all' ? `portfolio__container__options--all portfolio-button--active` : `portfolio__container__options--all`}
                    onClick={() => handleFilterButtonClick('all')}>
                        All
                    </button>
                    <p>/</p>
                    <button className={filterType === 'code' ? `portfolio__container__options--code portfolio-button--active` : `portfolio__container__options--all`}
                    onClick={() => handleFilterButtonClick('code')}>
                        Code
                    </button>
                    <p>/</p>

                    <button className={filterType === 'ui' ? `portfolio__container__options--ui portfolio-button--active` : `portfolio__container__options--all`}
                    onClick={() => handleFilterButtonClick('ui')}>
                        UI
                    </button>
     
                </div>


                <div className={`portfolio__container__content-box`}>
                    {filteredData.map((item) => (
                        // <CSSTransition in={showAnimation} timeout={2000} classNames="image-animation" unmountOnExit> 
                        <div key={item.id} className={`portfolio__container__content-box--item`}>
                            <img className={`portfolio__container__content-box--img ${
                            showAnimation ? "animate-portfolio" : ""
                        }`} src={item.image} alt={item.info.title} />
                            <div className='portfolio-info'>
                                <h4>{item.info.title}</h4>
                                <p>{item.info.description}</p>
                                <a href={item.info.link}>{item.info.linkName}</a>
                            </div>
                            
                        </div>
                        // </CSSTransition>
     
                    ))}
                </div>
                
            </article>
        </section>
    )
}


// ${filterType !== 'all' && filterType !== item.tag ? 'hide-image' : ""}
// ${filterType && filterType !== 'all' && filterType !== item.tag ? 'image-animation' : ''}

export default Portfolio