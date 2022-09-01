import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonProductCard = (props) => (
  <div className="ProductCard">
  <ContentLoader 
    speed={2}
    width={150}
    height={200}
    viewBox="0 0 150 180"
    backgroundColor="#d1d1d1"
    foregroundColor="#e8e8e8"
    {...props}
  >

    <rect x="0" y="0" rx="0" ry="0" width="150" height="90" /> 
    <rect x="0" y="103" rx="5" ry="5" width="150" height="8" /> 
    <rect x="0" y="122" rx="5" ry="5" width="150" height="8" /> 
    <rect x="0" y="154" rx="5" ry="5" width="86" height="20" /> 
    <rect x="119" y="154" rx="5" ry="5" width="32" height="20" />
  </ContentLoader>
  </div>
)

export default SkeletonProductCard