import type { SVGProps } from 'react'
const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" {...props}>
    <path
      fill="#98A2B3"
      d="M6.5 20.789v-1.5h1.808v-7.462c0-1.344.415-2.534 1.245-3.567a5.518 5.518 0 0 1 3.197-1.983v-.623c0-.347.121-.642.364-.885s.538-.365.885-.365.642.122.886.365c.243.243.365.538.365.885v.623a5.518 5.518 0 0 1 3.197 1.983c.83 1.033 1.245 2.223 1.245 3.567v7.462H21.5v1.5zm7.498 2.807c-.497 0-.923-.177-1.276-.53a1.743 1.743 0 0 1-.53-1.277h3.616c0 .499-.178.925-.532 1.278-.354.353-.78.53-1.278.53m-4.19-4.307h8.384v-7.462c0-1.157-.409-2.145-1.228-2.964-.818-.819-1.806-1.228-2.964-1.228s-2.146.41-2.964 1.228c-.82.819-1.228 1.807-1.228 2.964z"
    />
  </svg>
)
export default SvgAlert
