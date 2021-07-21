import '../styles/testemunhos.scss'
import avatar from '../assets/img/cliente-av-fit.png'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export function Testemunhos(){
    return (
        <>
            <div className="main-comments">
                <h1 className="main-title">Depoimentos</h1>
                <div className="slider"> 
                    <OwlCarousel
                    loop
                    autoplay
                    autoplayHoverPause
                    >
                    <div className="card">
                        <div className="img">
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div className="content">
                            <div className="title">Titulo 1</div>
                            <p>qjweowqjeijoiasjeoiajoiajeioajeoaseoiseioasjeoiasjeiosajeoa</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img">
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div className="content">
                            <div className="title">Titulo 2</div>
                            <p>qjweowqjeijoiasjeoiajoiajeioajeoaseoiseioasjeoiasjeiosajeoa</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img">
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div className="content">
                            <div className="title">Titulo 3</div>
                            <p>qjweowqjeijoiasjeoiajoiajeioajeoaseoiseioasjeoiasjeiosajeoa</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img">
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div className="content">
                            <div className="title">Titulo 4</div>
                            <p>qjweowqjeijoiasjeoiajoiajeioajeoaseoiseioasjeoiasjeiosajeoa</p>
                        </div>
                    </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}