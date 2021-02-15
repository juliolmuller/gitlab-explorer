import { useEffect } from 'react'
import { useAuth } from '../../hooks'

function LogOut() {
  const { signOut } = useAuth()

  useEffect(() => {
    signOut()
  }, [])

  return null
}

export default LogOut
