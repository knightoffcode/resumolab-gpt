import React from 'react'

import { FaSearch, FaAngleDown } from 'react-icons/fa'
import { BiUserCircle, BiMapPin, BiSearch } from 'react-icons/bi'
import { IoMdLogOut } from 'react-icons/io'
import { FiMapPin, FiGlobe, FiDollarSign } from 'react-icons/fi'
import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiKnockedOutStars, GiStarSwirl, GiGalaxy } from 'react-icons/gi'
import { GrUpdate, GrMenu } from 'react-icons/gr'

/**
 *
 * @returns
 */

function Header() {

    const menuPages = [
        {
            id: '01',
            page: 'Home',
            url: '/',
            subPages: [
                {
                    id: null,
                    name: null,
                    url: null
                }
            ]
        },
        {
            id: '02',
            page: 'Home',
            url: '/',
            subPages: [
                {
                    id: '021',
                    name: 'Page 01',
                    url: '/021'
                }
            ]
        },
        {
            id: '03',
            page: 'Home',
            url: '/',
            subPages: [
                {
                    id: '031',
                    name: 'Page 03',
                    url: '/031'
                }
            ]
        }
    ]
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <ul className='header__top'>
                    <li>
                        <a
                            className='header__link header__link--top header__link--top--first'
                            href=''
                        >
                            Powered by
                        </a>
                    </li>
                    <li>
                        <FiMapPin className='header__top__icon' />
                        <select className='header__select'>
                            <option>USA</option>
                        </select>
                    </li>
                    <li>
                        <FiGlobe className='header__top__icon' />
                        <select className='header__select'>
                            <option>ENG</option>
                        </select>
                    </li>
                    <li>
                        <FiDollarSign className='header__top__icon' />
                        <select className='header__select'>
                            <option>USD</option>
                        </select>
                    </li>
                    <li>
                        <a className='header__link header__link--top' href=''>
                            Customer service
                        </a>
                    </li>
                    <li>
                        <a className='header__link header__link--top' href=''>
                            Sell on Vega
                        </a>
                    </li>
                </ul>
                <div className='header__bottom'>
                    <div className='header__logo'>
                        <span className='header__logo__icon'>{/* Vega Retailers */}</span>
                        <h1 className='header__logo__title'>Vega retailers</h1>
                    </div>
                    <nav className='header__menu'>
                        <button className='header__menu__cep'>
                            <BiMapPin className='header__link__icon' />
                            Informe seu CEP
                        </button>
                        <ul className='header__menu__list'>
                            <div className='header__menu__item'>
                                <li className='header__item'>
                                    <a
                                        href='{page.url}'
                                        className='header__link header__link--all'
                                    >
                                        <GrMenu className='header__link__icon' />
                                        Ver todas as categorias
                                    </a>
                                </li>
                                <div className='header__submenu'>
                                    <ul className='header__submenu__list'>
                                        <li className='header__submenu__item'>
                                            <a
                                                className='header__submenu__anchor'
                                                href='{subpage.url}'
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {menuPages.map((page, index) => (
                                <div key={index} className='header__menu__item'>
                                    <li className='header__item'>
                                        <a href={page.url} className='header__link'>
                                            {/* <FaAngleDown className="header__link__icon" /> */}
                                            {page.page}
                                        </a>
                                    </li>
                                    {page.subPages
                                        ? page.subPages.map((subpage, subIndex) => (
                                            <div className='header__submenu' key={subIndex}>
                                                <ul className='header__submenu__list'>
                                                    <li className='header__submenu__item'>
                                                        <a
                                                            className='header__submenu__anchor'
                                                            href={subpage.url}
                                                        >
                                                            {subpage.name}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        ))
                                        : null}
                                </div>
                            ))}
                        </ul>
                        <a className='header__menu__recent'>
                            <GrUpdate />
                            Recém vistos
                        </a>
                    </nav>
                    <nav className='header__nav'>
                        <ul className='header__list'>
                            {/* <li className="header__item header__item--user">
                                <a href="/contact" className="header__link header__link--phone">
                                +55 11 9999 9999
                                <span>
                                support 24/7
                                </span>
                                </a>
                            </li> */}
                            <li className='header__item header__item--user'>
                                <div className='header__search'>
                                    <input
                                        type='text'
                                        className='header__input'
                                        placeholder='Digite sua busca'
                                    />
                                </div>
                                <a href='/contact' className='header__link header__link--user'>
                                    <BiSearch className='header__link__icon header__link__icon--user' />
                                </a>
                            </li>
                            <li className='header__item header__item--user'>
                                <a href='/contact' className='header__link header__link--user'>
                                    <BiUserCircle className='header__link__icon header__link__icon--user' />
                                </a>
                            </li>
                            <li className='header__item header__item--user'>
                                <a href='/about' className='header__link header__link--user'>
                                    <IoMdLogOut className='header__link__icon header__link__icon--user' />
                                </a>
                            </li>
                            <li className='header__item header__item--user'>
                                <a href='/cart' className='header__link header__link--user'>
                                    <AiOutlineShoppingCart className='header__link__icon header__link__icon--user' />
                                </a>
                            </li>
                        </ul>
                        <button className='header__menumobile'>
                            <CiMenuBurger />
                        </button>
                    </nav>
                </div>

                <div className='header__cta'></div>
            </div>
        </header>
    )
}

export default Header
