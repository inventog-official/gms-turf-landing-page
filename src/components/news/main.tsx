// NewsPage.js
import { motion } from 'framer-motion';
import { FaFutbol, FaTrophy } from 'react-icons/fa';

const NewsPage = () => {
  const newsItems = [
   
    {
      id: 2,
      type: 'video',
      title: 'Sivakarthikeyan, Nelson லாம் இங்கதான் கிரிக்கெட் ஆடுறாங்க! - Growth of Turf Business',
      content: 'Game On Solution',
      videoUrl: 'https://www.youtube.com/embed/HNlNcOWH4xg',
    },
    {
      id: 3,
      type: 'image',
      title: 'SOUTH INDIAS BEST SPORTS INFRASTRUCTURE FIRM AWARDED BY',
      content: 'Game On Solution',
      imageUrl: 'https://static.wixstatic.com/media/4c43d3_f588d4ee70264f2dab3bed9f20e705e5~mv2.png/v1/crop/x_11,y_49,w_1274,h_524/fill/w_738,h_296,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/award.png',
    },
    {
      id: 4,
      type: 'video',
      title: 'சென்னையில் அதிகரித்து வரும் Turf Grounds -இளைஞர்கள் அமோக வரவேற்பு -அப்படி என்ன சிறப்புக்கள் இருக்கு?',
      content: 'Game On Solution',
      videoUrl: 'https://www.youtube.com/embed/dZV22FFKUUI?si=tt2vUqXyl1grVJGu',
    },
  ];





  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="relative bg-cover bg-center min-h-screen"
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
    >
     <div className=" ">
    
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="bg-gray-100 w-full min-h-screen py-8 flex flex-col gap-2 justify-center items-center px-4 relative z-10"
        >
   <div className="flex  flex-col xl:flex-row justify-center   items-center py-5 w-[90%] ">
            {/* Sports News Section */}
            <div className="flex uppercase  sm:text-lg md:text-xl lg:text-4xl font-special italic    opacity-0 animate-lineUp delay-1000 items-center bg-black text-white w-full  text-center text-5xl font-bold px-8 py-4  shadow-lg">
            <FaFutbol className="w-8 h-8 md:w-10 md:h-10 mr-3" />
            <span className="text-xl md:text-xl lg:text-4xl">SPORTS NEWS</span>
            </div>
            {/* Award News Section */}
            <div className="flex uppercase  sm:text-2xl md:text-xl lg:text-4xl font-special italic    opacity-0 animate-lineUp delay-1000 items-center bg-[#febc12] text-black w-full  text-center text-5xl font-bold px-8 py-4  shadow-lg ">
            <FaTrophy className="w-8 h-8 md:w-10 md:h-10 mr-3" />
            <span className="text-xl md:text-xl lg:text-4xl">AWARD NEWS</span>
            </div>
         
        </div>
          <div className="space-y-10 w-[90%] mx-auto">
            {newsItems.map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                className="bg-white rounded-b-xl h-full shadow-lg overflow-hidden"
                viewport={{ once: false }}
              >
                {item.type === 'image' ? (
                  <img src={item.imageUrl} alt={item.title} className="w-full h-96 object-cover" />
                ) : (
                  < iframe
                  className='h-96'
                    width="100%"
                    height="100%"
                    src={item.videoUrl}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-black">{item.title}</h2>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewsPage;




"SOUTH INDIAS BEST SPORTS INFRASTRUCTURE FIRM AWARDED BY"