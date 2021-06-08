import React from 'react';
import Button from '../Button/Button';
import './Footer.css';
import $ from 'jquery';

const pathStyle = {
    whitespace: "pre",
}

const socialLinks = [
    {
        type: "Link",
        className: "button bInstagram",
        linkTo: "https://www.instagram.com/malcolm_baatjies/",
        linePos: "topLine"
    },
    {
        type: "Link",
        className: "button bGitHub",
        linkTo: "https://github.com/MalcolmBB",
        linePos: "bottomLine"
    }
    ,
    {
        type: "Link",
        className: "button bLinkedIn",
        linkTo: "https://www.linkedin.com/in/malcolmbaatjies/",
        linePos: "topLine"
    }
    ,
    {
        type: "Navigation",
        className: "button bEmail",
        linkTo: "/Contact-me",
        linePos: "bottomLine"
    }
]

function Footer(){
    return (
        <footer>
                <div className="socialLinks">
                    <div className="LogoContainer" tabIndex="0"
                        onKeyPress={(event) => {
                            if (event.key === 'Enter'){
                                $('.simplebar-content-wrapper')[0].scroll({top: 0, left: 0, behavior: 'smooth'})
                                document.activeElement.blur();
                            }
                        }}

                        onClick={() => {
                            $('.simplebar-content-wrapper')[0].scroll({top: 0, left: 0, behavior: 'smooth'})
                            document.activeElement.blur();
                        }}>
                        <svg viewBox="22.453 23.542 466.549 464.915" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="257.089" cy="255.455" r="229.734" transform="matrix(1.015411, 0, 0, 1.011855, -5.323695, -2.483635)"/>
                        <path d="M 165.236 295.478 L 165.236 312.19 L 84.487 258.67 L 84.487 245.554 L 165.236 192.034 L 165.236 208.746 L 100.074 251.689 L 100.074 252.535 L 165.236 295.478 Z" style={pathStyle}/>
                        <path d="M 429.532 258.439 L 348.783 311.959 L 348.783 295.247 L 413.945 252.304 L 413.945 251.458 L 348.783 208.515 L 348.783 191.803 L 429.532 245.323 L 429.532 258.439 Z" style={pathStyle}/>
                        <path d="M 82.533 266.497 L 79.447 266.497 L 79.755 240.232 L 83.785 240.232 L 87.283 251.446 L 88.499 255.687 L 88.661 255.687 L 89.935 251.446 L 93.739 240.232 L 97.76 240.232 L 97.451 266.497 L 94.297 266.497 L 94.452 253.369 C 94.459 252.725 94.487 251.983 94.537 251.145 C 94.587 250.3 94.648 249.453 94.72 248.602 C 94.798 247.746 94.867 246.918 94.928 246.119 C 94.994 245.32 95.056 244.639 95.113 244.076 L 94.994 244.076 L 93.472 249.205 L 89.636 259.532 L 87.273 259.532 L 83.756 249.205 L 82.32 244.076 L 82.243 244.076 C 82.288 244.639 82.339 245.32 82.398 246.119 C 82.451 246.918 82.498 247.746 82.539 248.602 C 82.586 249.453 82.623 250.3 82.653 251.145 C 82.684 251.983 82.694 252.725 82.687 253.369 L 82.533 266.497 Z M 109.998 266.979 C 109.103 266.979 108.26 266.853 107.47 266.6 C 106.685 266.341 105.998 265.979 105.408 265.514 C 104.825 265.048 104.366 264.473 104.034 263.79 C 103.696 263.112 103.533 262.333 103.543 261.454 C 103.556 260.357 103.825 259.402 104.35 258.592 C 104.87 257.776 105.694 257.075 106.823 256.489 C 107.946 255.903 109.392 255.423 111.159 255.049 C 112.931 254.676 115.054 254.38 117.527 254.162 C 117.507 253.495 117.409 252.869 117.235 252.282 C 117.055 251.696 116.772 251.182 116.386 250.739 C 115.994 250.302 115.477 249.949 114.834 249.679 C 114.197 249.415 113.417 249.283 112.493 249.283 C 111.229 249.283 110.016 249.53 108.854 250.024 C 107.687 250.518 106.652 251.044 105.75 251.601 L 104.518 249.36 C 104.992 249.039 105.555 248.711 106.205 248.378 C 106.855 248.044 107.544 247.746 108.272 247.481 C 108.995 247.211 109.766 246.99 110.584 246.817 C 111.402 246.645 112.233 246.559 113.077 246.559 C 115.707 246.559 117.653 247.286 118.917 248.74 C 120.175 250.194 120.79 252.136 120.761 254.567 L 120.621 266.497 L 117.978 266.497 L 117.728 263.85 L 117.609 263.85 C 116.522 264.706 115.323 265.442 114.013 266.057 C 112.703 266.671 111.364 266.979 109.998 266.979 Z M 110.896 264.333 C 112.002 264.333 113.09 264.086 114.161 263.592 C 115.232 263.098 116.326 262.385 117.442 261.454 L 117.502 256.325 C 115.449 256.486 113.729 256.713 112.343 257.006 C 110.956 257.299 109.847 257.653 109.015 258.066 C 108.183 258.48 107.591 258.948 107.239 259.471 C 106.893 259.989 106.716 260.569 106.708 261.213 C 106.702 261.77 106.815 262.244 107.049 262.635 C 107.276 263.02 107.582 263.339 107.964 263.592 C 108.341 263.844 108.786 264.031 109.3 264.152 C 109.809 264.273 110.341 264.333 110.896 264.333 Z M 140.028 266.979 C 137.976 266.979 136.419 266.39 135.357 265.212 C 134.288 264.04 133.768 262.293 133.795 259.971 L 134.022 240.672 L 127.196 240.672 L 127.227 237.991 L 137.292 237.991 L 137.031 260.213 C 137.014 261.655 137.344 262.689 138.023 263.316 C 138.701 263.942 139.618 264.255 140.774 264.255 C 141.908 264.255 143.11 263.962 144.381 263.376 L 145.176 265.816 C 144.276 266.189 143.457 266.477 142.718 266.678 C 141.979 266.878 141.082 266.979 140.028 266.979 Z M 161.303 266.979 C 159.801 266.979 158.415 266.753 157.146 266.298 C 155.876 265.844 154.773 265.184 153.837 264.316 C 152.895 263.448 152.168 262.379 151.656 261.109 C 151.149 259.845 150.905 258.411 150.924 256.808 C 150.943 255.181 151.241 253.733 151.817 252.463 C 152.398 251.194 153.181 250.119 154.167 249.24 C 155.151 248.36 156.298 247.694 157.607 247.24 C 158.916 246.786 160.293 246.559 161.738 246.559 C 163.319 246.559 164.679 246.837 165.817 247.395 C 166.955 247.958 167.913 248.628 168.692 249.403 L 167.052 251.524 C 166.273 250.828 165.457 250.28 164.607 249.877 C 163.755 249.481 162.828 249.283 161.825 249.283 C 160.72 249.283 159.707 249.461 158.784 249.817 C 157.856 250.179 157.065 250.694 156.412 251.36 C 155.758 252.026 155.241 252.823 154.862 253.748 C 154.482 254.668 154.287 255.687 154.273 256.808 C 154.26 257.928 154.427 258.943 154.773 259.851 C 155.119 260.758 155.612 261.54 156.25 262.195 C 156.883 262.844 157.653 263.35 158.562 263.712 C 159.463 264.074 160.468 264.255 161.573 264.255 C 162.757 264.255 163.845 264.023 164.837 263.557 C 165.828 263.086 166.724 262.506 167.526 261.816 L 168.955 263.936 C 167.867 264.896 166.674 265.643 165.376 266.178 C 164.082 266.712 162.725 266.979 161.303 266.979 Z M 183.163 266.979 C 181.9 266.979 180.698 266.753 179.558 266.298 C 178.419 265.844 177.421 265.184 176.564 264.316 C 175.707 263.448 175.028 262.379 174.527 261.109 C 174.032 259.845 173.794 258.411 173.813 256.808 C 173.832 255.181 174.104 253.733 174.629 252.463 C 175.16 251.194 175.864 250.119 176.741 249.24 C 177.618 248.36 178.633 247.694 179.782 247.24 C 180.933 246.786 182.14 246.559 183.403 246.559 C 184.667 246.559 185.869 246.786 187.008 247.24 C 188.147 247.694 189.149 248.36 190.01 249.24 C 190.867 250.119 191.546 251.194 192.047 252.463 C 192.542 253.733 192.78 255.181 192.761 256.808 C 192.742 258.411 192.47 259.845 191.945 261.109 C 191.415 262.379 190.711 263.448 189.833 264.316 C 188.951 265.184 187.934 265.844 186.784 266.298 C 185.634 266.753 184.427 266.979 183.163 266.979 Z M 183.195 264.255 C 184.119 264.255 184.957 264.074 185.709 263.712 C 186.467 263.35 187.119 262.844 187.665 262.195 C 188.212 261.54 188.634 260.758 188.934 259.851 C 189.233 258.943 189.39 257.928 189.403 256.808 C 189.416 255.687 189.284 254.668 189.005 253.748 C 188.727 252.823 188.323 252.026 187.792 251.36 C 187.262 250.694 186.622 250.179 185.872 249.817 C 185.128 249.461 184.295 249.283 183.371 249.283 C 182.453 249.283 181.615 249.461 180.857 249.817 C 180.105 250.179 179.456 250.694 178.909 251.36 C 178.363 252.026 177.94 252.823 177.64 253.748 C 177.335 254.668 177.175 255.687 177.162 256.808 C 177.149 257.928 177.285 258.943 177.568 259.851 C 177.847 260.758 178.252 261.54 178.782 262.195 C 179.313 262.844 179.95 263.35 180.694 263.712 C 181.443 264.074 182.277 264.255 183.195 264.255 Z M 211.068 266.979 C 209.017 266.979 207.46 266.39 206.396 265.212 C 205.328 264.04 204.807 262.293 204.834 259.971 L 205.061 240.672 L 198.235 240.672 L 198.267 237.991 L 208.331 237.991 L 208.07 260.213 C 208.053 261.655 208.385 262.689 209.062 263.316 C 209.741 263.942 210.658 264.255 211.814 264.255 C 212.948 264.255 214.15 263.962 215.42 263.376 L 216.216 265.816 C 215.316 266.189 214.497 266.477 213.758 266.678 C 213.019 266.878 212.122 266.979 211.068 266.979 Z M 224.213 266.497 L 220.974 266.497 L 221.203 247.042 L 223.813 247.042 L 224.054 249.602 L 224.139 249.602 C 224.649 248.694 225.236 247.958 225.9 247.395 C 226.563 246.837 227.448 246.559 228.553 246.559 C 230.423 246.559 231.623 247.679 232.152 249.921 C 232.714 248.88 233.336 248.059 234.017 247.455 C 234.693 246.858 235.583 246.559 236.688 246.559 C 238.031 246.559 239.071 247.073 239.807 248.102 C 240.549 249.13 240.908 250.619 240.885 252.567 L 240.721 266.497 L 237.482 266.497 L 237.643 252.808 C 237.67 250.539 236.997 249.403 235.626 249.403 C 234.946 249.403 234.391 249.651 233.96 250.145 C 233.535 250.639 233.053 251.392 232.514 252.403 L 232.348 266.497 L 229.347 266.497 L 229.508 252.808 C 229.521 251.682 229.381 250.834 229.088 250.265 C 228.788 249.69 228.284 249.403 227.576 249.403 C 226.89 249.403 226.307 249.651 225.825 250.145 C 225.349 250.639 224.866 251.392 224.379 252.403 L 224.213 266.497 Z M 277.889 266.497 L 269.958 266.497 L 270.267 240.232 L 277.611 240.232 C 278.925 240.232 280.129 240.353 281.22 240.594 C 282.305 240.835 283.232 241.209 284.003 241.715 C 284.779 242.221 285.378 242.881 285.799 243.697 C 286.226 244.513 286.433 245.493 286.419 246.636 C 286.404 247.947 286.021 249.128 285.272 250.179 C 284.523 251.237 283.369 251.963 281.813 252.36 L 281.811 252.524 C 283.699 252.817 285.166 253.483 286.207 254.524 C 287.249 255.564 287.76 256.991 287.738 258.808 C 287.723 260.089 287.472 261.21 286.985 262.169 C 286.497 263.135 285.821 263.936 284.959 264.574 C 284.101 265.218 283.07 265.697 281.865 266.014 C 280.665 266.335 279.339 266.497 277.889 266.497 Z M 273.507 243.033 L 273.41 251.283 L 276.929 251.283 C 279.139 251.283 280.727 250.923 281.693 250.205 C 282.665 249.481 283.16 248.386 283.177 246.921 C 283.194 245.479 282.698 244.47 281.691 243.895 C 280.683 243.32 279.179 243.033 277.179 243.033 L 273.507 243.033 Z M 273.377 254.084 L 273.264 263.695 L 277.455 263.695 C 279.687 263.695 281.415 263.301 282.637 262.514 C 283.858 261.727 284.48 260.439 284.501 258.652 C 284.521 257.021 283.942 255.851 282.766 255.144 C 281.589 254.437 279.857 254.084 277.568 254.084 L 273.377 254.084 Z M 299.439 266.979 C 298.543 266.979 297.7 266.853 296.91 266.6 C 296.125 266.341 295.438 265.979 294.848 265.514 C 294.264 265.048 293.807 264.473 293.475 263.79 C 293.137 263.112 292.973 262.333 292.983 261.454 C 292.996 260.357 293.265 259.402 293.791 258.592 C 294.31 257.776 295.135 257.075 296.264 256.489 C 297.387 255.903 298.831 255.423 300.599 255.049 C 302.371 254.676 304.494 254.38 306.968 254.162 C 306.947 253.495 306.849 252.869 306.675 252.282 C 306.495 251.696 306.212 251.182 305.826 250.739 C 305.434 250.302 304.918 249.949 304.275 249.679 C 303.637 249.415 302.856 249.283 301.933 249.283 C 300.669 249.283 299.457 249.53 298.295 250.024 C 297.127 250.518 296.092 251.044 295.19 251.601 L 293.959 249.36 C 294.432 249.039 294.995 248.711 295.645 248.378 C 296.295 248.044 296.983 247.746 297.712 247.481 C 298.435 247.211 299.206 246.99 300.024 246.817 C 300.842 246.645 301.673 246.559 302.518 246.559 C 305.147 246.559 307.093 247.286 308.357 248.74 C 309.615 250.194 310.23 252.136 310.202 254.567 L 310.061 266.497 L 307.418 266.497 L 307.168 263.85 L 307.049 263.85 C 305.962 264.706 304.764 265.442 303.453 266.057 C 302.142 266.671 300.804 266.979 299.439 266.979 Z M 300.337 264.333 C 301.442 264.333 302.529 264.086 303.601 263.592 C 304.672 263.098 305.766 262.385 306.882 261.454 L 306.942 256.325 C 304.888 256.486 303.169 256.713 301.783 257.006 C 300.396 257.299 299.287 257.653 298.455 258.066 C 297.622 258.48 297.03 258.948 296.679 259.471 C 296.333 259.989 296.156 260.569 296.149 261.213 C 296.142 261.77 296.255 262.244 296.489 262.635 C 296.716 263.02 297.021 263.339 297.404 263.592 C 297.78 263.844 298.226 264.031 298.741 264.152 C 299.249 264.273 299.781 264.333 300.337 264.333 Z M 323.118 266.979 C 322.223 266.979 321.38 266.853 320.589 266.6 C 319.805 266.341 319.117 265.979 318.528 265.514 C 317.944 265.048 317.486 264.473 317.154 263.79 C 316.817 263.112 316.652 262.333 316.663 261.454 C 316.676 260.357 316.945 259.402 317.47 258.592 C 317.99 257.776 318.814 257.075 319.943 256.489 C 321.067 255.903 322.511 255.423 324.278 255.049 C 326.051 254.676 328.174 254.38 330.647 254.162 C 330.627 253.495 330.53 252.869 330.354 252.282 C 330.174 251.696 329.891 251.182 329.506 250.739 C 329.115 250.302 328.597 249.949 327.954 249.679 C 327.317 249.415 326.536 249.283 325.612 249.283 C 324.349 249.283 323.136 249.53 321.974 250.024 C 320.807 250.518 319.772 251.044 318.87 251.601 L 317.638 249.36 C 318.113 249.039 318.674 248.711 319.324 248.378 C 319.974 248.044 320.664 247.746 321.392 247.481 C 322.115 247.211 322.885 246.99 323.703 246.817 C 324.521 246.645 325.353 246.559 326.197 246.559 C 328.827 246.559 330.774 247.286 332.037 248.74 C 333.295 250.194 333.909 252.136 333.881 254.567 L 333.741 266.497 L 331.097 266.497 L 330.848 263.85 L 330.729 263.85 C 329.642 264.706 328.444 265.442 327.132 266.057 C 325.822 266.671 324.484 266.979 323.118 266.979 Z M 324.016 264.333 C 325.121 264.333 326.209 264.086 327.28 263.592 C 328.352 263.098 329.445 262.385 330.561 261.454 L 330.622 256.325 C 328.568 256.486 326.849 256.713 325.462 257.006 C 324.077 257.299 322.967 257.653 322.134 258.066 C 321.302 258.48 320.71 258.948 320.358 259.471 C 320.012 259.989 319.835 260.569 319.828 261.213 C 319.821 261.77 319.935 262.244 320.168 262.635 C 320.397 263.02 320.701 263.339 321.083 263.592 C 321.46 263.844 321.906 264.031 322.42 264.152 C 322.929 264.273 323.461 264.333 324.016 264.333 Z M 352.638 266.979 C 351.244 266.979 350.076 266.784 349.134 266.393 C 348.186 266.008 347.428 265.462 346.858 264.755 C 346.288 264.048 345.885 263.201 345.647 262.212 C 345.409 261.224 345.297 260.129 345.311 258.928 L 345.42 249.722 L 340.005 249.722 L 340.034 247.24 L 345.57 247.042 L 346.077 240.792 L 348.763 240.792 L 348.69 247.042 L 358.125 247.042 L 358.094 249.722 L 348.658 249.722 L 348.55 258.971 C 348.539 259.851 348.61 260.618 348.761 261.273 C 348.906 261.928 349.16 262.482 349.523 262.937 C 349.887 263.391 350.384 263.73 351.016 263.954 C 351.642 264.184 352.418 264.298 353.341 264.298 C 354.265 264.298 355.096 264.218 355.834 264.057 C 356.573 263.896 357.284 263.68 357.967 263.411 L 358.653 265.816 C 357.782 266.137 356.864 266.41 355.898 266.634 C 354.938 266.865 353.851 266.979 352.638 266.979 Z M 368.325 275.185 C 367.327 275.185 366.354 275.059 365.405 274.806 C 364.462 274.553 363.609 274.24 362.849 273.866 L 363.948 271.418 C 364.63 271.769 365.344 272.036 366.09 272.22 C 366.836 272.41 367.577 272.505 368.314 272.505 C 369.266 272.505 370.058 272.384 370.689 272.142 C 371.327 271.901 371.833 271.554 372.206 271.099 C 372.58 270.645 372.841 270.091 372.991 269.436 C 373.146 268.787 373.228 268.048 373.238 267.221 L 373.444 249.722 L 364.518 249.722 L 364.549 247.042 L 376.714 247.042 L 376.48 266.979 C 376.465 268.18 376.319 269.281 376.041 270.281 C 375.768 271.281 375.32 272.149 374.693 272.884 C 374.061 273.619 373.23 274.185 372.199 274.582 C 371.169 274.984 369.878 275.185 368.325 275.185 Z M 374.781 242.956 C 374.044 242.956 373.43 242.723 372.936 242.258 C 372.443 241.786 372.201 241.165 372.21 240.396 C 372.219 239.62 372.476 238.999 372.98 238.534 C 373.484 238.062 374.104 237.827 374.841 237.827 C 375.578 237.827 376.196 238.062 376.695 238.534 C 377.188 238.999 377.43 239.62 377.421 240.396 C 377.412 241.165 377.155 241.786 376.651 242.258 C 376.141 242.723 375.518 242.956 374.781 242.956 Z M 400.165 266.497 L 396.927 266.497 L 397.124 249.722 L 388.198 249.722 L 388.23 247.042 L 400.394 247.042 L 400.165 266.497 Z M 398.461 242.956 C 397.724 242.956 397.11 242.723 396.616 242.258 C 396.123 241.786 395.881 241.165 395.89 240.396 C 395.899 239.62 396.156 238.999 396.66 238.534 C 397.165 238.062 397.785 237.827 398.522 237.827 C 399.259 237.827 399.876 238.062 400.375 238.534 C 400.868 238.999 401.11 239.62 401.101 240.396 C 401.092 241.165 400.836 241.786 400.331 242.258 C 399.822 242.723 399.198 242.956 398.461 242.956 Z M 421.154 266.979 C 419.703 266.979 418.357 266.753 417.115 266.298 C 415.869 265.844 414.782 265.178 413.858 264.298 C 412.933 263.413 412.209 262.339 411.685 261.075 C 411.162 259.805 410.91 258.357 410.929 256.73 C 410.947 255.155 411.233 253.739 411.786 252.481 C 412.339 251.228 413.078 250.162 414 249.283 C 414.917 248.404 415.962 247.729 417.135 247.257 C 418.314 246.792 419.549 246.559 420.841 246.559 C 422.207 246.559 423.434 246.78 424.522 247.223 C 425.611 247.66 426.525 248.28 427.263 249.084 C 428.002 249.884 428.563 250.843 428.947 251.963 C 429.33 253.084 429.514 254.325 429.498 255.687 C 429.493 256.06 429.475 256.42 429.443 256.765 C 429.416 257.116 429.373 257.422 429.313 257.687 L 414.19 257.687 C 414.379 259.905 415.156 261.566 416.52 262.669 C 417.89 263.779 419.576 264.333 421.576 264.333 C 422.738 264.333 423.785 264.167 424.718 263.833 C 425.657 263.499 426.566 263.055 427.446 262.497 L 428.602 264.652 C 427.648 265.296 426.556 265.844 425.327 266.298 C 424.097 266.753 422.707 266.979 421.154 266.979 Z M 420.887 249.162 C 420.099 249.162 419.341 249.294 418.613 249.559 C 417.884 249.828 417.228 250.211 416.644 250.705 C 416.06 251.199 415.566 251.82 415.16 252.567 C 414.76 253.314 414.476 254.168 414.305 255.127 L 426.538 255.127 C 426.431 253.127 425.876 251.633 424.873 250.645 C 423.876 249.656 422.547 249.162 420.887 249.162 Z M 444.043 266.979 C 442.144 266.979 440.397 266.678 438.8 266.074 C 437.203 265.477 435.818 264.764 434.643 263.936 L 436.165 261.773 C 437.26 262.572 438.471 263.212 439.797 263.695 C 441.118 264.172 442.673 264.411 444.464 264.411 C 446.097 264.411 447.318 264.111 448.13 263.514 C 448.941 262.911 449.353 262.195 449.362 261.368 C 449.367 260.994 449.303 260.65 449.171 260.333 C 449.043 260.012 448.767 259.704 448.34 259.411 C 447.906 259.118 447.298 258.836 446.514 258.566 C 445.723 258.302 444.686 258.034 443.403 257.765 C 440.904 257.236 439.037 256.523 437.801 255.627 C 436.559 254.73 435.947 253.55 435.964 252.084 C 435.973 251.308 436.152 250.582 436.5 249.903 C 436.853 249.22 437.367 248.63 438.042 248.136 C 438.722 247.642 439.557 247.257 440.546 246.981 C 441.536 246.699 442.688 246.559 444.003 246.559 C 445.476 246.559 446.895 246.806 448.261 247.3 C 449.621 247.794 450.773 248.375 451.717 249.041 L 450.111 251.162 C 449.223 250.547 448.242 250.052 447.171 249.679 C 446.092 249.306 444.936 249.119 443.7 249.119 C 442.068 249.119 440.92 249.401 440.256 249.964 C 439.592 250.521 439.256 251.173 439.247 251.92 C 439.237 252.776 439.663 253.426 440.525 253.868 C 441.387 254.305 442.804 254.739 444.777 255.17 C 446.376 255.515 447.687 255.879 448.708 256.265 C 449.729 256.655 450.535 257.09 451.124 257.566 C 451.708 258.049 452.109 258.584 452.33 259.17 C 452.544 259.756 452.646 260.422 452.638 261.169 C 452.628 261.974 452.435 262.721 452.059 263.411 C 451.682 264.106 451.128 264.721 450.396 265.255 C 449.67 265.79 448.77 266.209 447.695 266.514 C 446.626 266.824 445.408 266.979 444.043 266.979 Z" style={{lineHeight: "71.1524px", whiteSpace: "pre"}} transform="matrix(0.427532, -0.904, 0.904, 0.427532, -79.580588, 387.344006)"/>
                        </svg>

                    </div>
                    {socialLinks.map(bButton => (
                        <Button
                            key={bButton.className}
                            type={bButton.type}
                            className={bButton.className}
                            linkTo={bButton.linkTo}
                            value=""
                            linePos={bButton.linePos}
                        ></Button>
                    ))}
                </div>
                <p className="ThanksTag">Made with ♥ by Me</p>
                <div className="legalities">
                    <a className="PrivacyPolicy" target="_self" href="#/Privacy-Policy">Privacy Policy</a>

                    <p className="Copyright">© 2021 Malcolm Baatjies. All rights reserved</p>

                    <a className="SiteMap" href="https://malcolmbaatjies.me/sitemap">Sitemap</a>
                </div>
        </footer>
    );
}

export default Footer;
