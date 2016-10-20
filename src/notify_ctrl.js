import {PanelCtrl} from 'app/plugins/sdk';
import _ from 'lodash';
import moment from 'moment';



export class NotifyCtrl extends PanelCtrl {
    
    constructor($scope,$injector) {
	super($scope,$injector);
	this.$scope = $scope;

	_.defaults(this.panel, this.panelDefaults);
	this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
	this.events.on('refresh', this.onRefresh.bind(this));
	this.events.on('render', this.onRender.bind(this));
	//this.updateNotification();
    }

    onInitEditMode() {
	this.addEditorTab('Options','editor.html');
	this.editorTabIndex = 1;
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
	this.note = notification.notify( 'success', 'Settings successfully saved.',this.time );
	this.$timeout(() => { this.renderNotification();},1000);
    }
} 

NotifyCtrl.templateUrl = 'module.html';
