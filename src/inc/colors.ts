// @ts-expect-error needed for dual-bundling
import chalk from 'chalk'

export const rainbow = (string: string) => {
  const ignoreChars = /[^!-~]/g
  if (!string || string.length === 0) return string

  const hueStep = 360 / string.replace(ignoreChars, '').length

  let hue = 0
  const characters = []
  for (const character of string) {
    if (character.match(ignoreChars)) {
      characters.push(character)
    } else {
      const [r, g, b] = convertHslToRgb([hue, 100, 50])
      characters.push(chalk.rgb(r, g, b)(character))
      hue = (hue + hueStep) % 360
    }
  }

  return characters.join('')
}

export const convertHslToRgb = (hsl: number[]) => {
  const h = hsl[0] / 360
  const s = hsl[1] / 100
  const l = hsl[2] / 100
  let t2
  let t3
  let val

  if (s === 0) {
    val = l * 255
    return [val, val, val]
  }

  if (l < 0.5) {
    t2 = l * (1 + s)
  } else {
    t2 = l + s - l * s
  }

  const t1 = 2 * l - t2

  const rgb = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    t3 = h + (1 / 3) * -(i - 1)
    if (t3 < 0) {
      t3++
    }

    if (t3 > 1) {
      t3--
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3
    } else if (2 * t3 < 1) {
      val = t2
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
    } else {
      val = t1
    }

    rgb[i] = Math.round(val * 255)
  }

  return rgb
}
