import { ExpandableCardDemo } from "./news/main";
import TextHoverAnimation from "./textHoverAnimation";

function News_Page() {
  return (
    <div className="text-center flex-col flex gap-10 md:pt-[10%] pt-32 px-32">
      <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary flex gap-2 text-white  uppercase leading-tight">
        <TextHoverAnimation text="News" />
        <span className="text-secondary">
          <TextHoverAnimation text="&" />
        </span>
        <TextHoverAnimation text="awards" />
      </p>
      <div className="border border-secondary"></div>
      {/* <NewsPage /> */}
      <ExpandableCardDemo />
      {/* <BrandsCarousel /> */}
    </div>
  );
}

export default News_Page;
