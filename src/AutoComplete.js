import React from 'react';
class AutoComplete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestion: [],
            showSuggestion: false,
            userInput: ""
        };
    }

    onChange = e => {
        let list = this.props.list;
        let userInput = e.target.value;
        let filteredSuggestions = list.filter(
            elem => elem.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
        );
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: filteredSuggestions, 
            showSuggestion: true,
            userInput: userInput
        })
    }

    onClick = (e, suggestion) => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestion: false,
            //userInput: e.target.innerText
            userInput: suggestion
        });
    }

    onKeyDown = (e) => {
        let curSuggestion = this.state.activeSuggestion;
        if (e.keyCode === 13){
            this.setState({
                activeSuggestion: 0,
                showSuggestion: false,
                userInput: this.state.filteredSuggestions[curSuggestion]
            });
        }
        else if (e.keyCode === 38){
            if (this.state.activeSuggestion === 0)
                return;
            this.setState((preState) => { return {activeSuggestion: preState.activeSuggestion - 1}});
        }
        else if (e.keyCode === 40){
            if ( this.state.activeSuggestion === this.state.filteredSuggestions.length - 1)
                return;
            this.setState((preState) => {return {activeSuggestion: preState.activeSuggestion + 1}});
        }
    }

    render() {
        let suggestionsListComponent;
        if (this.state.showSuggestion && this.state.userInput){
            if (this.state.filteredSuggestions.length){
                suggestionsListComponent = (
                    <ul className = "suggestions">
                        {this.state.filteredSuggestions.map((suggestion, index) => {
                            let className;
                            if (index === this.state.activeSuggestion)
                                className = "suggestion-active";
                            return (
                                <li className = {className} key = {suggestion} onClick = {(e) => this.onClick(e, suggestion)}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            }
            else{
                suggestionsListComponent = (
                    <div className = "no-suggestions">
                        No suggestions, you're on your own!
                    </div>
                );
            }
        }
        return (
            <React.Fragment>
                <input
                    type = "text"
                    onChange = {this.onChange}
                    onKeyDown = {this.onKeyDown}
                    value = {this.state.userInput}
                />
                {suggestionsListComponent}
            </React.Fragment>
        );
    }
}
export default AutoComplete;