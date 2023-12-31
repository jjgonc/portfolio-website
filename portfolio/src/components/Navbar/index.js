import { Link as LinkR } from "react-router-dom";
import React from "react";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";



const Nav = styled.nav`
  background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 30%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;


const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.a`
border: 1.8px solid ${({ theme }) => theme.primary};
justify-content: center;
display: flex;
align-items: center;
height: 70%;
border-radius: 20px;
color: ${({ theme }) => theme.primary};
cursor: pointer;
padding: 0 20px;
font-weight: 500;
text-decoration: none;
font-size: 16px;
transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};     
  }
  @media screen and (max-width: 768px) { 
  font-size: 14px;
  }
`;

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  display-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light+99};
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
`;


const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;



const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>José João</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => { setIsOpen(!isOpen) }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          {/* <NavLink href='#education'>Education</NavLink> */}
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileMenuLinks href="#about" onClick={() => {setIsOpen(!isOpen)}}>About</MobileMenuLinks>
            <MobileMenuLinks href='#skills' onClick={() => {setIsOpen(!isOpen)}}>Skills</MobileMenuLinks>
            <MobileMenuLinks href='#experience' onClick={() => {setIsOpen(!isOpen)}}>Experience</MobileMenuLinks>
            <MobileMenuLinks href='#projects' onClick={() => {setIsOpen(!isOpen)}}>Projects</MobileMenuLinks>
            {/* <MobileMenuLinks href='#education' onClick={() => {setIsOpen(!isOpen)}}>Education</MobileMenuLinks> */}
            <GithubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GithubButton>
          </MobileMenu>
        }
      </NavContainer>
    </Nav>
  )
}

export default Navbar;