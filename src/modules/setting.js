const SET_SETTING = 'setting/SET_SETTING';
const UPDATE = 'setting/UPDATE';

export const setSetting = (setting) => ({ type: SET_SETTING, setting });
export const update = (setting) => ({ type: UPDATE, setting });

const initialState = {
	darkMode: false,
};

export default function setting(state = initialState, action) {
	switch (action.type) {
		case SET_SETTING:
			return {
				...state,
				setting: action.setting,
			};
		case UPDATE:
			return {
				...state,
				setting: action.setting,
			};
		default:
			return state;
	}
}
