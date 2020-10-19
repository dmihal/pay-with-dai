import React from 'react';
import QRCodeImpl from "qr.js/lib/QRCode";
import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";

const cache = {};

const getCells = (value, level) => {
  const cacheKey = `${value}:${level}`;
  if (!cache[cacheKey]) {
    // adapted from https://github.com/zpao/qrcode.react/blob/master/src/index.js
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();
    cache[cacheKey] = qrcode.modules;
  }

  return cache[cacheKey];
}

const QRSVG: React.FC = ({
    value = "",
    level = "L",
    bgColor = "#FFFFFF",
    fgColor = "#000000",
    cellClassPrefix = "",
    ...otherProps
}) => {
  const cells = getCells(value, level);
  const cellSize = 200 / cells.length;

  const cellClassName = cellClassPrefix && `${cellClassPrefix}-cell`;
  const emptyCellClassName =
      cellClassPrefix && `${cellClassName} ${cellClassPrefix}-cell-empty`;
  const filledCellClassName =
      cellClassPrefix && `${cellClassName} ${cellClassPrefix}-cell-filled`;

  let cellIndex = 0; // we use simple order as a key just to avoid the key warning here

  return (
    <g {...otherProps}>
      {cells.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const className = cell ? filledCellClassName : emptyCellClassName;
          const classNameProp = className ? { className } : null;

          // Only use the fill if no cellClassPrefix was set. See https://github.com/no23reason/react-qr-svg/issues/136 for reasoning.
          const fill = !classNameProp && (cell ? fgColor : bgColor);
          const styleProp = fill ? { style: { fill } } : null;
          return (
            <rect
              height={cellSize}
              key={cellIndex++} // string was too slow here
              {...styleProp}
              {...classNameProp}
              width={cellSize}
              x={colIndex * cellSize}
              y={rowIndex * cellSize}
            />
          );
        }),
      )}
    </g>
  );
}

export default QRSVG;

// QRSVG.propTypes = {
//     value: PropTypes.string.isRequired,
//     size: PropTypes.number,
//     level: PropTypes.oneOf(["L", "M", "Q", "H"]),
//     bgColor: PropTypes.string,
//     fgColor: PropTypes.string,
//     cellClassPrefix: PropTypes.string,
// };
