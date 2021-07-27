sap.ui.define([
    "art/bif/ur/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "art/bif/ur/util/Formatter",
    "sap/m/MessagePopover",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/core/routing/History"
], function (BaseController, JSONModel, Fragment, Formatter, MessagePopover, MessageBox,
    MessageToast, History) {

    return BaseController.extend("art.bif.ur.controller.View1", {

        onInit: function () {

            this.oLocal = new JSONModel({

                "supplier": {
                    "SUPPLIE_NO": "",
                    "NAME": "",
                    "PAN_NO": "",
                    "BUILDING": "",
                    "STREET": "",
                    "CITY": "",
                    "DISTRICT": "",
                    "POSTAL_CODE": "",
                    "REGION": ""

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

        onHelp: function (oEvent) {

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
        loadState: function (oFragment) {

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
        onSave: function () {

            if (!this.getView().byId("idName").getValue()) {

                this.getView().byId("idName").setValueState(sap.ui.core.ValueState.Error);

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


            var that = this;

            MessageBox.confirm("Please check information before save once it's saved you won't be able to change you need contact admin to change", {

                title: "Do you want to save it?",
                onClose: this.messConfirm.bind(this)

            });

            var oDataModel = this.getView().getModel();

            oDataModel.callFunction("/GetSupplierNo", {

                success: function (data) {
                    debugger;
                    that.oLocal.setProperty("/supplier/SUPPLIE_NO", data.GetSupplierNo.SupplierNo);

                }
            });
        },
        onConfirm: function (oEvent) {

            this.oRegion.setValue(oEvent.getParameter("selectedItem").getProperty("title"));

        },

        messConfirm: function (result) {

            if (result === "OK") {

                var oDataModel = this.getView().getModel();

                var payLoad = this.getView().getModel("data").getProperty("/supplier");
                debugger;
                oDataModel.create("/UserSet", payLoad, {

                    success: this.afterSave.bind(this),
                    error: this.afterFail

                });

            }

        },

        afterSave: function (oSucc) {

            MessageToast.show("User registred successfully");
            this.getView().getModel("data").setProperty("/supplier", "");
            location.reload();

        },

        afterFail: function (oFail) {

        }
    });

});