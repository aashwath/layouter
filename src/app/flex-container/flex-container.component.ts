import { Component, OnInit, ChangeDetectorRef, OnDestroy, OnChanges } from "@angular/core";
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: "app-flex-container",
  templateUrl: "./flex-container.component.html",
  styleUrls: ["./flex-container.component.scss"]
})
export class FlexContainerComponent implements OnInit, OnDestroy {
  
  flexContainerStyles: any = {
    display: 'block',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'stretch'
  };

  flexItems = Array.from({length: 8}, (_, i) => i + 1);

  flexItemStyles: any = {
    order: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'auto',
  }

  selected: number;
	nthChild: number;
	changed: boolean;

  mobileQuery: MediaQueryList;
  opened: boolean;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 992px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
	}
	
  onItemSelect = (i: number, flex: number) => {
    this.selected = i;
    this.nthChild = flex
  }

  //functions related to flex container
  onDflexChanged = (prop: any) => this.flexContainerStyles.display = prop;
  onWrapChanged = (prop: any) => this.flexContainerStyles.flexWrap = prop;
  onJustContChange = (prop: any) => this.flexContainerStyles.justifyContent = prop;
  onDirChange = (prop: any) => this.flexContainerStyles.flexDirection = prop;
  onAlignItemsChange = (prop: any) => this.flexContainerStyles.alignItems = prop;
  onAlignContChange = (prop: any) => this.flexContainerStyles.alignContent = prop;

  //functions related to flex items
  onOrderChange = (prop: any) => this.flexItemStyles.order = prop;
  onGrowChange = (prop: any) => this.flexItemStyles.flexGrow = prop;
  onShrinkChange = (prop: any) => this.flexItemStyles.flexShrink = prop;
  onBasisChange = (prop: any) => this.flexItemStyles.flexBasis = prop;
  onAlignSelfChange = (prop: any) => this.flexItemStyles.alignSelf = prop;

  private _mobileQueryListener: () => void;


  ngOnDestroy(): void{
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
