/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

import CTB_SVG_Icon from "./CTBIcon"
import parseSVG from "./parseIcon"

function renderSVG ( svg ) {

	svg = parseSVG( svg )

	var fontAwesome = CTB_SVG_Icon[svg]

	if ( "undefined" != typeof fontAwesome ) {

		var viewbox_array = ( fontAwesome["svg"].hasOwnProperty("brands") ) ? fontAwesome["svg"]["brands"]["viewBox"] : fontAwesome["svg"]["solid"]["viewBox"]
		var path = ( fontAwesome["svg"].hasOwnProperty("brands") ) ? fontAwesome["svg"]["brands"]["path"] : fontAwesome["svg"]["solid"]["path"]
		var viewBox = viewbox_array.join( " " )

		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}><path d={path}></path></svg>
		)
	}

}

export default renderSVG

export const CoolTMIcon = () => (
    <svg id="svg" version="1.1" width="400" height="400" 
        viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" 
        >
        <g id="svgg">
        <path id="path0" d="M244.800 141.451 L 244.800 149.303 233.800 160.305 C 227.483 166.623,222.800 171.615,222.800 172.032 C 222.800 172.449,227.481 177.436,233.800 183.753 L 244.800 194.749 244.800 228.374 L 244.800 262.000 305.200 262.000 L 365.600 262.000 365.600 197.800 L 365.600 133.600 305.200 133.600 L 244.800 133.600 244.800 141.451 " stroke="none" fill="#04acac" fill-rule="evenodd"></path>
        <path id="path1" d="M195.194 31.700 C 195.187 54.348,195.204 54.103,193.608 54.602 C 191.909 55.133,188.000 59.984,188.000 61.562 C 188.000 62.023,187.820 62.400,187.600 62.400 C 187.357 62.400,187.200 64.200,187.200 67.000 C 187.200 69.800,187.357 71.600,187.600 71.600 C 187.820 71.600,188.000 72.050,188.000 72.600 C 188.000 73.150,188.180 73.600,188.400 73.600 C 188.620 73.600,188.800 73.870,188.800 74.200 C 188.800 74.956,193.407 79.600,194.157 79.600 C 195.174 79.600,195.200 80.620,195.200 120.022 L 195.200 159.179 193.946 159.828 C 192.492 160.580,189.600 163.335,189.600 163.969 C 189.600 164.206,189.420 164.400,189.200 164.400 C 188.980 164.400,188.800 164.670,188.800 165.000 C 188.800 165.330,188.620 165.600,188.400 165.600 C 188.180 165.600,188.000 166.050,188.000 166.600 C 188.000 167.150,187.820 167.600,187.600 167.600 C 187.357 167.600,187.200 169.392,187.200 172.176 C 187.200 174.796,187.371 176.858,187.600 177.000 C 187.820 177.136,188.000 177.687,188.000 178.224 C 188.000 178.761,188.150 179.200,188.332 179.200 C 188.515 179.200,188.920 179.685,189.232 180.278 C 190.024 181.781,192.453 184.200,193.947 184.973 L 195.200 185.621 195.194 231.510 C 195.191 256.750,195.056 277.601,194.894 277.846 C 194.732 278.091,194.154 278.432,193.608 278.602 C 191.904 279.135,188.000 283.980,188.000 285.562 C 188.000 286.023,187.820 286.400,187.600 286.400 C 187.357 286.400,187.200 288.200,187.200 291.000 C 187.200 293.800,187.357 295.600,187.600 295.600 C 187.820 295.600,188.000 296.050,188.000 296.600 C 188.000 297.150,188.180 297.600,188.400 297.600 C 188.620 297.600,188.800 297.870,188.800 298.200 C 188.800 298.956,193.407 303.600,194.157 303.600 C 195.175 303.600,195.200 304.621,195.200 345.633 L 195.200 386.400 201.000 386.400 L 206.800 386.400 206.800 345.498 L 206.800 304.595 207.900 304.103 C 208.505 303.833,209.540 303.162,210.200 302.612 C 210.860 302.062,211.886 301.204,212.481 300.706 C 213.075 300.208,213.675 299.305,213.813 298.700 C 213.951 298.095,214.229 297.600,214.432 297.600 C 214.634 297.600,214.800 297.150,214.800 296.600 C 214.800 296.050,214.980 295.600,215.200 295.600 C 215.443 295.600,215.600 293.800,215.600 291.000 C 215.600 288.200,215.443 286.400,215.200 286.400 C 214.980 286.400,214.800 285.860,214.800 285.200 C 214.800 284.540,214.620 284.000,214.400 284.000 C 214.180 284.000,214.000 283.734,214.000 283.409 C 214.000 282.639,209.761 278.400,208.991 278.400 C 208.666 278.400,208.400 278.220,208.400 278.000 C 208.400 277.780,208.040 277.600,207.600 277.600 C 206.805 277.600,206.800 277.333,206.800 231.849 L 206.800 186.097 208.008 185.597 C 209.557 184.955,214.000 180.689,214.000 179.844 C 214.000 179.490,214.180 179.200,214.400 179.200 C 214.620 179.200,214.800 178.750,214.800 178.200 C 214.800 177.650,214.980 177.200,215.200 177.200 C 215.444 177.200,215.600 175.333,215.600 172.400 C 215.600 169.467,215.444 167.600,215.200 167.600 C 214.980 167.600,214.800 167.150,214.800 166.600 C 214.800 166.050,214.620 165.600,214.400 165.600 C 214.180 165.600,214.000 165.298,214.000 164.930 C 214.000 164.093,209.593 159.841,207.989 159.131 L 206.800 158.605 206.800 119.600 L 206.800 80.595 207.900 80.103 C 208.505 79.833,209.540 79.162,210.200 78.612 C 210.860 78.062,211.886 77.204,212.481 76.706 C 213.075 76.208,213.675 75.305,213.813 74.700 C 213.951 74.095,214.229 73.600,214.432 73.600 C 214.634 73.600,214.800 73.150,214.800 72.600 C 214.800 72.050,214.980 71.600,215.200 71.600 C 215.443 71.600,215.600 69.800,215.600 67.000 C 215.600 64.200,215.443 62.400,215.200 62.400 C 214.980 62.400,214.800 61.860,214.800 61.200 C 214.800 60.540,214.620 60.000,214.400 60.000 C 214.180 60.000,214.000 59.734,214.000 59.409 C 214.000 58.639,209.761 54.400,208.991 54.400 C 208.666 54.400,208.400 54.220,208.400 54.000 C 208.400 53.780,208.040 53.600,207.600 53.600 C 206.810 53.600,206.800 53.333,206.800 31.800 L 206.800 10.000 201.000 10.000 L 195.200 10.000 195.194 31.700 " stroke="none" fill="#040404" fill-rule="evenodd"></path>
        <path id="path2" d="M42.400 85.800 L 42.400 150.000 102.800 150.000 L 163.200 150.000 163.200 119.787 L 163.200 89.573 164.557 88.143 C 166.323 86.282,166.134 86.474,170.304 82.304 C 172.284 80.324,174.107 78.500,174.356 78.252 C 174.604 78.003,176.381 76.230,178.304 74.312 C 180.227 72.393,182.001 70.593,182.246 70.312 C 182.492 70.030,183.077 69.535,183.546 69.212 C 185.641 67.768,185.126 67.056,173.800 55.729 L 163.200 45.128 163.200 33.364 L 163.200 21.600 102.800 21.600 L 42.400 21.600 42.400 85.800 M42.400 310.600 L 42.400 374.800 102.800 374.800 L 163.200 374.800 163.200 343.748 L 163.200 312.697 173.800 302.107 C 181.771 294.143,184.400 291.279,184.400 290.558 C 184.400 289.837,181.772 286.974,173.800 279.011 L 163.200 268.423 163.200 257.411 L 163.200 246.400 102.800 246.400 L 42.400 246.400 42.400 310.600 " stroke="none" fill="#dc1434" fill-rule="evenodd"></path>
    </g></svg>); 
  