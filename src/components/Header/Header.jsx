import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import IMG1 from '../../logo/blog-1.jpg'

const Header = () => {
  return (
    <>
        <div className="top-headerc">
            <div className="row">
                <div className="header__icons col-md-6">


                    <i className="fab fa-facebook">{BsFacebook}</i>
                    <i className="fab fa-instagram" style={{}}></i>
                    <i className="fab fa-twitter" ></i>
                </div>
                <div className="header__icons col-md-4">
                    <p style={{ marginBottom: '0px' }} className="header_para">Offers: Buy 1 Gets 2 free</p>
                </div>
                <div className="header__icons col-md-2">
                    <img style={{ width: '40px', borderRadius: '7px', float: 'right' }} src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="india-flag" />
                </div>
            </div>
        </div>
        <div className="mid-header-nav" style={{ height: '50px' }}>
            <div className="row" style={{ width: '100%' }}>
                <div className="head__names-1 col-md-4">
                    <ul className="head_name-ul">
                        <li className="head_name-li">
                            <a className="head_name-a active" href="">Women</a>
                        </li>
                        <li className="head_name-li">
                            <a className="head_name-a" href="">Men</a>
                        </li>
                        <li className="head_name-li">
                            <a className="head_name-a" href="">Kids</a>
                        </li>
                        <li className="head_name-li">
                            <a className="head_name-a" href="">Home & living</a>
                        </li>
                    </ul>
                </div>
                <div className="head__names-2 col-md-3">
                    <img style={{ width: '200px', margin: 'auto', padding: '5px 0px', display: 'block' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5dO4DWMwI-myOTaQcehvuSF9dM4cpJTQCr163Ru4&s" alt="india-flag" />
                </div>
                <div className="head__names-3 col-md-3">
                    <div className="head_search">
                        <form className="form-button_search" action="" style={{ margin: 'auto', maxWidth: '300px' }}>
                            <input className="input_search" type="text" placeholder="" name="search2" />
                            <button className="button_search" type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div className="head__names-4 col-md-2">
                    <div className="head_icons-snd">
                        <i className="far fa-heart" style={{ marginRight: '15px' }}></i>
                        <i className="far fa-user-circle" style={{ marginRight: '15px' }}></i>
                        <i className="far fa-bell" style={{ marginRight: '15px' }}></i>
                        <i className="fa fa-shopping-cart" style={{ marginRight: '15px' }}></i>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="lst-header-nav" style={{ height: '20px' }}>
            <div className="head__p-catgy-1 col-md-12">
                <ul className="head_p-catgy-ul">
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>see all</strong></a>
                    </li>
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>salwar kameez</strong></a>
                    </li>
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>kurtis</strong></a>
                    </li>
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>pret</strong></a>
                    </li>
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>blouses</strong></a>
                    </li>
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>wedding</strong></a>
                    </li>
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>Accessories</strong></a>
                    </li>
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>unstitched</strong></a>
                    </li>
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>western</strong></a>
                    </li>
                    <li className="head_p-catgy-li">
                        <a className="head_p-catgy-a" href=""><strong>Sale</strong></a>
                    </li>
                </ul>
            </div>
        </div>
        <hr />

        {/* <div className="slider">
            <img src={IMG1} alt="" />
        </div> */}

    </>
  )
}

export default Header