import './subnav.css'
import {Link} from 'react-router-dom';


function subnav()
{
    return(
        <>
            <div className="sub-nav">

                <ul className='links'>
                    <li>
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        <Link to={"/categorypage/mobiles"}>Mobiles</Link>
                    </li>

                    <li>
                        <i className="fa-solid fa-gamepad"></i>
                        <Link to={"/categorypage/gaming"}>Gaming</Link> 
                    </li>

                    <li>
                        <i className="fa-solid fa-laptop"></i>
                        <Link to={"/categorypage/laptops"}>Laptops</Link> 
                    </li>

                    <li>
                        <i className="fa-solid fa-tv"></i>
                        <Link to={'/categorypage/tv&entertainment'}>TV & Entertainment</Link>
                    </li>

                    <li>
                        <i className="fa-solid fa-camera-retro"></i>
                        <Link to={'/categorypage/cameras'}>Cameras</Link>
                    </li>

                    <li>
                        <i className="fa-solid fa-house-chimney"></i>
                        <Link to={'/categorypage/homeAppliances'}>Home Appliances</Link>
                    </li>

                    <li>
                        <i className="fa-solid fa-headphones"></i>
                        <Link to={'/categorypage/audio'}>Audio</Link>
                    </li>

                </ul> 

            </div>
              
        </>
    )
}
export default subnav