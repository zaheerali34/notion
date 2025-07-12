import cursor from '../../assets/cursor.avif'
import OpenAI from '../../assets/OpenAI-black-wordmark-cropped.avif'
import Perplexity from '../../assets/Perplexity_AI_logo.svg.png'
import vercel from '../../assets/vercel-logotype-light.svg'
import volvo from '../../assets/volvo.avif'
import Figma from '../../assets/Figma-logo-color.svg'
import Headspace from '../../assets/Headspace-logo-color.svg'
import ramp from '../../assets/ramp.avif'

function Logo() {
  return (
    <div className="w-full flex items-center justify-between py-4 px-8 mt-8 max-xl:justify-center max-xl:flex-wrap max-xl:gap-5">
      <img src={cursor} alt="" className='w-[100px]'/>
      <img src={OpenAI} alt="" className='w-[100px]'/>
      <img src={Perplexity} alt=""className='w-[100px]'/>
      <img src={vercel} alt="" className='w-[100px]'/>
      <img src={volvo} alt="" className='w-[100px]'/>
      <img src={Figma} alt="" className='w-[100px]'/>
      <img src={Headspace} alt="" className='w-[100px]'/>
      <img src={ramp} alt="" className='w-[100px]'/>
    </div>
  )
}

export default Logo