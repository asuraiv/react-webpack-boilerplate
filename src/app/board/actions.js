// action 정의
export const READ = "board/READ";

// action 생성자
export const readItems = (items) => {
	return {type: READ, payload: {items}};
};