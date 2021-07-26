sap.ui.define([
	"art/bif/ur/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"art/bif/ur/util/Formatter",
	"sap/m/MessagePopover"
], function(BaseController, JSONModel, Fragment, Formatter, MessagePopover) {

	return BaseController.extend("art.bif.ur.controller.View1", {

		onInit: function() {

			this.oLocal = new JSONModel({

				"supplier": {
					"SupplierNo": "",
					"Name": "",
					"PanNo": "",
					"Building": "",
					"Street": "",
					"City": "",
					"District": "",
					"PostalCode": "",
					"Region": ""

				}

			});

			this.getView().setModel(this.oLocal, "data");

		},

		// onPopPress: function(oEvent) {

		// 	if (!this.oMP) {
				
		// 		this.createMessagePopover();
		// 	}
		// 	this.oMP.toggle(oEvent.getSource());

		// },

		fragmentfin: null,

		oFormatter: Formatter,

		onHelp: function(oEvent) {

			this.oRegion = oEvent.getSource();

			if (!this.fragmentfin) {

				Fragment.load({

					name: "art.bif.ur.fragments.popup",
					id: "idState",
					controller: this

				}).then(this.loadState.bind(this));

			} else {

				this.fragmentfin.open();

			}

		},
		loadState: function(oFragment) {

			var oDataModel = this.getView().getModel();

			this.fragmentfin = oFragment;

			this.getView().addDependent(this.fragmentfin);

			this.fragmentfin.bindAggregation("items", {

				path: "/ZshStateSet",
				template: new sap.m.StandardListItem({

					title: "{Bland}",
					description: "{Bezei}"

				})

			});

			this.fragmentfin.open();

		},
		onSave: function() {
	
			var aMessages = [];
			
			if (!this.getView().byId("idName").getValue()) {

				this.getView().byId("idName").setValueState(sap.ui.core.ValueState.Error);
				
			var	oMessage = {
					
				type: 'Error',
				title: 'Error message',
				active: true,
				description: 'Name should not be empty',
				subtitle: 'Example of subtitle',
				counter: 1
				};
				
				aMessages.push(oMessage);

			} else {

				this.getView().byId("idName").setValueState(sap.ui.core.ValueState.None);

			}

			if (!this.getView().byId("idPan").getValue()) {

				this.getView().byId("idPan").setValueState(sap.ui.core.ValueState.Error);

			} else {

				this.getView().byId("idPan").setValueState(sap.ui.core.ValueState.None);

			}

			if (!this.getView().byId("idStreet").getValue()) {

				this.getView().byId("idStreet").setValueState(sap.ui.core.ValueState.Error);

			} else {

				this.getView().byId("idStreet").setValueState(sap.ui.core.ValueState.None);

			}

			if (!this.getView().byId("idBuilding").getValue()) {

				this.getView().byId("idBuilding").setValueState(sap.ui.core.ValueState.Error);

			} else {

				this.getView().byId("idBuilding").setValueState(sap.ui.core.ValueState.None);

			}

			if (!this.getView().byId("idCity").getValue()) {

				this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.Error);

			} else {

				this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.None);

			}

			if (!this.getView().byId("idPost").getValue()) {

				this.getView().byId("idPost").setValueState(sap.ui.core.ValueState.Error);

			} else {

				this.getView().byId("idPost").setValueState(sap.ui.core.ValueState.None);

			}

			if (!this.getView().byId("idDis").getValue()) {

				this.getView().byId("idDis").setValueState(sap.ui.core.ValueState.Error);

			} else {

				this.getView().byId("idDis").setValueState(sap.ui.core.ValueState.None);

			}

			if (!this.getView().byId("idReg").getValue()) {

				this.getView().byId("idReg").setValueState(sap.ui.core.ValueState.Error);

			} else {

				this.getView().byId("idReg").setValueState(sap.ui.core.ValueState.None);

			}

			var oDataModel = this.getView().getModel();

			var that = this;

			oDataModel.callFunction("/GetSupplierNo", {

				success: function(data) {

					that.oLocal.setProperty("/supplier/SupplierNo", data.GetSupplierNo.SupplierNo);

				}
			});
		},
		onConfirm: function(oEvent) {

			this.oRegion.setValue(oEvent.getParameter("selectedItem").getProperty("title"));

		}

	});

});