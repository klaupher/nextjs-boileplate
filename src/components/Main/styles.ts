'use client'
import styled from "styled-components";
import { TbSunFilled, TbMoonFilled} from 'react-icons/tb';

export const Wrapper = styled.div`
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;

  @media (min-width: 40em) {
      padding: 6rem;
  }
`

export const Logo = styled.img`
  width: 25rem;
  margin: 2rem;
`
export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--headingcolor);
`
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: var(--headingcolor);
`
export const Illustation = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%)
`

export const ThemeToggleContainer = styled.div`
  display: flex;
  align-self: flex-end
`

export const SunIcon = styled(TbSunFilled)`
  cursor: pointer
`

export const MoonIcon = styled(TbMoonFilled)`
  cursor: pointer
`
