import React from 'react'


interface props{
    title:string,
    desc:string,
    image:string
}
const FooterCard :React.FC<props>= ({desc,image,title}) => {
  return (
    <div className="flex  md:flex-row flex-col gap-12 px-2 ">
    <div className="relative w-full  flex items-center justify-center ">
      <div className="relative flex items-center">
        <div className="absolute border-4 border-yellow-600 w-full h-full -top-5 left-5 sm:-top-7 sm:left-6 bg-black/20 blur-sm"></div>
        <div className="w-full h-full overflow-hidden group">
          <img
            src={image}
            className="lg:w-[400px] w-[250px]  h-full object-cover transition-transform duration-500 ease-out scale-105 transform group-hover:scale-100"
            alt="Director"
          />
          {/* Inner Light Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none">
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-purple-800/20 to-yellow-500/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/45 to-black" />
         
          </div>
        </div>
      </div>
    </div>

    {/* Text Section */}
    <div className="w-full flex flex-col justify-center items-start gap-8  ">
      <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white  uppercase leading-tight">
         <span className="text-secondary">         {title}
         </span>
      </p>
      {/* Main Content */}
      <div className="flex flex-col gap-10   text-white font-secondary">
        <p className="md:text-2xl text-lg">
        {desc}
        </p>
       
      </div>
    </div>
  </div>
  )
}

export default FooterCard
