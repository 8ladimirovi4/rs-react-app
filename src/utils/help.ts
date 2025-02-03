export const HELP = {
  setToLocalStorage: (cfg: { name: string; value: string }) =>
    localStorage.setItem(cfg.name, cfg.value),
  getFromLocalStorage: (item: string) => localStorage.getItem(item),
};
