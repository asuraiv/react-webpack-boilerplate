// action 정의
export const READ = "board/READ";

export const readItems = (items) => {
	return {type: READ, payload: {items}};
};