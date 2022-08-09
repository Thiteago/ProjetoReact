import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Card} from '../components/Card';



export function Promocoes(){
    return (
        <>
            <div className="main-comments">
                <div className="slider"> 
                    <OwlCarousel
                    loop
                    >
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}