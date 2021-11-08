import {
    createContext,
    useContext,
    useMemo,
    useRef,
  } from 'react'

  const Commerce = createContext({})

  export function CoreCommerceProvider({
    provider,
    children,
  }) {
    const providerRef = useRef(provider)
    // TODO: Remove the fetcherRef
    const fetcherRef = useRef(provider.fetcher)
    // If the parent re-renders this provider will re-render every
    // consumer unless we memoize the config
    const { locale, cartCookie } = providerRef.current
    const cfg = useMemo(
      () => ({ providerRef, fetcherRef, locale, cartCookie }),
      [locale, cartCookie]
    )
  
    return <Commerce.Provider value={cfg}>{children}</Commerce.Provider>
  }
  
  export function getCommerceProvider(provider) {
    return function CommerceProvider({
      children,
      ...props
    }) {
      return (
        <CoreCommerceProvider provider={{ ...provider, ...props }}>
          {children}
        </CoreCommerceProvider>
      )
    }
  }
  
  export function useCommerce() {
    return useContext(Commerce)
  }
  