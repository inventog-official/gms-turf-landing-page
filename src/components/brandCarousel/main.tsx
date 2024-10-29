const BrandsCarousel = () => {
  return (
    <div className="marquee border-t border-black border-double bg-gray-100 flex flex-col justify-center items-center h-[40vh] p-2">
      <div className="marquee__group w-full items-center  justify-center flex h-full">
        <img  src="https://seeklogo.com/images/S/sun-news-logo-107E32491A-seeklogo.com.png" alt="" className="inline-block h-56 mx-4 " />
        <img src="https://i.ibb.co/fQqGpd3/vikatan-2019-05-6a67ae27-001f-4932-b76c-07e7398a3a1a-138178-thumb.png" alt="" className="inline-block h-56 mx-4 " />
        <img src="https://images.unsplash.com/photo-1586917383423-c25e88ac05ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3NzU&ixlib=rb-1.2.1&q=80&w=400" alt="" className="inline-block h-56 mx-4 " />
        <img src="https://images.unsplash.com/photo-1560743173-567a3b5658b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ3NzU&ixlib=rb-1.2.1&q=80&w=400" alt="" className="inline-block h-56 mx-4 " />
        <img src="https://images.unsplash.com/photo-1603232644140-bb47da511b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTk0MDQ4MDE&ixlib=rb-1.2.1&q=80&w=400" alt="" className="inline-block h-56 mx-4 " />
        {/* Repeat the images as necessary */}
      </div>
    </div>
  );
};

export default BrandsCarousel;