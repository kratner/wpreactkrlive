import React, { Component } from 'react';

class KRMonogramSVG extends Component {
  render() {
    return (
      <div className="kr-monogram__parent">
        <div className="kr-monogram">
          <svg className="icon">
            <use
              className="sprite__monogram"
              xmlnsXlink="#monogram"
            />
          </svg>
        </div>
        <div className="svg-sprites">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <filter id="drop-shadow">
                <feGaussianBlur
                  in="SourceAlpha"
                  stdDeviation="1"
                />
                <feOffset
                  dx="1"
                  dy="1"
                  result="offsetblur"
                />
                <feFlood floodColor="rgba(0,0,0,1)" />
                <feComposite
                  in2="offsetblur"
                  operator="in"
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <symbol
                id="monogram"
                viewBox="560 1790 200 200"
              >
                <polygon
                  id="glyph_x5F__x5F_right"
                  points="674.331,1891.881 746,1939.049 682.765,1891.277
                711.96,1859.64 657.285,1862.205 698.104,1864.282 "
                />
                <polygon
                  id="glyph_x5F__x5F_middle"
                  points="693.824,1963.297
                638.749,1861.327 693.824,1804.035 649.28,1861.851 "
                />
                <polygon
                  id="glyph_x5F__x5F_left"
                  points="600.744,1977.16
                660.771,1913.468 591.762,1860.794 631.498,1860.705
                574.999,1858.154 653.576,1915.606 "
                />
              </symbol>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
}

export default KRMonogramSVG;
