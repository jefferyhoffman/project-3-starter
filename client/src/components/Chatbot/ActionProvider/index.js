class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatbotState(greetingMessage)
      };
      
    handleStyleOptionsList = () => {
        const message = this.createChatBotMessage(
            "It's a vibe, click a link to get saucy:",
            {
                widget: "saintGeorgeLinks",
            }
        );
        this.updateChatbotState(message);
    };

    updateChatbotState(message) {
 
        // NOTE: This function is set in the constructor, and is passed in from the top level Chatbot component. 
        // The setState function here actually manipulates the 
        // top level state of the Chatbot, so it's
        // important that we make sure that we preserve the previous state.
         
            
           this.setState(prevState => ({
                ...prevState, messages: [...prevState.messages, message]
            }))
        }
  }
  
  export default ActionProvider;
  