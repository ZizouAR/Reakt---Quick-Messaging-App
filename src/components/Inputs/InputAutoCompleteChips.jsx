import React, { Component } from 'react';
import { Platform } from 'react-native';
import TagInput from 'react-native-tag-input';



export default class InputAutoCompleteChips extends Component {
  state = {
    tags: this.props.tags,
    text: "",
    inputProps: {
      keyboardType: 'default',
      placeholder: this.props.placeholder,
      autoFocus: this.props.autoFocus,
      style: {
        fontSize: 14,
        marginVertical: Platform.OS == 'ios' ? 10 : -2,
    }}
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
        inputProps={this.state.inputProps}
        tagContainerStyle={{height: "80%", borderRadius: 10}}
      />
    );
  }
}