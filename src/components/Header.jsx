import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Logo from './Logo';

export default function Header() {
    return (
        <Navigation
            logo={<Logo width={32} height={32} />}
            links={[
                <Link key={1} to='/'>About Me</Link>,
                <Link key={2} to='/portfolio'>Portfolio</Link>,
                <Link key={3} to='/resume'>Resume</Link>,
                <Link key={4} to='/contact'>Contact</Link>,
            ]}
        />
    );
}