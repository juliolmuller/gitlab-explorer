
function generateMask(dispatch, type) {
  return (payload) => {
    dispatch({ type, payload })
  }
}

function generateActions(actionsMap, dispatcher) {
  const rawActionsEntries = Object.entries(actionsMap)
  const actionEntries = rawActionsEntries.map(([name, mutation]) => [name, generateMask(dispatcher, mutation.name)])

  return Object.fromEntries(actionEntries)
}

export default generateActions
