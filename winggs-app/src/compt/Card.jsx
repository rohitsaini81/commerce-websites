import React from 'react'
import './css/Card.css'
import { Ask, CpuIcon, Gear, Laptop, Mobile, Wifi } from './Images'
function Card() {
    return (
        <div>
            <section className="articles">

                {
                    data.map((cards,key)=>(
                <ACard key={key} image={cards.image} title={cards.title} about={cards.about} />
                    ))
                }


                {/* <article>
                    <div className="article-wrapper">
                        <figure className='icon-padding-004'>
                            <img src={CpuIcon} alt="" />
                        </figure>
                        <div className="article-body">
                            <h2>IT Enabled Services</h2>
                            <p>Our It Services offers include diverse processes like finance, HR administration, telecommunication etc. WINGGS is notably a very renowned firm for IT services owing to the growing reputation and work ethic.
                            </p>
                            <a href="#" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article>

                    <div className="article-wrapper">
                        <figure className='icon-padding-004'>
                            <img src={Ask} alt="" />
                        </figure>
                        <div className="article-body">
                            <h2>Support Services</h2>
                            <p>
                                WINGGS is the leading IT network for outsourcing services, delivering innovative, performance oriented and customer support solutions all across the industrial segments. We aim to satisfy the requirements of all our global customers at best prices available. </p>
                            <a href="#" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>

                <article>

                    <div className="article-wrapper">
                        <figure className='icon-padding-004'>
                            <img src={Mobile} alt="" />
                        </figure>
                        <div className="article-body">
                            <h2>Mobile Application Development</h2>
                            <p>
                                WINGGS offers end-to-end Android and iOS mobile software development services. We aim to provide you with the best service, practical, versatile, and well-designed mobile apps, ensuring enhanced safety and smooth results.     </p>
                            <a href="#" className="read-more">
                                Read more <span className="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article> */}
            </section>
        </div>
    )
}

export default Card








const data =[
    {
        image:CpuIcon,
        title:"IT Enabled Services",
        about:"Our It Services offers include diverse processes like finance, HR administration, telecommunication etc. WINGGS is notably a very renowned firm for IT services owing to the growing reputation and work ethic."    
    },

    {
        image:Ask,
        title:"Support Services",
        about:"WINGGS is the leading IT network for outsourcing services, delivering innovative, performance oriented and customer support solutions all across the industrial segments. We aim to satisfy the requirements of all our global customers at best prices available."
    },

    {
    image:Mobile,
    title:"Mobile Application Development",
    about:"WINGGS offers end-to-end Android and iOS mobile software development services. We aim to provide you with the best service, practical, versatile, and well-designed mobile apps, ensuring enhanced safety and smooth results.",},



    {
        image:Laptop,
        title:"Website Designing",
        about:"At WINGGS, we make certain that your expectations are exceeded. We will assist you in gaining a competitive advantage in your sector and enhancing your company's overall profile, whether you only want to refresh the visual style of your brand or redesign the entire website. "
    },

    {
        image:Gear,
        title:"Software Development",
        about:"We link your target audience to your brand at WINGGS by bringing eye-catching designs to life. We are remarkably one of the prominent software companies recognised all around the globe. Therefore, we use top tools to design user-friendly software which will further support your business towards the automation path. "
    },

    {
        image:Wifi,
        title:"Digital Marketing",
        about:"Being the leading SEO Company we can notably uplift traffic towards your website. Therefore, we aim to increase the exposure of your overall leads, whether one wants to retain the current position or raise the level of organic traffic. Therefore, we aim in assisting and achieving your targets as our top priority. "
    }

]

function ACard(props) {
    console.log(props.title)
    return (
        <article>
            <div className="article-wrapper">
                <figure className='icon-padding-004'>
                    <img src={props.image} alt="" />
                </figure>
                <div className="article-body">
                    <h2>{props.title}</h2>
                    <p>{props.about}</p>
                    <a href="#" className="read-more">
                        Read more <span className="sr-only">about this is some title</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    )
}


