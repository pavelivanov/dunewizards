import React from 'react'
import { Assistant } from '@next/font/google'
import Image from 'next/image'
import cx from 'clsx'


const font = Assistant({ subsets: [ 'latin' ], weight: [ '400', '500', '600' ] })

type PreviewProps = {
  image: string
  imageClassName: string
  text: string
}

function Preview({ image, imageClassName, text }: PreviewProps) {

  return (
    <div className="relative">
      <div
        className={cx('relative md:absolute z-20 md:w-[540px] mx-3 mb-3 md:m-0 p-6 lg:p-8 text-xl lg:text-2xl text-[#191944] font-medium bg-[#f1603f] shadow-2xl', imageClassName)}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <Image className="w-full max-w-[1200px]" src={image} width="1648" height="1047" quality="100" alt="" />
    </div>
  )
}

export default function Home() {
  return (
    <main className={font.className}>
      <div className="container pt-20 md:pt-32">
        <div className="flex flex-col items-center px-4 text-center">
          <div className="text-6xl lg:text-7xl text-[#292968] font-medium">
            Make{' '}
            <b className="relative mx-2">
              <span className="relative z-20">Wizards</span>
              <Image className="absolute -bottom-5 left-3" src="/images/star.svg" width="24" height="24" alt="" />
              <Image className="absolute -top-6 right-6" src="/images/star.svg" width="18" height="18" alt="" />
              <Image className="absolute -top-6 -right-4 md:-right-10" src="/images/star.svg" width="40" height="40" alt="" />
              <div className="absolute top-4 bottom-0 -left-[6%] z-10 w-[110%] h-[52%] my-auto bg-[#f1603f] -rotate-[1.7deg]" />
            </b>{' '}
            great&nbsp;again
          </div>
          <div className="mt-7 text-xl md:text-2xl lg:text-3xl text-[#292968]">
            An easy way to upgrade your <b className="mx-1">Dune&nbsp;Analytics</b>&nbsp;experience
          </div>
          <a
            className="flex items-center mt-16 md:mt-24 py-3.5 px-8 bg-[#fff] rounded-full shadow-xl hover:scale-105 transition"
            href="https://chrome.google.com/webstore/detail/dune-pro-wizards/koapcfogemdhnfddhalbndagdkjfndjm?hl=en&authuser=0"
          >
            <Image className="mr-4" src="/images/chrome.svg" width="28" height="28" alt="" />
            <span className="-mt-0.5 text-xl md:text-2xl text-[#f1603f] font-bold">Add it on Chrome</span>
          </a>
        </div>
      </div>
      <div className="container mt-20 md:mt-36 space-y-8 md:space-y-0">
        <Preview
          image="/images/1.jpg"
          imageClassName="md:-top-1 md:right-20 lg:right-48 md:rotate-[1.7deg]"
          text="Gone are the days of squinting at a small query editor window - Dune Pro Wizards <b>makes your query editor huge</b>, filling your whole screen with plenty of space to work with."
        />
        <Preview
          image="/images/2.jpg"
          imageClassName="md:top-56 md:-right-1 md:rotate-[1.3deg]"
          text="But that's not all - with the click of a button, you can <b>view your query results in a separate modal window</b>, complete with your chosen settings. No more switching back and forth between tabs or losing your work!"
        />
      </div>
      <div className="container flex items-center justify-between pt-10 px-6 md:px-10 pb-10 md:pb-14">
        <div className="hidden md:block w-[80px]" />
        <div>
          <div className="text-lg text-[#292968] text-center opacity-50">
            Make <b>Wizards</b> great again!
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            className="opacity-40 hover:opacity-70 transition duration-300"
            href="https://twitter.com/pavelorso"
            target="_blank"
          >
            <Image src="/images/twitter.svg" width="28" height="28" alt="" />
          </a>
          <a
            className="opacity-40 hover:opacity-70 transition duration-300"
            href="mailto:grammka@gmail.com"
          >
            <Image src="/images/mail.svg" width="24" height="24" alt="" />
          </a>
        </div>
      </div>
    </main>
  )
}
