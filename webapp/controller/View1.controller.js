sap.ui.define([
    "art/bif/ur/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "art/bif/ur/util/Formatter",
    "sap/m/MessagePopover",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/core/routing/History",
    "sap/ui/core/message/Message",
    "sap/ui/core/library",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/routing/History"
], function (BaseController, JSONModel, Fragment, Formatter, MessagePopover, MessageBox,
    MessageToast, History, Message, library, Filter, FilterOperator, History) {

    var MessageType = library.MessageType;

    return BaseController.extend("art.bif.ur.controller.View1", {

        onInit: function () {

            var oMessageManager, oModel, oView;
            oView = this.getView();

            oMessageManager = sap.ui.getCore().getMessageManager();
            oView.setModel(oMessageManager.getMessageModel(), "message");

            oMessageManager.registerObject(oView, true);

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
                    "REGION": "",
                    "CREATED_BY": "",
                    "CHANGED_BY": ""

                }

            });

            this.getView().setModel(this.oLocal, "data");

        },

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

            sap.ui.getCore().getMessageManager().removeAllMessages();

            if (!this.getView().byId("idName").getValue()) {

                this.getView().byId("idName").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("idName").setValueStateText("Name cannot be empty");

                // var oMessage = new Message({
                // 	message: "Name cannot be empty",
                // 	type: MessageType.Error,
                // 	target: "/Dummy",
                // 	processor: this.getView().getModel()
                // });
                // sap.ui.getCore().getMessageManager().addMessages(oMessage);


            } else {

                this.getView().byId("idName").setValueState(sap.ui.core.ValueState.None);


            }

            if (!this.getView().byId("idPan").getValue()) {

                this.getView().byId("idPan").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("idPan").setValueStateText("Pan number cannot be empty");

                // var oMessage = new Message({
                // 	message: "Pan number cannot be empty",
                // 	type: MessageType.Error,
                // 	target: "/Dummy",
                // 	processor: this.getView().getModel()
                // });
                // sap.ui.getCore().getMessageManager().addMessages(oMessage);


            } else {

                this.getView().byId("idPan").setValueState(sap.ui.core.ValueState.None);

            }

            if (!this.getView().byId("idStreet").getValue()) {

                this.getView().byId("idStreet").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("idStreet").setValueStateText("Street cannot be empty");

                // var oMessage = new Message({
                // 	message: "Street cannot be empty",
                // 	type: MessageType.Error,
                // 	target: "/Dummy",
                // 	processor: this.getView().getModel()
                // });
                // sap.ui.getCore().getMessageManager().addMessages(oMessage);



            } else {

                this.getView().byId("idStreet").setValueState(sap.ui.core.ValueState.None);

            }

            if (!this.getView().byId("idBuilding").getValue()) {

                this.getView().byId("idBuilding").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("idBuilding").setValueStateText("Building number cannot be empty");

                // var oMessage = new Message({
                // 	message: "Building cannot be empty",
                // 	type: MessageType.Error,
                // 	target: "/Dummy",
                // 	processor: this.getView().getModel()
                // });
                // sap.ui.getCore().getMessageManager().addMessages(oMessage);


            } else {

                this.getView().byId("idBuilding").setValueState(sap.ui.core.ValueState.None);

            }

            if (!this.getView().byId("idCity").getValue()) {

                this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("idCity").setValueStateText("City cannot be empty");

                // var oMessage = new Message({
                // 	message: "City cannot be empty",
                // 	type: MessageType.Error,
                // 	target: "/Dummy",
                // 	processor: this.getView().getModel()
                // });
                // sap.ui.getCore().getMessageManager().addMessages(oMessage);


            } else {

                this.getView().byId("idCity").setValueState(sap.ui.core.ValueState.None);

            }

            if (!this.getView().byId("idPost").getValue()) {

                this.getView().byId("idPost").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("idPost").setValueStateText("Post code cannot be empty");

                // var oMessage = new Message({
                // 	message: "Post code cannot be empty",
                // 	type: MessageType.Error,
                // 	target: "/Dummy",
                // 	processor: this.getView().getModel()
                // });
                // sap.ui.getCore().getMessageManager().addMessages(oMessage);


            } else {

                this.getView().byId("idPost").setValueState(sap.ui.core.ValueState.None);

            }

            if (!this.getView().byId("idDis").getValue()) {

                this.getView().byId("idDis").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("idDis").setValueStateText("District cannot be empty");

                // var oMessage = new Message({
                // 	message: "District cannot be empty",
                // 	type: MessageType.Error,
                // 	target: "/Dummy",
                // 	processor: this.getView().getModel()
                // });
                // sap.ui.getCore().getMessageManager().addMessages(oMessage);


            } else {

                this.getView().byId("idDis").setValueState(sap.ui.core.ValueState.None);

            }

            if (!this.getView().byId("idReg").getValue()) {

                this.getView().byId("idReg").setValueState(sap.ui.core.ValueState.Error);
                this.getView().byId("idReg").setValueStateText("Region cannot be empty");

                // var oMessage = new Message({
                // 	message: "Region cannot be empty",
                // 	type: MessageType.Error,
                // 	target: "/Dummy",
                // 	processor: this.getView().getModel()
                // });
                // sap.ui.getCore().getMessageManager().addMessages(oMessage);


            } else {

                this.getView().byId("idReg").setValueState(sap.ui.core.ValueState.None);

            }


            var that = this;

            if (this.getView().getModel("message").getProperty("/").length === 0) {

                MessageBox.confirm("Please check information before save once it's saved you won't be able to change you need to contact admin to change", {

                    title: "Do you want to save it?",
                    onClose: this.messConfirm.bind(this)

                });

                var oDataModel = this.getView().getModel();

                oDataModel.callFunction("/GetSupplierNo", {

                    success: function (data) {

                        var oUser = new sap.ushell.services.UserInfo();
                        that.oLocal.setProperty("/supplier/SUPPLIE_NO", data.GetSupplierNo.SupplierNo);
                        that.oLocal.setProperty("/supplier/CREATED_BY", oUser.getId());

                    }
                });

            }

        },
        onConfirm: function (oEvent) {

            this.oRegion.setValue(oEvent.getParameter("selectedItem").getProperty("title"));

        },

        messConfirm: function (result) {

            if (result === "OK") {

                var oDataModel = this.getView().getModel();

                var payLoad = this.getView().getModel("data").getProperty("/supplier");
                oDataModel.create("/UserSet", payLoad, {

                    success: this.afterSave.bind(this),
                    error: this.afterFail

                });

            }

        },

        afterSave: function (oSucc) {

            MessageToast.show("User" + " " + oSucc.SUPPLIE_NO + " " + "registred successfully");
            this.getView().getModel("data").setProperty("/supplier", "");
            location.reload();

        },

        afterFail: function (oFail) {

            var aMessages = sap.ui.getCore().getMessageManager().getMessageModel().oData;

            for (var i = 0; i < aMessages.length; i++) {

                if (aMessages[i].message === "An exception was raised") {

                    sap.ui.getCore().getMessageManager().removeMessages(aMessages[i]);
                }

            }

        },

        onMessagePopoverPress: function (oEvent) {

            var oSourceControl = oEvent.getSource();
            this._getMessagePopover().then(function (oMessagePopover) {
                oMessagePopover.openBy(oSourceControl);
            });
        },
        _getMessagePopover: function () {
            var oView = this.getView();

            // create popover lazily (singleton)
            if (!this._pMessagePopover) {
                this._pMessagePopover = Fragment.load({
                    id: oView.getId(),
                    name: "art.bif.ur.fragments.MessagePop"
                }).then(function (oMessagePopover) {
                    oView.addDependent(oMessagePopover);
                    return oMessagePopover;
                });
            }
            return this._pMessagePopover;
        },
        onSearch: function (oSearch) {

            var oView = this.getView();

            var State = oSearch.getParameter("value");

            var oFilter = new Filter("Bezei", FilterOperator.Contains, State);

            var oFilterFin = new Filter({

                filters: [oFilter],
                and: false

            });
            var binding = this.fragmentfin.getBinding("items");

            binding.filter(oFilterFin);
        }

    });

});