import { Content } from "@prismicio/client"
import Bounded from "@/components/Bounded"
import {
  SliceComponentProps,
  JSXMapSerializer,
  PrismicRichText,
} from "@prismicio/react"

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className="text-center text-slate-600 font-semibold mb-8">{children}</p>
  ),
  hyperlink: ({ node, children }) => (
    <a href={node.data.url}><span className="text-cyan-500"> {children} </span></a>
  )
}

export type InfoBoxProps = SliceComponentProps<Content.InfoBoxSlice>

/**
 * Component for "InfoBox" Slices.
*/

const InfoBox = ({ slice }: InfoBoxProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="md:px-6">
        <PrismicRichText
          field={slice.primary.info_text}
          components={components}
        />
      </div>
    </Bounded>
  )
}

export default InfoBox
