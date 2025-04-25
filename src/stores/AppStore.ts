import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AppStoreType = {
    searchInput: string,
    setSearchInput: (newState: string) => void,
    currentCategory: string,
    setCurrentCategory: (newState: string) => void,
    filterPrice: string,
    setFilterPrice: (newState: string) => void,
    confirmOrderPopup: boolean,
    setConfirmOrderPopup: (newState: boolean) => void
}

const useAppStore = create<AppStoreType>()(
    persist(
      (set) => ({
          searchInput: "",
          setSearchInput: (newState) => {
            set({ searchInput: newState.toLowerCase() })
          },
          currentCategory: "All",
          setCurrentCategory: (newState) => {
            set({ currentCategory: newState.toLowerCase() })
          },
          filterPrice: "",
          setFilterPrice: (newState) => {
            set({ filterPrice: newState.toLowerCase() })
          },
          confirmOrderPopup: false,
          setConfirmOrderPopup: (newState) => {
            set({ confirmOrderPopup: newState })
          },
      }),
      {
        name: 'app-storage', 
      }
    )
);

export default useAppStore;