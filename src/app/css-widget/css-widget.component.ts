import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-css-widget',
  templateUrl: './css-widget.component.html',
  styleUrls: ['./css-widget.component.scss']
})
export class CssWidgetComponent implements OnInit {

  //outputs related to Flex Container
  @Output() sendDflex = new EventEmitter<any>();
  @Output() sendWrap = new EventEmitter<any>();
  @Output() sendJustCont = new EventEmitter<any>();
  @Output() sendDir = new EventEmitter<any>();
  @Output() sendAlignCont = new EventEmitter<any>();
  @Output() sendAlignItems = new EventEmitter<any>();

  //inputs and outputs related to flex itmes
  @Input() selectedFlexItem;
  @Output() sendItemOrder = new EventEmitter<any>();
  @Output() sendFlexGrow = new EventEmitter<any>();
  @Output() sendFlexShrink = new EventEmitter<any>();
  @Output() sendFlexBasis = new EventEmitter<any>();
  @Output() sendAlignSelf = new EventEmitter<any>();
  
  //properties for flex container element
  dFlex = 'block';
  flexWrap = 'nowrap';
  flexDir = 'row';
  justifyContnet = 'flex-start';
  alignItems = 'stretch';
  alignContent = 'stretch';

  //properties for flex item elements
  itemOrder = 0;
  flexGrow = 0;
  flexShrink = 1;
  flexBasis = 'auto';
  alignSelf = 'auto';

  constructor() { }

  ngOnInit() {
  }

  //flex container functions
  onDflexChange = () => this.sendDflex.emit(this.dFlex);
  onWrapChange = () => this.sendWrap.emit(this.flexWrap);
  onJustContChange = () => this.sendJustCont.emit(this.justifyContnet);
  onDirChange = () => this.sendDir.emit(this.flexDir);
  onAlignItemsChange = () => this.sendAlignItems.emit(this.alignItems);
  onAlignContChange = () => this.sendAlignCont.emit(this.alignContent);

  //flex item functions
  onOrderChange = () => this.sendItemOrder.emit(this.itemOrder);
  onGrowChange = () => this.sendFlexGrow.emit(this.flexGrow);
  onShrinkChange = () => this.sendFlexShrink.emit(this.flexShrink);
  onBasisChange = () => this.sendFlexBasis.emit(this.flexBasis);
  onAlignSelfChange = () => this.sendAlignSelf.emit(this.alignSelf);
}