import React from 'react'
import styled from "styled-components"
import {FaFacebookF,
	FaTwitter,
	FaPinterest,
	FaInstagram,
	FaYoutube,} from "react-icons/fa"
import { Link } from 'react-router-dom'
import LogoImage from "../img/logo.png";
import FooterBg from "../img/footer-bg.jpg"

// Styles
const FooterContainer = styled.div`
    background-image: url(${FooterBg});
    background-position: center;
    background-size: cover;
    color: #fff;
    padding: 3rem;
    position: relative;
`
const FooterSignUp = styled.div`
    background-color: #6763fd;
    padding: 3rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -130px;
`
const SignUpContent = styled.div`
    width: 40%;
`
const Header = styled.p`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: .3rem;
`
const Desc = styled.p`
    font-size: 90%;
`
const SignUpForm = styled.form`
    background-color: #fff;
    height: fit-content;
    padding: .5rem 1rem;
    border-radius: 30px;
`
const Input = styled.input`
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0 1rem;
    font-size: 1rem;
`
const SignUpBtn = styled.button`
    background-color: #6763fd;
    border: none;
    padding: .5rem 1.5rem;
    border-radius: 20px;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
`
const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CopyrightGroup = styled.div`
    display: flex;
    align-items: center;
`
const HomeLink = styled(Link)`
    margin-right: 1rem;
`
const Logo = styled.img`
`
const CopyrightText = styled.p`
    font-size: 90%;
`
const FooterLinks = styled.div`
    
`
const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
`

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSignUp>
            <SignUpContent>
                <Header>Sign up for our newsletter</Header>
                <Desc>Subscribe to recieve info on our latest news and episodes</Desc>
            </SignUpContent>
            <SignUpForm>
                <Input type='email' placeholder='Your email address' />
                <SignUpBtn type='submit'>Subscribe</SignUpBtn>
            </SignUpForm>
        </FooterSignUp>
        <FooterContent>
            <CopyrightGroup>
                <HomeLink to='/'><Logo src={LogoImage} /></HomeLink>
                <CopyrightText>Copyright ©2022 All rights reserved</CopyrightText>
            </CopyrightGroup>
            <FooterLinks>
                <FooterLink to='/'><FaFacebookF /></FooterLink>
                <FooterLink to='/'><FaTwitter /></FooterLink>
                <FooterLink to='/'><FaPinterest /></FooterLink>
                <FooterLink to='/'><FaInstagram /></FooterLink>
                <FooterLink to='/'><FaYoutube /></FooterLink>
            </FooterLinks>
        </FooterContent>
    </FooterContainer>
  )
}

export default Footer