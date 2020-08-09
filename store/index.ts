import { GetterTree, ActionTree, MutationTree } from 'vuex';

export type Theme = 'system' | 'light' | 'dark';

export interface RootState {
  theme: Theme;
}

export const state = (): RootState => ({
  theme: 'system',
});

export const getters: GetterTree<RootState, RootState> = {
  theme: (state) => state.theme,
};

export const mutations: MutationTree<RootState> = {
  SET_THEME: (state, theme: Theme) => (state.theme = theme),
};

export const actions: ActionTree<RootState, RootState> = {
  toggleTheme({ commit, state }) {
    switch (state.theme) {
      case 'system':
        commit('SET_THEME', 'light');
        break;
      case 'light':
        commit('SET_THEME', 'dark');
        break;
      case 'dark':
        commit('SET_THEME', 'system');
    }
  },
};
