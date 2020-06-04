import { Link } from "gatsby"
import React from "react"
import Image from "../Image"
import {
  Header as HeaderElement,
  HeaderContainer,
  HeaderLogoContainer,
  HeaderBtnMobile,
  HeaderDescriptionContainer,
  HeaderNav,
  HeaderNavUl,
} from "./styles"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <HeaderElement>
    <HeaderContainer>
      <HeaderLogoContainer>
        <Link className="w-10 lg:w-40 lg:mr-6" to="/">
          <Image
            nameImage="logo-rescatando-tradiciones.png"
            alt="Rescatando tradiciones"
          />
        </Link>
      </HeaderLogoContainer>

      <HeaderBtnMobile>
        <button
          id="nav-toggle"
          className="flex items-center p-1 text-rt-secondary"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </HeaderBtnMobile>

      <HeaderDescriptionContainer>
        <HeaderNav id="nav-content">
          <HeaderNavUl>
            <li>
              <a className="inline-block w-full py-6 px-4 lg:py-2" href="#">
                Nosotros
              </a>
            </li>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            <li>
              <a className="inline-block w-full py-6 px-4 lg:py-2" href="#">
                Grupos
              </a>
            </li>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            <li>
              <a className="inline-block w-full py-6 px-4 lg:py-2" href="#">
                Eventos
              </a>
            </li>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            <li>
              <a className="inline-block w-full py-6 px-4 lg:py-2" href="#">
                Contacto
              </a>
            </li>
          </HeaderNavUl>
        </HeaderNav>
        <div className="w-full">
          <div className="flex items-center">
            <h5 className="flex-initial mr-2 italic font-light text-xl md:text-2xl">
              Colectivo
            </h5>
            <hr className="flex-auto border-b border-rt-primary my-0 py-0" />
          </div>
          <div className="text-center mb-4 mt-1">
            <h2 className="text-rt-primary font-black text-3xl md:text-5xl lg:text-6xl">
              {siteTitle}
            </h2>
          </div>
          <hr className="border-rt-primary my-0 py-0" />
          <div className="text-right my-4">
            <h4 className="text-rt-secondary italic font-light text-2xl md:text-3xl pr-2">
              Confraternidad y Tradición
            </h4>
          </div>
          <hr className="border-rt-primary my-0 py-0" />
        </div>
      </HeaderDescriptionContainer>
    </HeaderContainer>
  </HeaderElement>
)

export default Header
