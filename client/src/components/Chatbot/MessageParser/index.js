class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("hello") ||
            lowerCaseMessage.includes("hey") ||
            lowerCaseMessage.includes("what's up")){
            this.actionProvider.greet()
        }
      console.log(lowerCaseMessage)
    }
  }
  
  export default MessageParser