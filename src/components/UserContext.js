import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
	const [userEmail, setUserEmail] = useState('')

	return (
		<UserContext.Provider value={{ userEmail, setUserEmail }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUser = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('useUser deve ser usado dentro de um UserProvider')
	}
	return context
}
