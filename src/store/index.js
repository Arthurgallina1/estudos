import create from 'zustand';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
  return data;
};

const authStore = create((set, get) => ({
  bears: 0,
  res: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  type: (input) => set({ bears: input }),
  getAll: () => get(),
  fetch: fetchData,
  getFetched: async () => {
    const res = await fetchData();
    set({ res });
  },
}));

export { authStore };
