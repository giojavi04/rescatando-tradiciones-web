import styled from "styled-components"
import tw from "twin.macro"

export const Header = styled.header`
  ${tw`w-full z-30 top-0`};
`

export const HeaderContainer = styled.div`
  ${tw`w-full container mx-auto flex flex-wrap items-center justify-between mt-0 lg:pt-10`}
`

export const HeaderLogoContainer = styled.div`
  ${tw`pl-4 lg:pl-0 flex items-center my-2`};
`

export const HeaderBtnMobile = styled.div`
  ${tw`block lg:hidden pr-4`};
`
export const HeaderDescriptionContainer = styled.div`
  ${tw`w-full flex-col lg:w-auto lg:flex lg:flex-auto lg:items-center px-2 py-4 lg:py-0`};
`

export const HeaderNav = styled.nav`
  ${tw`w-full bg-gray-900 hidden z-20 lg:bg-transparent lg:flex lg:items-center lg:-mb-5`};
`
export const HeaderNavUl = styled.ul`
  ${tw`text-white lg:text-rt-secondary list-reset lg:flex justify-end flex-1 items-center`};
`