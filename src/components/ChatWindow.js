import React, { Component } from 'react';
import '../css/chatWindow.css';

export class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPromptIndex: 0,
            inputValue: '',
            isFocused: false
        };
        this.prompts = [
            "What are your qualifications?",
            "Tell me about your experience",
            "What technologies do you work with?",
            "What projects have you worked on?",
            "What are your interests?",
            "What's your background?",
            "What skills do you have?",
            "What kind of work do you do?"
        ];
        this.intervalId = null;
    }

    componentDidMount() {
        // Cycle through prompts every 3 seconds
        this.intervalId = setInterval(() => {
            if (!this.state.isFocused && !this.state.inputValue) {
                this.setState(prevState => ({
                    currentPromptIndex: (prevState.currentPromptIndex + 1) % this.prompts.length
                }));
            }
        }, 3000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    handleFocus = () => {
        this.setState({ isFocused: true });
    };

    handleBlur = () => {
        this.setState({ isFocused: false });
    };

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for future AI chat functionality
        console.log('Message submitted:', this.state.inputValue);
        this.setState({ inputValue: '' });
    };

    render() {
        const { currentPromptIndex, inputValue, isFocused } = this.state;
        const currentPrompt = this.prompts[currentPromptIndex];
        const showPlaceholder = !inputValue && !isFocused;

        return (
            <div className="ChatWindow">
                <div className="ChatWindow-container">
                   
                    <div className="ChatWindow-body">
                        <div className="ChatWindow-message">
                            <p>Hi! I'm here to help you learn more about Travis. Ask me anything!</p>
                        </div>
                    </div>
                    <form className="ChatWindow-input-container" onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            className="ChatWindow-input"
                            value={inputValue}
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            placeholder={showPlaceholder ? currentPrompt : "Type your message..."}
                        />
                        <button type="submit" className="ChatWindow-send" disabled={!inputValue.trim()}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
