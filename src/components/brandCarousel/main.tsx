const BrandsCarousel = () => {
  return (
    <div className="marquee border-t border-secondary    flex flex-col justify-center items-center  p-2">
      <div className="marquee__group w-full items-center  justify-center flex h-full">
        <img
          src="https://seeklogo.com/images/S/sun-news-logo-107E32491A-seeklogo.com.png"
          alt=""
          className="inline-block h-12 mx-4 "
        />
        <img
          src="https://i.ibb.co/fQqGpd3/vikatan-2019-05-6a67ae27-001f-4932-b76c-07e7398a3a1a-138178-thumb.png"
          alt=""
          className="inline-block h-12 mx-4 "
        />
      </div>
    </div>
  );
};

export default BrandsCarousel;
