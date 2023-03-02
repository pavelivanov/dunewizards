import React from 'react'
import { Assistant } from '@next/font/google'
import Image from 'next/image'
import cx from 'clsx'


const font = Assistant({ subsets: [ 'latin' ], weight: [ '400', '500', '600' ] })

type VideoProps = {
  src: string
}

function Video({ src }: VideoProps) {

  return (
    <div className="p-2 border border-gray-200 bg-white rounded-[28px] shadow-2xl">
      <video
        className="block w-full h-full object-cover object-center rounded-[24px]"
        src={src}
        loop
        autoPlay
        muted
        playsInline
      />
    </div>
  )
}

type SectionProps = {
  video: string
  title: string
  text: string
}

function Section({ video, title, text }: SectionProps) {

  return (
    <div className="container px-4 md:px-0">
      <div className="md:grid md:grid-cols-[auto_40%] md:items-center">
        <Video src={video} />
        <div className="mt-6 px-6 md:pl-8 md:pr-0 lg:pl-16">
          <h3 className="mb-2 md:mb-8 text-2xl lg:text-3xl text-[#f1603f] font-semibold">{title}</h3>
          <div
            className="text-xl lg:text-2xl text-[#292968] font-medium"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className={font.className}>
      <div className="container pt-20 md:pt-32">
        <div className="flex flex-col items-center px-4 text-center">
          <h1 className="text-6xl lg:text-7xl text-[#292968] font-medium">
            Make{' '}
            <b className="relative mx-2">
              <span className="relative z-20">Wizards</span>
              <Image className="absolute -bottom-5 left-3" src="/images/star.svg" width="24" height="24" alt="" />
              <Image className="absolute -top-6 right-6" src="/images/star.svg" width="18" height="18" alt="" />
              <Image className="absolute -top-6 -right-4 md:-right-10" src="/images/star.svg" width="40" height="40" alt="" />
              <div className="absolute top-4 bottom-0 -left-[6%] z-10 w-[110%] h-[52%] my-auto bg-[#f1603f] -rotate-[1.7deg]" />
            </b>{' '}
            great&nbsp;again
          </h1>
          <h2 className="mt-7 text-xl md:text-2xl lg:text-3xl text-[#292968]">
            An easy way to upgrade your <b className="mx-1">Dune&nbsp;Analytics</b>&nbsp;experience
          </h2>
          <a
            className="flex items-center mt-16 py-3.5 px-8 bg-[#fff] rounded-full shadow-xl hover:scale-105 transition"
            href="https://chrome.google.com/webstore/detail/dune-pro-wizards/koapcfogemdhnfddhalbndagdkjfndjm?hl=en&authuser=0"
          >
            <Image className="mr-4" src="/images/chrome.svg" width="28" height="28" alt="" />
            <span className="-mt-0.5 text-xl md:text-2xl text-[#f1603f] font-bold">Add it on Chrome</span>
          </a>
        </div>
      </div>
      <div className="container mt-20 md:mt-40 space-y-12 md:space-y-16">
        <Section
          video="/videos/editor.mp4"
          title="Full-Screen Query Editing"
          text="Gone are the days of squinting at a small query editor window - Dune Pro Wizards <b>makes your query editor huge</b>, filling your whole screen with plenty of space to work with."
        />
        <Section
          video="/videos/results.mp4"
          title="Easily View Query Results"
          text="But that's not all - with the click of a button, you can <b>view your query results in a separate modal window</b>, complete with your chosen settings. No more switching back and forth between tabs or losing your work!"
        />
      </div>
      <div className="flex justify-center mt-16 md:mt-32">
        <div className="flex flex-col items-center">
          <a
            className="flex items-center py-3.5 px-8 bg-[#fff] rounded-full shadow-xl hover:scale-105 transition"
            href="https://chrome.google.com/webstore/detail/dune-pro-wizards/koapcfogemdhnfddhalbndagdkjfndjm?hl=en&authuser=0"
          >
            <Image className="mr-4" src="/images/chrome.svg" width="28" height="28" alt="" />
            <span className="-mt-0.5 text-xl md:text-2xl text-[#f1603f] font-bold">Add it on Chrome</span>
          </a>
          <div className="mt-2 text-xl text-[#292968] font-medium">More features are coming!</div>
        </div>
      </div>
      <div className="container flex items-center justify-between mt-40 px-6 md:px-10 pb-8 md:pb-10">
        <div className="text-lg">
          <span className="text-[#292968] opacity-50">Made by</span>{' '}
          <a
            className="text-[#292968] font-semibold opacity-50 hover:opacity-70 transition duration-300"
            href="https://twitter.com/pavelorso"
            target="_blank"
          >@pavelorso</a>
        </div>
        <div className="hidden md:block text-lg text-[#292968] text-center opacity-50">
          Make <b>Wizards</b> great again!
        </div>
        <div className="flex justify-end items-center space-x-4 md:w-[156px]">
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
