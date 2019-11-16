import { Message, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes } from './types'

export const sendMessage = (newMessage: Message): ChatActionTypes => {
	return {
		type: SEND_MESSAGE,
		payload: newMessage
	}
}

export const deleteMessage = (timestamp: number): ChatActionTypes => {
	return {
		type: DELETE_MESSAGE,
		meta: {
			timestamp
		}
	}
}