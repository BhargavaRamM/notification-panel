import {PanelCtrl} from 'app/plugins/sdk';
import _ from 'lodash';
import moment from 'moment';
import $ from 'jquery';
import angular from 'angular';
import * as Notify from './external/notify.min';
import './external/notify';



export class NotifyCtrl extends PanelCtrl {
    
    constructor($scope,$injector) {
	super($scope,$injector);
	this.$scope = $scope;

	_.defaults(this.panel, this.panelDefaults);
	this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
	this.events.on('refresh', this.onRefresh.bind(this));
	this.events.on('render', this.onRender.bind(this));
	//this.events.on('data-received',this.onDataReceived.bind(this));
	//this.events.on('data-error',this.onDataError.bind(this));
	console.log("Notification Panel constructor done...");
	//this.renderNotification();
    }

    onInitEditMode() {
	this.addEditorTab('Options','public/plugins/grafana-clock-panel/editor.html',2);
	//this.editorTabIndex = 1;
	}

	setContainer(container) {
		this.panelContainer = container;
	}
	
    onRefresh() {
	this.render();
    }

    onRender() {
	'======> Come Back Here. This wont work <======'
	this.renderNotification();
	this.renderingCompleted();
    }
    
    
    renderNotification() {
	this.time = moment().format('hh:mm:ss');
	this.note = $.notify( 'success', 'Settings successfully saved.',this.time );
	this.$timeout(() => { this.renderNotification();},1000);
    }
} 

NotifyCtrl.templateUrl = 'module.html';
