import BrandsCarousel from "./brandCarousel/main";
import { ExpandableCardDemo } from "./news/main";

function News_Page() {
  return (
    <div className="text-center flex-col flex gap-10 md:px-24 py-10">
      <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary text-white font-semibold uppercase leading-tight">
        News <span className="text-secondary">&</span> awards
      </p>
      <div className="border border-secondary"></div>
      {/* <NewsPage /> */}
      <ExpandableCardDemo />
      <BrandsCarousel />
    </div>
  );
}

export default News_Page;
