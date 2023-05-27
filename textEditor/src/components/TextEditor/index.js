import React, {Component} from 'react'
import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export default class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  render() {
    const {isBold, isUnderline, isItalic} = this.state
    return (
      <MainContainer>
        <EditorContainer>
          <Container>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </Container>
          <Editor>
            <ButtonsContainer>
              <ButtonItems>
                <Button
                  data-testid="bold"
                  onClick={() => this.setState({isBold: !isBold})}
                  color={isBold ? '#faff00' : '#f1f5f9'}
                >
                  <VscBold />
                </Button>
              </ButtonItems>
              <ButtonItems>
                <Button
                  data-testid="italic"
                  onClick={() => this.setState({isItalic: !isItalic})}
                  color={isItalic ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic />
                </Button>
              </ButtonItems>
              <ButtonItems>
                <Button
                  data-testid="underline"
                  onClick={() => this.setState({isUnderline: !isUnderline})}
                  color={isUnderline ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline />
                </Button>
              </ButtonItems>
            </ButtonsContainer>
            <Text
              fontStyle={isItalic ? 'italic' : 'normal'}
              fontWeight={isBold ? 'bold' : 'normal'}
              textDecoration={isUnderline ? 'underline' : 'normal'}
              row="30"
              cols="10"
            />
          </Editor>
        </EditorContainer>
      </MainContainer>
    )
  }
}

const Text = styled.textarea`
  width: 100%;
  height: 80%;
  background-color: transparent;
  color: #fff;
  outline: none;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
`

const Button = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  border: 0;
`
const ButtonItems = styled.li`
  list-style: none;
`
const ButtonsContainer = styled.ul`
  border: 1px solid #f8fafc;
  padding: 10px;
  display: flex;
`

const Editor = styled.div`
  background-color: #25262c;
  width: 100%;
  border-radius: 30px;
  padding: 20px;
`

const Image = styled.img`
  width: 100%;
`
const Heading = styled.h1`
  color: #fff;
  text-align: center;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`

const EditorContainer = styled.div`
  background-color: #1b1c22;
  height: 80vh;
  width: 80vw;
  border-radius: 10px;
  display: flex;
  padding: 20px;
`
const Container = styled.div``