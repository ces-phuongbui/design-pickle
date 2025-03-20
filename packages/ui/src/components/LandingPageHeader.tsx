import Link from "next/link";
import { StrapiImage } from "./StrapiImage";
import { Button } from "./ui/button";
import { LandingPageHeader } from "../types";

export const LandingPageHeaderSection = ({
  heading,
  headingImages,
}: LandingPageHeader) => {
  const topImages = headingImages.slice(0, 2);
  const bottomImages = headingImages.slice(2, 5);
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 grid grid-cols-2 gap-8 p-8">
        {topImages.map((image, index) => (
          <div key={index} className="flex justify-center">
            <StrapiImage
              src={image.url}
              alt="heading"
              className="rounded-xl shadow-lg self-center"
              width={300}
              height={100}
            />
          </div>
        ))}

        <div className="col-span-2 flex justify-between px-8">
          {bottomImages.map((image, index) => (
            <div key={index} className="flex">
              <StrapiImage
                src={image.url}
                alt="heading"
                className={`rounded-xl shadow-lg  ${index == 1 ? "self-center" : "self-start"}`}
                width={350}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <h1 className=" text-5xl font-bold">{heading.title}</h1>
        <p className="text-lg mt-3">{heading.description}</p>

        <Button className="mt-6 bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-500">
          <Link href={String(heading?.button?.href)}>
            {heading.button.label}
          </Link>
        </Button>
      </div>
    </div>
  );
};
