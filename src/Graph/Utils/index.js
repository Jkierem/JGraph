export const abstractMethodError = (methodName) => {
  throw Error(`Abstract method ${methodName} not implemented.`)
}

export const keysOf = (obj) => obj ? Object.keys(obj) : []
export const isDefined = (obj) => obj !== undefined && obj !== null
export const prop = (name) => (obj) => obj?.[name]
