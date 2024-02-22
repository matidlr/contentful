import Herosvg from './assets/hero.svg'

export default function Hero() {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
              <h1>Contenful CMS</h1>
              <p>
              This is all the projects that i have been doing the las months. I will continue learning and adding new projects all the time, becouse i have a pasion for learning and programming. I hope you like my projects.
              </p>
            </div>
            <div className="img-container">
              <img src={Herosvg} alt=''/>
            </div>
        </div>
    </section>
  )
}
