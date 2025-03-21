import { Introduce } from "../types";
import { Button } from "./ui/button";
import Link from "next/link";

const IntroduceHeader = ({ title, description, button }: Introduce) => {
  return (
    <section className="relative w-full bg-black text-white m-auto">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto flex ">
          <h1 className="mb-6 text-4xl max-w-xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="w-2/4">
            <p className="mb-8 text-lg text-gray-300 md:text-xl max-w-[80%]">
              {description}
            </p>
            <Link href={button.href ?? "/"}>
              <Button
                variant={button.type || "default"}
                className={`text-base font-medium ${
                  button.color ? "bg-[`${button.color}`] text-black" : ""
                }`}
                style={
                  button.color ? { backgroundColor: button.color } : undefined
                }
              >
                {button.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceHeader;
