"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var common_1 = require("@angular/common");
var admin_routing_1 = require("./admin.routing");
var admin_component_1 = require("./admin.component");
var register_form_component_1 = require("./signup/register-form.component");
var sign_in_form_component_1 = require("./login/sign-in-form.component");
var home_component_1 = require("./home/home.component");
var registeration_service_1 = require("./_services/registeration.service");
var auth_guard_1 = require("./_guards/auth.guard");
var authentication_service_1 = require("./_services/authentication.service");
var material_1 = require('@angular/material');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                admin_routing_1.AdminRouting,
                material_1.MaterialModule.forRoot()
            ],
            declarations: [admin_component_1.AdminComponent, register_form_component_1.RegisterFormComponent, sign_in_form_component_1.SignInFormComponent, home_component_1.HomeComponent],
            providers: [registeration_service_1.RegisterUserService, auth_guard_1.AuthGuard, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map