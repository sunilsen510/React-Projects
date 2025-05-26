import React from 'react'

const InnerHero = ({
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  height = "h-[60vh]",
  children,
}) => {

  return (
    <>
      <div
      className={`relative w-full ${height} bg-cover bg-center flex items-center justify-center text-white`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gray-200 bg-opacity-50 z-0" />
      )}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-3xl text-gray-800 md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-gray-800 md:text-xl">{subtitle}</p>}
        {children}
      </div>
    </div>
    </>
  )
}

export default InnerHero
