import React, { useEffect } from 'react';
import Swiper from 'swiper';
import './swiper-bundle.css'
function ThemeToggler() {
    useEffect(() => {
        const handleMenuClick = () => {
            const menu = document.querySelector("#menu-bars");
            const navbar = document.querySelector(".navbar");
            if (menu && navbar) {
                menu.classList.toggle("fa-times");
                navbar.classList.toggle("active");
            }
        };

        const handleToggleClick = () => {
            const themeToggler = document.querySelector(".theme-toggler");
            if (themeToggler) {
                themeToggler.classList.toggle("active");
            }
        };

        const handleScroll = () => {
            const menu = document.querySelector("#menu-bars");
            const navbar = document.querySelector(".navbar");
            const themeToggler = document.querySelector(".theme-toggler");
            if (menu && navbar && themeToggler) {
                menu.classList.remove("fa-times");
                navbar.classList.remove("active");
                themeToggler.classList.remove("active");
            }
        };

        const handleThemeButtonClick = (btn) => {
            if (btn) {
                btn.onclick = () => {
                    let color = btn.style.background;
                    document.documentElement.style.setProperty("--theme-color", color);
                };
            }
        };

        const homeSwiper = new Swiper(".home-swiper", {
            direction: 'horizontal',
            loop: true,
            slidesPerView: '8', 
            spaceBetween: 20,
        });

        const reviewSwiper = new Swiper(".review-swiper", {
            direction: 'horizontal',
            loop: false,
            slidesPerView: '3',
            spaceBetween: 20,
        });

        const themeButtons = document.querySelectorAll(".theme-toggler .theme-btn");
        themeButtons.forEach(handleThemeButtonClick);

        window.addEventListener("scroll", handleScroll);
        document.querySelector("#menu-bars").addEventListener("click", handleMenuClick);
        document.querySelector(".toggle-btn").addEventListener("click", handleToggleClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.querySelector("#menu-bars").removeEventListener("click", handleMenuClick);
            document.querySelector(".toggle-btn").removeEventListener("click", handleToggleClick);
        };
    }, []);

    return (
        <div>
            <div className="theme-toggler">
                <div className="toggle-btn">
                    <img className="toggle-btn_img" src="src/composants/officielaccueil/img/uil--setting.svg" alt=""/>  
                </div>
                <h3>Choisir la couleur</h3>
                <div className="buttons">
                    <div className="theme-btn" style={{ background: '#ccff33' }}></div>
                    <div className="theme-btn" style={{ background: '#d35400' }}></div>
                    <div className="theme-btn" style={{ background: '#f39c12' }}></div>
                    <div className="theme-btn" style={{ background: '#1abc9c' }}></div>
                    <div className="theme-btn" style={{ background: '#3498db' }}></div>
                    <div className="theme-btn" style={{ background: '#9b59b6' }}></div>
                </div>
            </div>
        </div>
    );
}

export default ThemeToggler;
