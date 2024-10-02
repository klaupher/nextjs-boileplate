'use client'

import { useTheme } from "next-themes";
import * as S from './styles'

const Main = () => {
  const { resolvedTheme, setTheme } = useTheme();

  function handleThemeChange() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    }
    else {
      setTheme("dark")
    }
  }

  return (
  <S.Wrapper>
    <S.ThemeToggleContainer>
      <S.SunIcon 
        size={35}
        color={'white'}
        onClick={handleThemeChange}
        data-hide-on-theme='light'
      />
      <S.MoonIcon 
        size={35}
        color={'black'}
        onClick={handleThemeChange}
        data-hide-on-theme='dark'
      />
    </S.ThemeToggleContainer>
    <S.Logo src={resolvedTheme === 'dark' ? '/img/logo.svg' : '/img/logo-gh.svg'} alt='Imagem de um átomo e o texto React Avançado ao lado'/>
    <S.Title>React Avançado</S.Title>
    <S.Description>Typescript, ReactJS, NextJS e StyledComponents</S.Description>
    <S.Illustation src='/img/hero-illustration.svg' alt='Desenvolvedor de costas codificando' />
  </S.Wrapper>
  )
};

export default Main;
