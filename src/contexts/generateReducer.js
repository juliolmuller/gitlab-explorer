
function generateReducer(context, mutations) {
  return (state, { type, payload }) => {
    try {
      return mutations[type](state, payload)
    } catch (error) {
      if (/.* is not a function$/.test(error.message)) {
        throw new Error(`Action type "${type}" does not exist in ${context.name} (${error.message}).`)
      }

      throw error
    }
  }
}

export default generateReducer
