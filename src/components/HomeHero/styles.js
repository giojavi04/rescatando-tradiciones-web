import styled from "styled-components"
import tw from "twin.macro"

export const Hero = styled.div`
background-image: radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0), rgba(135, 135, 135, 0.10) 99%);
  ${tw`w-full`};
`

export const Section = styled.section`
  ${tw`w-full container mx-auto pt-20 pb-40`}
`