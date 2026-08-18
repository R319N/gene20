import hexToRgb from './hexToRgb'

function rgba(color, opacity) {
  if (typeof color === 'function') {
    return (...args) => `rgba(${hexToRgb(color(...args))}, ${opacity})`
  }

  return `rgba(${hexToRgb(color)}, ${opacity})`
}

export default rgba
