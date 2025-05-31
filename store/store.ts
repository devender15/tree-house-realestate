import { create } from 'zustand';

type StoreState = {
    enquiry: boolean;
    setEnquiry: (value: boolean) => void;
};

const useEnquiryStore = create<StoreState>((set) => ({
    enquiry: false,
    setEnquiry: (value) => set({ enquiry: value }),
}));

export default useEnquiryStore;