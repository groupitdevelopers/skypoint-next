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
        <div className="relative overflow-hidden content-center">
          <PrismicNextImage
            field={slice.primary.image}
            className="object-cover w-full invisible sm:visible"
          />
          {slice.primary.text &&
            <div className="absolute opacity-100 sm:opacity-80 text-center bg-none sm:bg-slate-200 py-2 w-full font-extrabold text-2xl text-slate-700 bottom-0">
              {slice.primary.text}
            </div>
          }
        </div>
      }
      {slice.variation === "simpleImage" &&
        <PrismicNextImage
          field={slice.primary.image}
          className="mx-auto"
        />
      }
    </Bounded>
  );
};

export default Image;
