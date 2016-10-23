'use strict';

System.register(['app/plugins/sdk', 'lodash', 'moment', 'jquery', 'angular', './external/notify.min', './external/notify'], function (_export, _context) {
			"use strict";

			var PanelCtrl, _, moment, $, angular, Notify, _createClass, NotifyCtrl;

			function _classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) {
									throw new TypeError("Cannot call a class as a function");
						}
			}

			function _possibleConstructorReturn(self, call) {
						if (!self) {
									throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						}

						return call && (typeof call === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
						if (typeof superClass !== "function" && superClass !== null) {
									throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
						}

						subClass.prototype = Object.create(superClass && superClass.prototype, {
									constructor: {
												value: subClass,
												enumerable: false,
												writable: true,
												configurable: true
									}
						});
						if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
			}

			return {
						setters: [function (_appPluginsSdk) {
									PanelCtrl = _appPluginsSdk.PanelCtrl;
						}, function (_lodash) {
									_ = _lodash.default;
						}, function (_moment) {
									moment = _moment.default;
						}, function (_jquery) {
									$ = _jquery.default;
						}, function (_angular) {
									angular = _angular.default;
						}, function (_externalNotifyMin) {
									Notify = _externalNotifyMin;
						}, function (_externalNotify) {}],
						execute: function () {
									_createClass = function () {
												function defineProperties(target, props) {
															for (var i = 0; i < props.length; i++) {
																		var descriptor = props[i];
																		descriptor.enumerable = descriptor.enumerable || false;
																		descriptor.configurable = true;
																		if ("value" in descriptor) descriptor.writable = true;
																		Object.defineProperty(target, descriptor.key, descriptor);
															}
												}

												return function (Constructor, protoProps, staticProps) {
															if (protoProps) defineProperties(Constructor.prototype, protoProps);
															if (staticProps) defineProperties(Constructor, staticProps);
															return Constructor;
												};
									}();

									_export('NotifyCtrl', NotifyCtrl = function (_PanelCtrl) {
												_inherits(NotifyCtrl, _PanelCtrl);

												function NotifyCtrl($scope, $injector) {
															_classCallCheck(this, NotifyCtrl);

															var _this = _possibleConstructorReturn(this, (NotifyCtrl.__proto__ || Object.getPrototypeOf(NotifyCtrl)).call(this, $scope, $injector));

															_this.$scope = $scope;

															_.defaults(_this.panel, _this.panelDefaults);
															_this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
															_this.events.on('refresh', _this.onRefresh.bind(_this));
															_this.events.on('render', _this.onRender.bind(_this));
															//this.events.on('data-received',this.onDataReceived.bind(this));
															//this.events.on('data-error',this.onDataError.bind(this));
															console.log("Notification Panel constructor done...");
															//this.renderNotification();
															return _this;
												}

												_createClass(NotifyCtrl, [{
															key: 'onInitEditMode',
															value: function onInitEditMode() {
																		this.addEditorTab('Options', 'public/plugins/grafana-clock-panel/editor.html', 2);
																		//this.editorTabIndex = 1;
															}
												}, {
															key: 'setContainer',
															value: function setContainer(container) {
																		this.panelContainer = container;
															}
												}, {
															key: 'onRefresh',
															value: function onRefresh() {
																		this.render();
															}
												}, {
															key: 'onRender',
															value: function onRender() {
																		'======> Come Back Here. This wont work <======';

																		this.renderNotification();
																		this.renderingCompleted();
															}
												}, {
															key: 'renderNotification',
															value: function renderNotification() {
																		var _this2 = this;

																		this.time = moment().format('hh:mm:ss');
																		this.note = $.notify('success', 'Settings successfully saved.', this.time);
																		this.$timeout(function () {
																					_this2.renderNotification();
																		}, 1000);
															}
												}]);

												return NotifyCtrl;
									}(PanelCtrl));

									_export('NotifyCtrl', NotifyCtrl);

									NotifyCtrl.templateUrl = 'module.html';
						}
			};
});
//# sourceMappingURL=notify_ctrl.js.map
