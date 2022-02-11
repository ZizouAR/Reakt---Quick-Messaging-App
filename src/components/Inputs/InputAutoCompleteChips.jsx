import React, { Component } from 'react';
import { Platform } from 'react-native';
import TagInput from 'react-native-tag-input';


const inputProps = {
  keyboardType: 'default',
  placeholder: '@user',
  autoFocus: true,
  style: {
    fontSize: 14,
    marginVertical: Platform.OS == 'ios' ? 10 : -2,
  },
};



export default class InputAutoCompleteChips extends Component {
  state = {
    tags: ["Abdelhamid Larachi"],
    text: ""
  };

  onChangeTags = (tags) => {
    this.setState({ tags });
  }

  onChangeText = (text) => {
    this.setState({ text });
    
    const lastTyped = text.charAt(text.length - 1);
    const parseWhen = [',', ' ', ';', '\n'];

    if(text.length > 1){
    if (parseWhen.indexOf(lastTyped) > -1) {
      this.setState({
        tags: [...this.state.tags, this.state.text],
        text: "",
      });
    }}
}

  labelExtractor = (tag) => tag;


  render() {
    return (
        <TagInput
        value={this.state.tags}
        onChange={this.onChangeTags}
        labelExtractor={this.labelExtractor}
        text={this.state.text}
        onChangeText={this.onChangeText}
        tagColor="#007aff"
        tagTextColor="white"
        inputProps={inputProps}
        tagContainerStyle={{height: "80%", borderRadius: 10}}
      />
    );
  }
}