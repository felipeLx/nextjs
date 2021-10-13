function useUser({redirectTo}) {
    const [user, setUser] = useState(``)

    useEffect(() => {

    }, [user])

    return {redirectTo, user}
}

export {
    useUser,
}