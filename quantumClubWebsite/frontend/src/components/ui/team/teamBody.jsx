import React from 'react'
import img1 from '../../../assets/images/pp.png'

const TeamBody = () => {
  return (
    <div className="flex flex-row items-center justify-start">
      <div className="origin-left scale-50 transform">
        <svg
          width="245px"
          height="346px"
          viewBox="0 0 245 346"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className=""
        >
          <defs>
            <mask id="mask-shape" x="0" y="0" width="245" height="346">
              <polygon
                points="140.257651 0.955593896 0.60118603 81.8543582 0 285.486249 105.343535 345.955594 245 265.943439 245 61.6210639"
                fill="white"
              />
            </mask>
          </defs>

          <image
            xlinkHref={img1}
            x="0"
            y="0"
            width="245px"
            height="346px"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#mask-shape)"
            className="h-full w-full object-cover"
          />
        </svg>
      </div>

      <h1 className="flex-1">Erdem Koyuncu</h1>
    </div>
  )
}

export default TeamBody
