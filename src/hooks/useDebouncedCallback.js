import { useCallback } from 'react'
import debounce from 'lodash.debounce'

function useDebouncedCallback(fn, delay, deps = []) {
  return useCallback(debounce(fn, delay), deps)
}

export default useDebouncedCallback
