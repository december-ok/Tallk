const INIT_ROOM = 'room/INIT_ROOM';

const ADD_ROOM = 'room/ADD_ROOM';
const REMOVE_ROOM = 'room/REMOVE_ROOM';
const CHANGE_ROOM_PEOPLE = 'room/CHANGEROOMPEOPLE';
const ADD_ID = 'room/ADD_ID';
// 과거의 채팅 데이터를 불러올 경우
const ADD_PREV_CHATOBJLIST = 'room/ADD_PREV_CHATOBJLIST';
// 최신 채팅을 가져올경우, id, obj 둘다 설정
const ADD_REAL_CHAT = 'room/ADD_REAL_CHAT';

export const initRoom = (data) => ({
	type: INIT_ROOM,
	data,
});
export const addRoom = (roomObj) => ({
	type: ADD_ROOM,
	data: { roomObj },
});
export const removeRoom = (roomId) => ({
	type: REMOVE_ROOM,
	data: { roomId },
});
export const changeRoomPeople = (roomId, userId, isOut) => ({
	type: CHANGE_ROOM_PEOPLE,
	data: { roomId, userId, isOut },
});
export const addId = (roomId, chat) => ({
	type: ADD_ID,
	data: { roomId, chat },
});
export const addPrevChatObjList = (roomId, chatObjList) => ({
	type: ADD_PREV_CHATOBJLIST,
	data: { roomId, chatObjList },
});
export const addRealChat = (roomId, chat) => ({
	type: ADD_REAL_CHAT,
	data: { roomId, chat },
});

const initialState = new Map();

export default function room(state = initialState, action) {
	const newMap = new Map();
	state.forEach((value, key) => {
		newMap.set(String(key), value);
	});
	let obj;
	switch (action.type) {
		case INIT_ROOM:
			const { roomList } = action.data;
			roomList.forEach((item) => {
				newMap.set(String(item._id), {
					...item,
					chatObjList: [],
					chatLoaded: false,
					lastLoaded: '',
				});
			});
			console.log('done!');
			return newMap;
		case ADD_ROOM:
			newMap.set(action.data.roomObj._id, {
				...action.data.roomObj,
				roomId: action.data.roomObj._id,
				chatObjList: [],
			});
			return newMap;
		case REMOVE_ROOM:
			newMap.delete(action.data.roomId);
			return newMap;
		case CHANGE_ROOM_PEOPLE:
			obj = state.get(action.data.roomId);
			if (action.data.isOut) {
				obj.userList = obj.userList.filter(
					(item) => item._id !== action.data.userId
				);
			} else {
				obj.userList.push(action.data.userId);
			}
			newMap.set(String(action.data.roomId), obj);
			return newMap;
		case ADD_PREV_CHATOBJLIST:
			obj = state.get(action.data.roomId);
			obj.chatObjList.unshift(...action.data.chatObjList);
			obj.chatLoaded = true;
			obj.lastLoaded = obj.chatObjList[0]._id;
			newMap.set(String(action.data.roomId), obj);
			return newMap;
		case ADD_REAL_CHAT:
			obj = state.get(action.data.roomId);
			obj.chatIdList.push(action.data.chat._id);
			obj.chatObjList.push(action.data.chat);
			newMap.set(String(action.data.roomId), obj);
			return newMap;
		default:
			return state;
	}
}
