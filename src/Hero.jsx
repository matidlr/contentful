import Herosvg from './assets/hero.svg'

export default function Hero() {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
              <h1>Contenful CMS</h1>
              <p>
              Since December 2022, the federal watchdog has been probing allegations
               that Musk ordered employees to give a group of outside writers “full 
               access to everything,” prompting concerns that the company was out of 
               compliance with a settlement that puts tight controls on users’ data. 
               Musk gave directives that ran afoul of the order, but veteran Twitter 
               employees intervened and prevented the writers
              </p>
            </div>
            <div className="img-container">
              <img src={Herosvg} alt=''/>
            </div>
        </div>
    </section>
  )
}
