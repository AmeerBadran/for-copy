
import shap1 from '../assets/images/decor/hero-3-shape3.png'
import shap2 from '../assets/images/decor/hero-3-shape4.png'
import shap3 from '../assets/images/decor/shape-5-2.png'
import shap4 from '../assets/images/decor/shape-5-6.png'


import main_home from '../assets/images/January_life_style_working_08-removebg-preview.png'
import BouncingImage from '../components/atoms/BouncingImage'
import SocialLinks from '../components/molecule/SocialLinks'
import TypeAnimationComp from '../components/molecule/TypeAnimationComp'
import featuresData from '../constants/features'
import FeatureCard from '../components/molecule/FeatureCard'
import ServicesCard from '../components/molecule/servicesCard'
import { servicesCardData } from '../constants/servicesCardData'
import ProjectsCard from '../components/molecule/ProjectsCard'
export default function Home() {
  return (
    <div className='mx-auto min-h-screen'>
      <section className="min-h-screen w-full bg-my-color pt-24 text-white flex flex-col justify-center pb-10 px-5">
        <div className='relative max-w-[1400px] w-full mx-auto flex slg:flex-row flex-col justify-between items-center gap-3 slg:mt-24 2md:-mt-8 -mt-10'>
          <BouncingImage
            animationType="bouncey"
            duration={5}
            easing="easeInOut"
            className="absolute w-32 right-[10%] -top-20 slg:-top-32 lg:-top-24 hidden slg:block"
          >
            <img src={shap2} alt="decor" className='' />
          </BouncingImage>

          <BouncingImage
            animationType="rotate"
            duration={10}
            easing="linear"
            className="absolute left-24 -top-20 hidden slg:block"
          >
            <img src={shap3} alt="decor" className='' />
          </BouncingImage>

          <BouncingImage
            animationType="rotate"
            duration={10}
            easing="linear"
            className="absolute w-32 rounded-full left-3/4 -bottom-10  slg:left-1/3 slg:-bottom-20 overflow-hidden"
          >
            <img src={shap4} alt="decor" className='' />
          </BouncingImage>
          <div className='max-w-[600px] xl:max-w-[700px] flex flex-col gap-10 slg:border-l slg:text-start text-center py-10 mt-10'>

            <p className='text-3xl lg:text-4xl xl:text-5xl font-bold xl:leading-[1.7] lg:leading-[1.5] leading-[1.5] xl:h-[150px] md:h-[100px] mobile:h-[140px] h-auto '>
              مع <span className='text-sec-color'>طوّر</span>، نحقق لك النجاح الرقمي في &nbsp;
              <TypeAnimationComp />
            </p>
            <p className='text-sm lg:text-base xl:text-lg font-bold text-gray-200 leading-loose'>طوّر يساعدك في تصميم وتطوير مواقع إلكترونية تفاعلية ومتكاملة لتناسب احتياجاتك الرقمية.</p>
            <div className='relative'>
              <SocialLinks />
              <BouncingImage
                animationType="bouncex"
                duration={3}
                easing="linear"
                className="absolute w-32 right-32 bottom-3 "
              >
                <img src={shap1} alt="decor" className='rotate-180' />
              </BouncingImage>
            </div>
          </div>
          <div className='  flex max-w-[700px] mx-auto justify-center items-center'>
            <BouncingImage>

            </BouncingImage>
            <BouncingImage
              animationType="bouncey"
              duration={5}
              easing="easeInOut"
              className=""
            >
              <div className="relative rounded-[100px] z-10 w-11/12 aspect-square slg:size-[350px] lg:size-[450px] sxl:size-[500px] xl:size-[590px] shadow-out-shadow overflow-hidden flex justify-center items-center">
                <img src={main_home} alt="main_home" className="m-7 size-full" />
                <div className="shadow-inner-shadow rounded-[100px] absolute w-full h-full border-[10px] border-[#cce6e6]"></div>
              </div>
            </BouncingImage>
          </div>
        </div>
      </section>
      <section className='relative mb-20'>
        <div className='curved-edge absolute -z-10 w-full h-[70%] max-h-96 bg-my-color'></div>
        <div className='max-w-[1400px] mx-auto px-4 mobile:px-10 md:px-20 py-24'>
          <div className='grid  2md:grid-cols-2 xl:grid-cols-4 rounded-xl bg-teal-600 w-full text-white'>
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                imgSrc={feature.imgSrc}
                title={feature.title}
                description={feature.description}
                additionalClasses={feature.additionalClasses}
              />
            ))}
          </div>
        </div>
        <div className='max-w-[1400px] mx-auto px-4 mt-20 text-white overflow-hidden 2md:overflow-visible pb-12'>
          <div className='flex  flex-col items-center gap-10'>
            <p className='text-6xl font-black text-my-color'>خدماتنا <span className='text-sec-color'>المميزة</span></p>
            <p className='bg-teal-950 bg-opacity-80 w-fit px-5 py-1 rounded-xl'>نقدم حلولًا مبتكرة تلبي احتياجاتك وتفوق توقعاتك.</p>
          </div>
          <div className="grid 2md:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-16 mt-20">
            {servicesCardData.map((data) => (
              <ServicesCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-24 bg-gradient-to-t from-gray-100 from-90% to-white'>
        <div>

        </div>
        <div className='max-w-[1400px] xl:mx-auto grid 2md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-28 px-4 mt-20 text-white pr-14'>
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
        </div>
      </section>
    </div>
  )
}
