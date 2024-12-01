import React from 'react'
import './ShopComp.css'
import ShopItem from '../shopItem/ShopItem'
import shop1 from '../../assets/shop1.png'
import shop2 from '../../assets/shop2.png'
import shop3 from '../../assets/shop3.png'
import shop4 from '../../assets/shop4.png'
import shop5 from '../../assets/shop5.png'
import shop6 from '../../assets/shop6.png'
import shop7 from '../../assets/shop7.png'
import shop8 from '../../assets/shop8.png'
import shop9 from '../../assets/shop9.png'
import shop10 from '../../assets/shop10.png'
import shop11 from '../../assets/shop11.png'
import shop12 from '../../assets/shop12.png'

const ShopComp = () => {
    return (
        <>
            <div className='shopComp-container'>
                <div className='shopComp'>
                    <ShopItem id={1} image={shop1} title='T-Shirt' price='50$' description='Abraçe a ousadia: confiança e conforto em cada peça!' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={2} image={shop2} title='Bag' price='100$' description='Assuma sua jornada: bolsas duráveis para o sucesso!' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={3} image={shop3} title='Watch' price='150$' description='Aproveite cada momento: faça o tempo trabalhar para você!' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={4} image={shop4} title='Shoes' price='200$' description='Eleve o seu jogo: libere confiança a cada passo!' />
                </div>

                <div className='shopComp'>
                    <ShopItem id={5} image={shop5} title='Mouse' price='100$' description='Dispositivo versátil para navegação e controle precisos.' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={6} image={shop6} title='Cap' price='50$' description='Chapéu estiloso para proteção solar e moda.' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={7} image={shop7} title='Jacket' price='150$' description='Uma peça externa estilosa para calor e conforto.' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={8} image={shop8} title='Stiker' price='50$' description='Adesivo para personalização e expressão criativa.' />
                </div>

                <div className='shopComp'>
                    <ShopItem id={9} image={shop9} title='Rubik’s Cubes' price='50$' description='Brinquedo desafiador com peças coloridas e giratórias' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={10} image={shop10} title='Drones' price='500$' description='Aeronaves remotas para fotografia aérea.' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={11} image={shop11} title='LED Desk Lamps' price='300$' description='Lâmpada de mesa LED eficiente, ajustável, moderna.' />
                </div>
                <div className='shopComp'>
                    <ShopItem id={12} image={shop12} title='Cups' price='100$' description='Copos duráveis e estilosos para o dia a dia.' />
                </div>
            </div>
        </>
    )
}

export default ShopComp
