import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" &&
        <div className="relative overflow-hidden content-center drop-shadow-xl">
          <PrismicNextImage
            field={slice.primary.image}
            priority={true}
            className="object-cover w-full invisible sm:visible"
          />
          {slice.primary.text &&
            <h3 className="textBorder absolute text-5xl w-full text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {slice.primary.text}
            </h3>
          }
        </div>
      }
      {slice.variation === "simpleImage" &&
        <PrismicNextImage
          field={slice.primary.image}
          priority={true}
          className="mx-auto"
        />
      }
    </Bounded>
  );
};

export default Image;
