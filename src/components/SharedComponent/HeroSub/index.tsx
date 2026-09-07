import React, { FC } from 'react'

interface HeroSubProps {
  title: string
}

const HeroSub: FC<HeroSubProps> = ({ title }) => {
  return (
    <section className="site-mist mt-[82px] border-b border-[#c6d3cb] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[86rem]">
        <h1 className="font-display max-w-4xl text-[clamp(3.3rem,5vw,5.8rem)] leading-[0.96] text-[#183b36]">
          {title}
        </h1>
      </div>
    </section>
  )
}

export default HeroSub
