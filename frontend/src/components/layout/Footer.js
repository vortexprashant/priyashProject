import React, { Fragment } from 'react'
import '../../stylesheet/Footer.css'

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer ">
                <div className="container bottom_border">
                    <div className="span8">
                    <div >
                        <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=naxal,kathmandu+(Vortex%20IT%20Solution%20Pvt.%20Ltd.)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                    </div>
                </div>
                <div className="container">

                    <p className="text-center"><span className="copyright">Copyright &copy;2021 | Designed  by </span><a href="#">PK Tech</a></p>

                    <ul className="social_footer_ul">

                        <li><a href="#" target="_blank"><i className="fa fa-facebook-f"></i></a></li>

                        <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>

                        <li><a href="#" target="_blank"><i className="fa fa-whatsapp"></i></a></li>

                        <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>

                    </ul>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
