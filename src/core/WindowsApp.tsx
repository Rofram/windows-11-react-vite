import { makeAutoObservable } from "mobx";
import { Observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { BsArrowClockwise, BsArrowLeft, BsArrowRight, BsDash, BsX } from "react-icons/bs";
import * as Styled from './styles'
import windows11Store from '../store'
import { BiRectangle } from "react-icons/bi";

class WindowsAppStore {
  dragging = false;
  mouseOffset = { x: 0, y: 0 };
  containerPosition = { x: 0, y: 0 };
  search = "";
  input: HTMLInputElement | null = null;
  container: HTMLDivElement | null = null;

  titleBar: boolean = true;
  systemMenu: boolean = true;
  minimizeButton: boolean = true;
  maximizeButton: boolean = true;

  setMinimizeButton(minimizeButton: boolean) {
    this.minimizeButton = minimizeButton;
  }

  setMaximizeButton(maximizeButton: boolean) {
    this.maximizeButton = maximizeButton;
  }

  constructor() {
    makeAutoObservable(this);
  }

  setContainerRef(ref: HTMLDivElement | null) {
    this.container = ref;
  }

  setInputRef(ref: HTMLInputElement | null) {
    this.input = ref;
  }

  setDragging(dragging: boolean) {
    this.dragging = dragging;
  }

  onMount() {
    document.addEventListener("keyup", this.onKeyUp);
  }

  onUnmount() {
    document.removeEventListener("keyup", this.onKeyUp);
  }

  onKeyUp(e: KeyboardEvent) {
    if (e.key === "Enter") {
      this.search = this.input!.value;
      console.log(this.input!.value);
    }
  }

  onMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(true);
    this.mouseOffset.x = e.clientX;
    this.mouseOffset.y = e.clientY;
    this.containerPosition.x = this.container?.offsetLeft ?? 0;
    this.containerPosition.y = this.container?.offsetTop ?? 0;
  }

  onMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(false);
  }

  onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (this.dragging) {
      this.container!.style.left = `${
        e.clientX + this.containerPosition.x - this.mouseOffset.x
      }px`;
      this.container!.style.top = `${
        e.clientY + this.containerPosition.y - this.mouseOffset.y
      }px`;
    }
  }

  onMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setDragging(false);
  }

}

export class WindowsApp {

  store= new WindowsAppStore();
  
  setMinimizeButton(minimizeButton: boolean) {
    this.store.setMinimizeButton(minimizeButton);
  }

  setMaximizeButton(maximizeButton: boolean) {
    this.store.setMaximizeButton(maximizeButton);
  }

  render(child?: React.ReactNode) {
    return <Observer>
      {() => {
        
        useEffect(() => {
          this.store.onMount()
          return () => this.store.onUnmount()
        }, [])

        return (
          <Styled.Container 
            ref={ref => this.store.setContainerRef(ref)}
            requestToClose={windows11Store.appsOpened.microsoftEdge.requestToClose}
          >
            <Styled.Header 
              onMouseDown={this.store.onMouseDown.bind(this.store)}
              onMouseUp={this.store.onMouseUp.bind(this.store)} 
              onMouseMove={this.store.onMouseMove.bind(this.store)} 
              onMouseLeave={this.store.onMouseLeave.bind(this.store)}
            >
              <div>
                <BsArrowLeft />
                <BsArrowRight />
                <BsArrowClockwise />
              </div>
              <input type="text" onChange={e => this.store.search = e.target.value} ref={ref => this.store.setInputRef(ref)} />
              <div>
                {this.store.minimizeButton && <BsDash size={20} color="#fff" />}
                {this.store.maximizeButton && <BiRectangle size={15} color="#fff" />}
                <BsX size={20} color="#fff" onClick={() => windows11Store.toggleAppOpened('microsoftEdge')} />
              </div>
            </Styled.Header>
            <Styled.Media>
              {child}
            </Styled.Media>
          </Styled.Container>
        )
    }}
    </Observer>
  }
}
