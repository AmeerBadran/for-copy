
import shap1 from '../assets/images/decor/hero-3-shape3.png'
import shap2 from '../assets/images/decor/hero-3-shape4.png'
import shap3 from '../assets/images/decor/shape-5-2.png'
import shap4 from '../assets/images/decor/shape-5-6.png'
import shap5 from '../assets/images/decor/sun-shadow-right.png'
import service1 from '../assets/images/ourSkills/02.png'
import service2 from '../assets/images/ourSkills/03.png'
import service3 from '../assets/images/ourSkills/Screenshot_2024-11-26_155755-removebg-preview.png'
import main_home from '../assets/images/January_life_style_working_08-removebg-preview.png'
import BouncingImage from '../components/atoms/BouncingImage'
import SocialLinks from '../components/molecule/SocialLinks'
import TypeAnimationComp from '../components/molecule/TypeAnimationComp'
import featuresData from '../constants/features'
import FeatureCard from '../components/molecule/FeatureCard'
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
        <div className='max-w-[1400px] mx-auto px-4 mt-20 text-white'>
          <div className='flex  flex-col items-center gap-10'>
            <p className='text-6xl font-black text-my-color'>خدماتنا <span className='text-sec-color'>المميزة</span></p>
            <p className='bg-teal-950 bg-opacity-80 w-fit px-5 py-1 rounded-xl text-white'>نقدم حلولًا مبتكرة تلبي احتياجاتك وتفوق توقعاتك.</p>
          </div>
          <div className='grid grid-cols-3 gap-10 mt-20'>
            <div className='relative main-div'>
              <div className=' absolute flex w-full flex-col justify-around items-center p-6 bg-gradient-to-b from-teal-950 to-sky-600 h-[590px] rounded-2xl shadow-xl shadow-gray-400 hover:z-10 my-back-animation'>
                hi
              </div>
              <div className='relative flex flex-col justify-around items-center p-6 bg-gradient-to-b from-teal-950 to-sky-600 h-[590px] rounded-2xl shadow-xl shadow-gray-400 my-animation'>
                <img src={shap5} alt='' className=' absolute top-0 right-0' />
                <p className='text-3xl font-bold'>التجارة الإلكترونية</p>
                <img src={service3} alt='' className='w-2/3' />
                <p className='text-center font-semibold'>نقدم خدمة تصميم وتطوير مواقع التجارة الإلكترونية المتكاملة التي تساعدك على عرض منتجاتك بسهولة وزيادة مبيعاتك عبر الإنترنت.</p>
              </div>
            </div>
            <div className='relative main-div'>
              <div className=' absolute flex w-full flex-col justify-around items-center p-6 bg-gradient-to-b from-orange-700 to-amber-500 h-[590px] rounded-2xl shadow-xl shadow-gray-400 hover:z-10 my-back-animation'>
                hi
              </div>
              <div className='relative flex flex-col justify-around items-center p-6 bg-gradient-to-b from-orange-700 to-amber-500 h-[590px] rounded-2xl shadow-xl shadow-gray-400 my-animation'>
                <img src={shap5} alt='' className=' absolute top-0 right-0' />
                <p className='text-3xl font-bold'>مشاريع تخرج </p>
                <img src={service1} alt='' className='' />
                <p className='text-center font-semibold'>نساعدك في تنفيذ مشروع التخرج باحترافية، مع شرح واضح لكل التفاصيل لضمان تميزك وفهمك الكامل.</p>
              </div>
            </div>
            <div className='relative main-div'>
              <div className=' absolute flex w-full flex-col justify-around items-center p-6 bg-gradient-to-b from-violet-900 to-blue-500 h-[590px] rounded-2xl shadow-xl shadow-gray-400 hover:z-10 my-back-animation'>
                hi
              </div>
              <div className='relative flex flex-col justify-around items-center p-6 bg-gradient-to-b from-violet-900 to-blue-500 h-[590px] rounded-2xl shadow-xl shadow-gray-400 my-animation'>
                <img src={shap5} alt='' className=' absolute top-0 right-0' />
                <p className='text-3xl font-bold'>نظم ادارة المشاريع</p>
                <img src={service2} alt='' className='' />
                <p className='text-center font-semibold'>نحن نقدم لك حلاً متكاملاً لإدارة مشاريعك بفعالية، من خلال أدوات مبتكرة تضمن تنظيم المهام وتعزيز التعاون لتحقيق النجاح.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
