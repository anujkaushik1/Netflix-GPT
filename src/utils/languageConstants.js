export const languagesSupport = {
  en: { name: "English", key: "en" },
  hi: { name: "Hindi", key: "hi" },
  sp: { name: "Spanish", key: "sp" },
};

export const lang = {
  [languagesSupport.en.key]: {
    search: "Search",
    gptPlaceHolderText: "What's on your mind today ?",
  },

  [languagesSupport.hi.key]: {
    search: "खोज",
    gptPlaceHolderText: "आज आपके मन में क्या है?",
  },

  [languagesSupport.sp.key]: {
    search: "Buscar",
    gptPlaceHolderText: "¿Qué tienes en mente hoy?",
  },
};
